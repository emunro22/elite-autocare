import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and advice from Elite Autocare — wax vs sealant, does mobile valeting work in winter, how often to valet your car, and more.",
  alternates: { canonical: "/blog" },
  keywords: [
    "car valeting advice",
    "wax vs sealant",
    "does mobile valeting work in winter",
    "car detailing guides Glasgow",
  ],
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="container-elite py-20">
      <span className="eyebrow inline-flex items-center gap-2">
        <Newspaper size={13} className="text-gold-400" /> Blog
      </span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        Advice on keeping your car looking its best
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300">
        Straightforward guides on products, protection and looking after your
        car between valets — no upselling, just what we&apos;d tell a customer who
        asked us in person.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-3 rounded-sm border border-mist-500/15 bg-navy-800/40 p-7 transition-colors hover:border-gold-500/50"
          >
            <span className="text-xs uppercase tracking-widest2 text-mist-500">
              {formatDate(post.date)} &middot; {post.readingTime}
            </span>
            <h2 className="font-display text-xl font-semibold text-mist-100 group-hover:text-gold-300">
              {post.title}
            </h2>
            <p className="text-sm leading-relaxed text-mist-400">{post.excerpt}</p>
            <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gold-400">
              Read more <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
