import { SectionHeader, CallToActionSection } from "@/components/sections";
import { BlogCard } from "@/components/ui/BlogCard";
import { Post } from "@/types/wordpress";
import { HeroSection } from "@/components/ui/HeroSection";
import { wordPressService } from "@/services";
import { FEATURED_POSTS_LIMIT, SITE_NAME, AUTHOR_NAME } from "@/constants";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to RyzNotes - a personal blog about web development, programming, and technology by Rizky Ramadhan. Explore articles, tutorials, and insights about JavaScript, React, Next.js, and more.",
  keywords: [
    "blog",
    "web development",
    "programming",
    "JavaScript",
    "React",
    "Next.js",
    "frontend development",
    "web developer blog",
  ],
  openGraph: {
    title: `${SITE_NAME} - Personal Blog`,
    description:
      "Explore my blog about web development, programming, and technology.",
    url: SITE_URL,
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

async function getFeaturedPosts(): Promise<Post[]> {
  return await wordPressService.getPosts<Post>();
}

export default async function Home() {
  const posts = await getFeaturedPosts();

  return (
    <>
      <section id="featured-posts-section" className="w-full py-20 lg:py-24">
        <HeroSection />
        <div className="py-20">
          <SectionHeader title="Featured posts" />
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 py-5 sm:grid-cols-2">
            {posts.slice(0, FEATURED_POSTS_LIMIT).map((post) => (
              <BlogCard
                key={post.id}
                title={post.title.rendered}
                url={post.slug}
                category={post._embedded?.["wp:term"]?.[0]?.[0].name}
                date={post.date}
                description={post.excerpt.rendered}
              />
            ))}
          </div>
        </div>
      </section>
      <CallToActionSection />
    </>
  );
}
