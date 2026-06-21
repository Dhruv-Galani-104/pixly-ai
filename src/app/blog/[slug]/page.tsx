"use client";
import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import Breadcrumb from "@/components/breadcrumb";

const BlogPostPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-foreground">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The blog post you are looking for does not exist or has been moved.</p>
        <Link href="/blog" className="inline-flex items-center text-primary font-bold hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  // Parse text blocks to render clean HTML headings, lists, and paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Handle Headings level 3 (###)
      if (trimmed.startsWith("###")) {
        return (
          <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground bg-gradient-primary !bg-clip-text text-transparent inline-block">
            {trimmed.replace(/^###\s+/, "")}
          </h3>
        );
      }

      // Handle Headings level 4 (####)
      if (trimmed.startsWith("####")) {
        return (
          <h4 key={index} className="text-xl font-bold mt-6 mb-3 text-foreground border-l-2 border-primary pl-3">
            {trimmed.replace(/^####\s+/, "")}
          </h4>
        );
      }

      // Handle Bulleted lists (- or *)
      if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
        const items = trimmed.split("\n").map(item => item.replace(/^[-*]\s+/, ""));
        return (
          <ul key={index} className="list-disc pl-6 space-y-3 my-4 text-muted-foreground">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
      }

      // Standard Paragraph
      return (
        <p key={index} className="text-muted-foreground leading-relaxed text-lg mb-6">
          {trimmed}
        </p>
      );
    });
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title.length > 40 ? post.title.substring(0, 40) + "..." : post.title },
            ]}
          />
        </motion.div>

        {/* Article Meta Header */}
        <div className="border-b border-card-border pb-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-6">
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-between gap-6"
          >
            {/* Author info */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-primary" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share action */}
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors border border-card-border rounded-lg px-4 py-2 bg-card/25 cursor-pointer"
            >
              <Share2 className="h-4 w-4" />
              <span>Share Article</span>
            </button>
          </motion.div>
        </div>

        {/* Article Body Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-invert max-w-none mb-16"
        >
          {renderContent(post.content)}
        </motion.div>

        {/* Bottom Call to Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-2xl border border-primary/20 bg-gradient-glass relative overflow-hidden text-center shadow-glow-subtle"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
          <div className="relative z-10">
            <Sparkles className="h-10 w-10 text-primary mx-auto mb-4 animate-glow-pulse" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">Transform Your Images Instantly</h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm md:text-base">
              Try the AI background remover, generative fill, and smart crop tools on Botiyo AI now. Start for free.
            </p>
            <Link
              href="/#editor"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-primary font-semibold text-background hover:opacity-95 transition-opacity"
            >
              Launch Editor
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default BlogPostPage;
