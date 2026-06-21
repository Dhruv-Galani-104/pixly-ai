"use client";
import React from "react";
import { motion } from "framer-motion";
import { Upload, Wand2, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Photo",
    description:
      "Drag and drop any JPG, PNG or WebP image into the Botiyo AI editor. Your image is securely transmitted and ready for transformation instantly.",
    gradient: "from-primary to-primary-glow",
  },
  {
    step: "02",
    icon: Wand2,
    title: "Choose an AI Tool",
    description:
      "Select from our suite of AI-powered tools: Remove Background, Generative Fill, AI Upscale 2x, Smart Crop, Drop Shadow, and more. No technical skill needed.",
    gradient: "from-secondary to-secondary-glow",
  },
  {
    step: "03",
    icon: Download,
    title: "Download & Use",
    description:
      "Your image is processed in under 5 seconds. Preview the result with an interactive before/after slider and download in full quality instantly.",
    gradient: "from-primary to-secondary",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden"
      aria-label="How Botiyo AI Works"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-glass rounded-full px-4 py-2 mb-6 glass border border-card-border">
            <Wand2 className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Simple 3-Step Process</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">How </span>
            <span className="bg-gradient-primary !bg-clip-text text-transparent">Botiyo AI</span>
            <span className="text-foreground"> Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No Photoshop. No tutorials. No learning curve. Just upload, click, and download.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative">
          {/* Connector lines for desktop */}
          <div className="hidden md:block absolute top-16 left-[calc(33%-20px)] right-[calc(33%-20px)] h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative z-10 group"
            >
              <div className="text-center p-8 rounded-2xl glass border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary h-full flex flex-col items-center">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-background shadow-glow-subtle">
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 mt-4 group-hover:animate-glow-pulse shadow-glow-subtle`}>
                  <step.icon className="h-10 w-10 text-background" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps (mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <ArrowRight className="h-6 w-6 rotate-90 text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
