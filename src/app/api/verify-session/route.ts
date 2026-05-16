import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import prisma from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();
    if (!sessionId) {
      return NextResponse.json({ error: "No session ID" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const userId = session.metadata?.userId;

      if (userId) {
        // Update user to Paid plan
        await prisma.users.update({
          where: { id: userId },
          data: {
            plan: "Paid",
            usageLimit: 999999,
            stripeCustomerId: session.customer as string,
          },
        });

        // Upsert subscription to ensure we don't duplicate
        const subscriptionId = session.subscription as string;
        if (subscriptionId) {
          const existing = await prisma.subscriptions.findFirst({
            where: { stripeSubscriptionId: subscriptionId },
          });

          if (!existing) {
            await prisma.subscriptions.create({
              data: {
                userId,
                stripeSubscriptionId: subscriptionId,
                stripeCustomerId: session.customer as string,
              },
            });
          }
        }
        return NextResponse.json({ success: true, upgraded: true });
      }
    }

    return NextResponse.json({ success: true, upgraded: false });
  } catch (error) {
    console.error("Error verifying session:", error);
    return NextResponse.json(
      { error: "Failed to verify session" },
      { status: 500 }
    );
  }
}
