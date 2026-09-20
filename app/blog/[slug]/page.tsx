import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../blog.module.css";
import { getPost, posts } from "../posts";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Celebration Notes`,
    description: post.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Celebration Notes",
    },
  };

  return (
    <div className={styles.shell}>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <header className={styles.nav}>
        <Link className={styles.brand} href="/">
          <span className={styles.mark}>✦</span>
          Celebration Notes
        </Link>
        <nav className={styles.navLinks} aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link aria-current="page" href="/blog">
            Blog
          </Link>
        </nav>
      </header>

      <main className={styles.article}>
        <Link className={styles.backLink} href="/blog">
          ← All articles
        </Link>

        <article>
          <header className={styles.articleHeader}>
            <p className={styles.eyebrow}>{post.category}</p>
            <h1>{post.title}</h1>
            <div className={styles.meta}>
              <time dateTime={post.publishedAt}>{post.displayDate}</time>
              <span>{post.readTime}</span>
            </div>
            <p className={styles.articleIntro}>{post.introduction}</p>
          </header>

          <div className={styles.articleBody}>
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <aside className={styles.takeaway}>
              <strong>Keep it simple</strong>
              {post.takeaway}
            </aside>
          </div>
        </article>
      </main>

      <footer className={styles.footer}>
        © 2026 Celebration Notes · Practical guidance for happier occasions.
      </footer>
    </div>
  );
}
