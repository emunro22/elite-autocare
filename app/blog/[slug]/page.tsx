import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

const SITE_URL = "https://eliteauto-care.co.uk";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const morePosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Elite Autocare" },
    publisher: { "@type": "Organization", name: "Elite Autocare" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="container-elite py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-mist-400 hover:text-gold-400">
        <ArrowLeft size={14} /> Back to blog
      </Link>

      <span className="eyebrow mt-8 inline-block">
        {formatDate(post.date)} &middot; {post.readingTime}
      </span>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        {post.title}
      </h1>

      <div className="mt-10 max-w-2xl">
        {post.sections.map((section, i) => (
          <div key={section.heading ?? i} className={i > 0 ? "mt-8" : undefined}>
            {section.heading && (
              <h2 className="font-display text-xl font-semibold text-gold-300">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                className={`text-base leading-relaxed text-mist-300 ${
                  section.heading || j > 0 ? "mt-4" : ""
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap gap-4">
        <Link
          href="/booking"
          className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-7 py-3 text-sm font-semibold tracking-wide text-navy-950"
        >
          Book Now <ArrowRight size={15} />
        </Link>
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 rounded-sm border border-mist-500/30 px-7 py-3 text-sm font-medium tracking-wide text-mist-100 hover:border-gold-500/60 hover:text-gold-300"
        >
          Read our FAQs
        </Link>
      </div>

      {morePosts.length > 0 && (
        <div className="mt-24">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest2 text-gold-400">
            More from the blog
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {morePosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col gap-2 rounded-sm border border-mist-500/15 bg-navy-800/40 p-6 transition-colors hover:border-gold-500/50"
              >
                <h3 className="font-display text-base font-semibold text-mist-100 group-hover:text-gold-300">
                  {p.title}
                </h3>
                <p className="text-sm text-mist-500">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
