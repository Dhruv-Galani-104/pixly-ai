"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Info } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";

const PrivacyPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy" }]} />
        {/* Header */}
        <div className="border-b border-card-border pb-8 mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-gradient-glass rounded-full px-4 py-2 mb-6 glass border border-card-border"
          >
            <ShieldCheck className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Privacy Center</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Privacy Policy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center md:justify-start space-x-2 text-sm text-muted-foreground"
          >
            <Calendar className="h-4 w-4 text-secondary" />
            <span>Last Updated: June 21, 2026</span>
          </motion.div>
        </div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>
              At **Botiyo AI** ("we," "our," or "us"), we value and respect your privacy. This Privacy Policy details how we collect, use, disclose, and safeguard your information when you visit and use our website, [botiyo.live](https://botiyo.live) (the "Service").
            </p>
            <p>
              Please read this policy carefully. By accessing or using our Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
            <p>We collect several types of information to provide and improve our Service for you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Authentication Data:</strong> When you log in to our Service, you authenticate via Google Sign-In. We collect your Google email address, display name, and avatar image URL. This integration is handled securely via NextAuth.
              </li>
              <li>
                <strong className="text-foreground">Uploaded Images:</strong> To perform AI image editing (background removal, generative fill, smart cropping, upscale, etc.), you upload image files. These images are transmitted securely to our hosting partner (ImageKit) for processing. We do not store these images permanently on our databases; they are temporarily cached and deleted shortly after processing.
              </li>
              <li>
                <strong className="text-foreground">Billing Data:</strong> For Pro subscriptions, our payment processor is Stripe. We do not store or collect your payment card details. That information is provided directly to Stripe, whose use of your personal information is governed by their Privacy Policy.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong> We automatically collect information about how you interact with the Service, such as pages visited, tool clicks, and system diagnostics to prevent abuse and manage plan limits.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Cookies and Advertising (Google AdSense)</h2>
            <p>
              We use cookies to analyze traffic, manage sessions, and serve advertisements. Cookies are small text files stored on your device.
            </p>
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center">
                <Info className="h-5 w-5 text-primary mr-2" />
                Google AdSense Disclosure
              </h3>
              <p className="text-sm">
                We use **Google AdSense** to serve advertisements when you visit our website. Google, as a third-party vendor, uses cookies to serve ads on our site.
              </p>
              <p className="text-sm">
                Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to `botiyo.live` and/or other sites on the Internet. 
              </p>
              <p className="text-sm">
                Users may opt out of personalized advertising by visiting Google's Ad Settings (at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">adssettings.google.com</a>) or by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutads.info</a>.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Third-Party Service Providers</h2>
            <p>
              We employ third-party companies and tools to facilitate our Service, perform Service-related operations, or assist us in analyzing how our Service is used:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Google OAuth & NextAuth:</strong> Used for secure user registration and login sessions.</li>
              <li><strong className="text-foreground">Stripe:</strong> Used to manage, process, and bill subscription renewals.</li>
              <li><strong className="text-foreground">ImageKit:</strong> Used to host, optimize, and perform instant AI URL image transformations.</li>
              <li><strong className="text-foreground">Google AdSense:</strong> Used to display advertisements and monetize free-tier traffic.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Data Retention & Deletion</h2>
            <p>
              We retain your account details (Google email, name, subscription status, edit count limits) for as long as your account is active.
            </p>
            <p>
              Images uploaded for transformations are temporarily processed and cached. They are not stored permanently and are automatically expunged from processing servers. If you wish to delete your account data, please contact us at <a href="mailto:support@botiyo.live" className="text-primary hover:underline">support@botiyo.live</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Your Data Rights</h2>
            <p>
              Depending on your location, you may have rights under privacy laws like the General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to request that we correct any inaccuracies.</li>
              <li>The right to request the erasure of your personal details.</li>
              <li>The right to restrict or object to the processing of your data.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Contact Details</h2>
            <p>
              For questions, concerns, or requests regarding this Privacy Policy, please email us at <a href="mailto:support@botiyo.live" className="text-primary hover:underline">support@botiyo.live</a>.
            </p>
          </section>
        </motion.div>

        {/* Bottom Navigation Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-card-border text-center text-sm"
        >
          <div className="flex justify-center space-x-6">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-card-border">•</span>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Support Desk
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPage;
