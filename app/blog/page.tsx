import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Celebration Planning Blog | Celebration Notes",
  description:
    "Practical articles about cake portions, delivery planning, and preparing photos for personalised celebration cakes.",
};

export default function BlogPage() {
  return (
    <div className={styles.shell}>
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

      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>The celebration planning blog</p>
          <h1>Useful details before the candles are lit.</h1>
          <p className={styles.lead}>
            Straightforward notes on portions, delivery, personalisation, and the
            small decisions that make celebrations easier to enjoy.
          </p>
        </section>

        <section className={styles.content} aria-label="Latest articles">
          <div className={styles.grid}>
            {posts.map((post) => (
              <article className={styles.card} key={post.slug}>
                <span className={styles.category}>{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <div className={styles.meta}>
                  <time dateTime={post.publishedAt}>{post.displayDate}</time>
                  <span>{post.readTime}</span>
                </div>
                <Link className={styles.readLink} href={`/blog/${post.slug}`}>
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2026 Celebration Notes · Practical guidance for happier occasions.
      </footer>
    </div>
  );
}
