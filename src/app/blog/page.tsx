"use client";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog — AI Photo Editing Tips, Tutorials & News",
  description: "Read expert articles on AI background removal, generative fill, image upscaling, smart cropping, and more. Botiyo AI's creative tutorial hub for designers & creators.",
  alternates: { canonical: "https://botiyo.live/blog" },
  openGraph: { url: "https://botiyo.live/blog", title: "Botiyo AI Blog", description: "AI photo editing tutorials, tips, and creative guides." },
};

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Scissors, Expand, Zap, Crop, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import Breadcrumb from "@/components/breadcrumb";

// Helper to map string to Lucide icon component
const getIcon = (name: string) => {
  switch (name) {
    case "Scissors":
      return <Scissors className="h-6 w-6 text-primary" />;
    case "Expand":
      return <Expand className="h-6 w-6 text-secondary" />;
    case "Crop":
      return <Crop className="h-6 w-6 text-primary" />;
    default:
      return <Zap className="h-6 w-6 text-secondary" />;
  }
};

const BlogPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />

      <div className="container mx-auto px-4 relative z-10 pt-0">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />
      </div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-1.5s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-glass rounded-full px-4 py-2 mb-6 glass border border-card-border">
            <BookOpen className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Botiyo AI Hub</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-primary !bg-clip-text text-transparent">
              Creative Insights &
            </span>
            <br />
            <span className="text-foreground">AI Design Tutorials</span>
          </h1>

          <p className="text-lg text-muted-foreground">
            Explore our professionally curated articles, guides, and tech breakdowns. Learn how to speed up your creative workflow and get the most out of Botiyo AI's advanced image processing tools.
          </p>
        </motion.div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col h-full rounded-2xl border border-card-border glass overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-glow-primary"
            >
              {/* Card visual header */}
              <div className="p-8 pb-4 flex items-center justify-between border-b border-card-border bg-card/20 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-card-border group-hover:border-primary/30 transition-colors">
                  {getIcon(post.iconName)}
                </div>
                <span className="text-xs font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  {post.category}
                </span>
                {/* Subtle glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/15 transition-all duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-card-border/50 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-[10px] font-bold text-background">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{post.author}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
