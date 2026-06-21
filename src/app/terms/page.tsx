"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Calendar, HelpCircle } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";

const TermsPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <Breadcrumb items={[{ label: "Terms & Conditions", href: "/terms" }]} />
        {/* Header */}
        <div className="border-b border-card-border pb-8 mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-gradient-glass rounded-full px-4 py-2 mb-6 glass border border-card-border"
          >
            <Scale className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Legal Agreements</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Terms & Conditions
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
            <h2 className="text-2xl font-bold text-foreground">1. Introduction & Acceptance</h2>
            <p>
              Welcome to **Botiyo AI** (accessible at [botiyo.live](https://botiyo.live)). These Terms and Conditions ("Terms") govern your use of the Botiyo AI website, applications, services, and tools (collectively, the "Service").
            </p>
            <p>
              By accessing, browsing, or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Description of Service</h2>
            <p>
              Botiyo AI is a web-based, AI-powered image editing platform. The Service allows users to upload images and apply various automated transformations including, but not limited to, AI background removal, background replacement, generative fill, smart cropping, face cropping, and image quality upscaling.
            </p>
            <p>
              We leverage cloud infrastructures and API integrations to process, transform, and deliver final images. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. User Registration & Accounts</h2>
            <p>
              To access full editing capabilities, you must authenticate using your Google Account. NextAuth.js handles our authentication secure session protocol. 
            </p>
            <p>
              You agree to provide accurate, current, and complete information. You are solely responsible for maintaining the confidentiality of your credentials and account sessions. You agree to notify us immediately at <a href="mailto:support@botiyo.live" className="text-primary hover:underline">support@botiyo.live</a> of any unauthorized use of your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Subscription Plans & Billing</h2>
            <p>
              We offer two tiers of access:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Free Tier:</strong> Provides limited access (up to 3 image edits) with standard resolutions.
              </li>
              <li>
                <strong className="text-foreground">Pro Tier:</strong> Priced at $19/month, providing unlimited image uploads, full access to all premium AI tools, high-resolution upscaling, priority queues, and a commercial license.
              </li>
            </ul>
            <p>
              Payments are processed securely via **Stripe**. All subscriptions are billed on a recurring monthly cycle. You may cancel your subscription at any time via your account settings page. Cancellations will take effect at the end of the current billing cycle. No refunds will be provided for partial months.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property & Content Ownership</h2>
            <p>
              <strong className="text-foreground">User Content:</strong> You retain all ownership rights, copyrights, and intellectual property rights in the images you upload to the Service ("Inputs") and the images generated by the Service ("Outputs"). Botiyo AI does not claim any ownership rights over your Inputs or Outputs.
            </p>
            <p>
              <strong className="text-foreground">Service License:</strong> By uploading Inputs, you grant Botiyo AI a temporary, worldwide, royalty-free license to store, process, and transmit the images solely for the purpose of providing and performing the image transformation features. Inputs are deleted shortly after processing, except as cached temporarily to complete user workflows.
            </p>
            <p>
              <strong className="text-foreground">Platform Intellectual Property:</strong> All designs, code, assets, logos, and technology associated with Botiyo AI are the exclusive property of Botiyo AI and protected by copyright and intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Acceptable Use Guidelines</h2>
            <p>
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Upload or generate images that are illegal, sexually explicit, harmful, abusive, defamatory, or violate the privacy of others.</li>
              <li>Attempt to scrape, reverse engineer, or disrupt the operation of the Service, its networks, or third-party APIs.</li>
              <li>Artificially bypass usage limits or initiate bulk automated requests.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Disclaimer of Warranties</h2>
            <p className="italic">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT TRANSFORMATION OUTPUTS WILL BE 105% ACCURATE.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL BOTIYO AI, ITS DIRECTORS, OR ITS EMPLOYEES BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF DATA, PROFITS, OR REVENUES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Contact Us</h2>
            <p>
              If you have any questions or require clarification regarding these Terms, please contact us via email at <a href="mailto:support@botiyo.live" className="text-primary hover:underline">support@botiyo.live</a>.
            </p>
          </section>
        </motion.div>

        {/* Bottom Help Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-card-border text-center text-sm"
        >
          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
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

export default TermsPage;
