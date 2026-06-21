"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const all = [{ label: "Home", href: "/" }, ...items];

  // JSON-LD Breadcrumb structured data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://botiyo.live${item.href}` : undefined,
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
          {all.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index === 0 && <Home className="h-3 w-3 mr-1 text-primary" />}
              {index < all.length - 1 ? (
                <>
                  <Link
                    href={item.href!}
                    className="hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="h-3 w-3 text-card-border flex-shrink-0" />
                </>
              ) : (
                <span className="text-foreground font-semibold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
