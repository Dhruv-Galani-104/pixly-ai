"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/breadcrumb";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <Breadcrumb items={[{ label: "Contact Us", href: "/contact" }]} />
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-glass rounded-full px-4 py-2 mb-6 glass border border-card-border">
            <Mail className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-primary !bg-clip-text text-transparent">
              Contact Our Team
            </span>
          </h1>

          <p className="text-lg text-muted-foreground">
            Have questions about Botiyo AI, our pricing plans, or technical capabilities? Reach out to us and we will respond as quickly as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-2xl border border-card-border glass relative overflow-hidden">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                Support Channels
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                We are dedicated to providing the best AI photo editing experience. If you run into issues or have suggestions, please check our help channels.
              </p>

              <div className="space-y-6">
                {/* Email Support Card */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Email Support</h3>
                    <a
                      href="mailto:support@botiyo.live"
                      className="text-primary text-sm hover:underline font-semibold block mt-1"
                    >
                      support@botiyo.live
                    </a>
                    <span className="text-xs text-muted-foreground">We respond within 24 business hours.</span>
                  </div>
                </div>

                {/* Company Address Card */}
                <div className="flex items-start space-x-4 pt-4 border-t border-card-border/50">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Official Website</h3>
                    <span className="text-muted-foreground text-sm block mt-1">
                      Botiyo AI Technologies
                    </span>
                    <a href="https://botiyo.live" className="text-xs text-secondary hover:underline">
                      www.botiyo.live
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Side-Tip */}
            <div className="p-6 rounded-2xl border border-primary/10 bg-primary/5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2 flex items-center">
                <AlertCircle className="h-4 w-4 text-primary mr-2" />
                Pro-Tier Subscribers
              </p>
              Pro plan users receive priority queue access. When contacting email support, please send the request from your registered Google Account email address.
            </div>
          </motion.div>

          {/* Contact Form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-2xl border border-card-border glass relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full p-4 rounded-xl bg-background border ${
                          errors.name ? "border-destructive" : "border-card-border"
                        } text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full p-4 rounded-xl bg-background border ${
                          errors.email ? "border-destructive" : "border-card-border"
                        } text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={`w-full p-4 rounded-xl bg-background border ${
                          errors.subject ? "border-destructive" : "border-card-border"
                        } text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                        placeholder="Feedback / Feature Request / Account Support"
                      />
                      {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className={`w-full p-4 rounded-xl bg-background border ${
                          errors.message ? "border-destructive" : "border-card-border"
                        } text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none`}
                        placeholder="How can we help you?"
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="hero"
                      disabled={isSubmitting}
                      className="w-full py-4 text-white font-bold flex items-center justify-center rounded-xl"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 space-y-6"
                  >
                    <CheckCircle2 className="h-20 w-20 text-primary mx-auto animate-bounce" />
                    <h2 className="text-3xl font-bold text-foreground">Message Sent Successfully!</h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Thank you for contacting Botiyo AI. We have received your inquiry and our support team will get back to you at your provided email address within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="px-8 mt-6"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
