"use client";

import { useEffect } from "react";

interface SchemaMarkupProps {
  type:
    | "BlogPosting"
    | "Person"
    | "Organization"
    | "BreadcrumbList"
    | "FAQPage";
  data: Record<string, any>;
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
}

export function BlogPostingSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) {
  return (
    <SchemaMarkup
      type="BlogPosting"
      data={{
        headline: title,
        description: description,
        image: image,
        datePublished: datePublished,
        dateModified: dateModified,
        author: {
          "@type": "Person",
          name: author,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      }}
    />
  );
}

export function PersonSchema({
  name,
  image,
  sameAs,
  url,
}: {
  name: string;
  image?: string;
  sameAs?: string[];
  url: string;
}) {
  return (
    <SchemaMarkup
      type="Person"
      data={{
        name: name,
        image: image,
        url: url,
        sameAs: sameAs || [],
      }}
    />
  );
}

export function OrganizationSchema({
  name,
  logo,
  url,
  sameAs,
}: {
  name: string;
  logo?: string;
  url: string;
  sameAs?: string[];
}) {
  return (
    <SchemaMarkup
      type="Organization"
      data={{
        name: name,
        logo: logo,
        url: url,
        sameAs: sameAs || [],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
        },
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  return (
    <SchemaMarkup
      type="BreadcrumbList"
      data={{
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export function FAQPageSchema({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <SchemaMarkup
      type="FAQPage"
      data={{
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
