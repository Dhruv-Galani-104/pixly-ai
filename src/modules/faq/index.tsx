"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Botiyo AI and what can it do?",
    answer:
      "Botiyo AI is a free, browser-based AI photo editing platform available at botiyo.live. It lets you remove backgrounds, apply generative fill (outpainting), upscale image resolution 2x, smart crop with face detection, add drop shadows, and perform AI retouching — all without installing any software. Simply upload an image, choose a tool, and get professional results in under 5 seconds.",
  },
  {
    question: "Is Botiyo AI free to use?",
    answer:
      "Yes! Botiyo AI offers a free plan that includes 3 image edits, giving you full access to our core AI background removal and other tools. For unlimited edits, access to all premium AI tools (including 4K resolution output, batch processing, and API access), you can upgrade to our Pro plan at $19/month. You can cancel anytime.",
  },
  {
    question: "How does AI background removal work?",
    answer:
      "Botiyo AI uses deep neural network models trained on millions of images to detect the primary subject in your photo and automatically generate a precise masking boundary around it. The AI understands complex edges such as hair, fur, transparent glass, and overlapping objects. The background is removed cleanly without manual selection, and the result is available as a transparent PNG.",
  },
  {
    question: "What is Generative Fill and how is it different from cropping?",
    answer:
      "Generative Fill (also called outpainting) is an AI feature that expands the borders of your image by synthesizing new, realistic content to fill in the extended canvas. Unlike cropping (which cuts content away), Generative Fill adds content. For example, you can take a square portrait and expand it to a wide 16:9 banner, with the AI generating a matching background automatically. You can also provide a text prompt to guide what content is generated.",
  },
  {
    question: "How do I remove a background from my photo online for free?",
    answer:
      "To remove a background for free on Botiyo AI: 1) Visit botiyo.live, 2) Upload your photo using the drag-and-drop zone or the file browser, 3) Click 'Remove Background' in the AI Tools panel on the left, 4) Wait 3–5 seconds for the AI to process, 5) Download your transparent PNG cutout. No sign-up is needed for your first free edit.",
  },
  {
    question: "Is my uploaded photo safe and private?",
    answer:
      "Yes. Your photos are transmitted securely via HTTPS to our processing partner ImageKit for transformation. They are not stored permanently in our databases. Images are temporarily cached only for the duration of your editing session, then automatically deleted. We never share or use your images for any purpose other than performing the transformation you requested. Please see our Privacy Policy for full details.",
  },
  {
    question: "Does Botiyo AI work on mobile phones and tablets?",
    answer:
      "Yes! Botiyo AI is fully responsive and works on all modern devices including iPhone, Android phones, iPads, and tablets. The interface adapts its layout automatically for smaller screens, and all AI tools function the same way. Simply open botiyo.live in your mobile browser, upload a photo from your camera roll, and start editing.",
  },
  {
    question: "What image formats does Botiyo AI support?",
    answer:
      "Botiyo AI accepts JPG/JPEG, PNG, and WebP image formats. For downloads, you can save your edited images as JPG (with white background) or PNG (with transparent background, ideal after background removal). We recommend uploading high-resolution images (at least 800×800 pixels) for the best AI transformation results.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // JSON-LD FAQ Structured Data for AEO / Google AI Overviews
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      {/* JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-glass rounded-full px-4 py-2 mb-6 glass border border-card-border">
            <HelpCircle className="h-4 w-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium">People Also Ask</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="bg-gradient-primary !bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Botiyo AI's tools, pricing, and capabilities.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl glass border border-card-border overflow-hidden hover:border-primary/20 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors text-sm md:text-base">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all group-hover:bg-primary/20">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-card-border/50 pt-4">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
