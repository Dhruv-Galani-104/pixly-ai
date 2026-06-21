"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, ImageIcon, Zap, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Happy Creators",
    description: "Designers, entrepreneurs & content creators worldwide",
    color: "primary",
  },
  {
    icon: ImageIcon,
    value: "2M+",
    label: "Images Processed",
    description: "AI transformations completed in seconds",
    color: "secondary",
  },
  {
    icon: Zap,
    value: "< 5 sec",
    label: "Average Processing",
    description: "Faster than any traditional desktop software",
    color: "primary",
  },
  {
    icon: Star,
    value: "4.9 / 5",
    label: "User Rating",
    description: "Consistently rated best AI photo tool",
    color: "secondary",
  },
];

const Stats = () => {
  return (
    <section
      id="stats"
      className="py-20 relative overflow-hidden border-t border-b border-card-border"
      aria-label="Platform Statistics"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Trusted by Creators
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why <span className="bg-gradient-primary !bg-clip-text text-transparent">Thousands Choose</span> Botiyo AI
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group text-center p-8 rounded-2xl glass border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-subtle"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-${stat.color}/10 border border-${stat.color}/20 group-hover:border-${stat.color}/40 transition-colors`}>
                <stat.icon className={`h-7 w-7 text-${stat.color}`} />
              </div>
              <div className="text-4xl font-bold bg-gradient-primary !bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-foreground font-bold mb-2">{stat.label}</div>
              <p className="text-muted-foreground text-xs leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
