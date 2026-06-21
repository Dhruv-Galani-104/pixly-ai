"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "E-commerce Store Owner",
    avatar: "PS",
    rating: 5,
    content:
      "Botiyo AI completely transformed how I handle product photography. What used to take hours of Photoshop work now takes 5 seconds. My Amazon listings look incredibly professional.",
    gradient: "from-primary to-primary-glow",
  },
  {
    name: "Jake Mitchell",
    role: "Freelance Graphic Designer",
    avatar: "JM",
    rating: 5,
    content:
      "The AI background removal is shockingly accurate — even on detailed hair and transparent objects. I now use Botiyo AI for all client quick-turnaround projects. It's a huge time saver.",
    gradient: "from-secondary to-secondary-glow",
  },
  {
    name: "Ling Wei",
    role: "Social Media Manager",
    avatar: "LW",
    rating: 5,
    content:
      "Generative Fill blew my mind. I needed landscape images for different banner sizes and Botiyo AI just... filled them in beautifully. Our social media engagement has tripled since we leveled up visuals.",
    gradient: "from-primary to-secondary",
  },
  {
    name: "Carlos Romero",
    role: "Portrait Photographer",
    avatar: "CR",
    rating: 5,
    content:
      "I deliver polished headshots to clients 10x faster now. Smart Face Crop + AI Retouch is a killer combination. My clients can't believe the turnaround time. Absolute game changer.",
    gradient: "from-secondary to-primary",
  },
  {
    name: "Sarah Thompson",
    role: "Content Creator & YouTuber",
    avatar: "ST",
    rating: 5,
    content:
      "For thumbnails and banner art I used to spend 30 mins per image. With Botiyo AI I'm done in under 2 minutes. The quality is incredible and the free plan got me started with zero commitment.",
    gradient: "from-primary-glow to-secondary-glow",
  },
  {
    name: "Amara Osei",
    role: "Startup Founder",
    avatar: "AO",
    rating: 5,
    content:
      "As a non-designer running a startup, Botiyo AI is invaluable. Our pitch decks, website, and marketing materials all look like they were done by a professional creative studio.",
    gradient: "from-primary to-primary-glow",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      aria-label="User Testimonials"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-glass rounded-full px-4 py-2 mb-6 glass border border-card-border">
            <Star className="h-4 w-4 text-primary animate-pulse" fill="currentColor" />
            <span className="text-sm font-medium">Loved by Creators</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Real Results from </span>
            <span className="bg-gradient-primary !bg-clip-text text-transparent">Real Users</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 50,000+ designers, creators, and business owners who use Botiyo AI daily to create stunning visuals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl glass border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-subtle flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" fill="currentColor" />

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary" fill="currentColor" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-card-border/50">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-xs font-bold text-background flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
