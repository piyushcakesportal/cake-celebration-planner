import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celebration Notes | Practical Cake Planning",
  description:
    "Practical guidance for choosing a cake size, planning delivery, and preparing a clear photo for personalised cakes.",
};

export default function Page() {
  return (
    <>
      <style>{`
        :root{color-scheme:light}body{margin:0!important;background:#fffaf4!important;color:#2f2630!important;font-family:Arial,sans-serif!important;line-height:1.65}
        *{box-sizing:border-box}.cn-shell{min-height:100vh;background:radial-gradient(circle at 8% 7%,#f8e6eabb,transparent 27rem),radial-gradient(circle at 92% 15%,#f4e2c388,transparent 25rem)}
        .cn-nav{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:15px max(22px,calc((100vw - 1100px)/2));border-bottom:1px solid #eaded7;background:#fffaf4ee;backdrop-filter:blur(12px)}
        .cn-brand{display:flex;align-items:center;gap:10px;color:#2f2630;font:700 19px Georgia,serif}.cn-mark{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:#9f3f61;color:white}
        .cn-nav a{color:#6f626d;text-decoration:none}.cn-navlinks{display:flex;gap:18px;font-size:14px}
        .cn-hero,.cn-section{max-width:1100px;margin:auto;padding:72px 22px}.cn-hero{display:grid;grid-template-columns:1.2fr .8fr;gap:55px;align-items:center;padding-top:95px}
        .cn-eyebrow{color:#792a49;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.cn-title{margin:8px 0 20px;font:700 clamp(43px,6vw,78px)/1.04 Georgia,serif;letter-spacing:-.045em}.cn-lead{max-width:690px;color:#6f626d;font-size:18px}
        .cn-art{padding:34px;border:1px solid #fff;border-radius:32px;background:linear-gradient(145deg,#ffffffee,#f8e6eadb);box-shadow:0 18px 50px #4627351a;transform:rotate(2deg)}.cn-art svg{display:block;width:100%}
        .cn-section h2{margin:0 0 14px;font:700 clamp(30px,4vw,44px)/1.1 Georgia,serif}.cn-sectionhead{max-width:730px;margin-bottom:28px;color:#6f626d}.cn-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.cn-card{padding:24px;border:1px solid #eaded7;border-radius:20px;background:#ffffffd9;box-shadow:0 10px 35px #4627350d}.cn-card h3{margin:0 0 9px;font:700 22px Georgia,serif}.cn-num{display:grid;place-items:center;width:38px;height:38px;margin-bottom:16px;border-radius:50%;background:#f8e6ea;color:#792a49;font-weight:800}
        .cn-table{overflow:auto;border:1px solid #eaded7;border-radius:16px;background:white}.cn-table table{width:100%;min-width:620px;border-collapse:collapse}.cn-table th,.cn-table td{padding:14px 16px;border-bottom:1px solid #eaded7;text-align:left}.cn-table th{background:#fbf1ed;font-size:12px;text-transform:uppercase}.cn-table tr:last-child td{border:0}
        .cn-note{margin-top:24px;padding:20px;border-left:4px solid #c99143;border-radius:8px 16px 16px 8px;background:#fff4df}.cn-check{padding-left:0;list-style:none}.cn-check li{position:relative;margin:10px 0;padding-left:28px}.cn-check li:before{content:"✓";position:absolute;left:0;color:#597363;font-weight:900}
        .cn-cta{display:grid;grid-template-columns:1fr auto;align-items:center;gap:24px;padding:32px;border-radius:24px;background:#2f2630;color:white}.cn-cta h2{color:white}.cn-cta p{margin:0;color:#ddd1d9}.cn-button{display:inline-block;padding:13px 19px;border-radius:999px;background:#f1c6d2;color:#2f2630!important;font-weight:800;text-decoration:none}
        .cn-footer{padding:35px 22px;border-top:1px solid #eaded7;color:#6f626d;text-align:center;font-size:14px}
        @media(max-width:820px){.cn-hero{grid-template-columns:1fr;padding-top:60px}.cn-art{max-width:360px}.cn-grid{grid-template-columns:1fr}.cn-cta{grid-template-columns:1fr}}
        @media(max-width:600px){.cn-nav{align-items:flex-start}.cn-navlinks{flex-wrap:wrap;justify-content:flex-end;font-size:12px}.cn-hero,.cn-section{padding:52px 18px}.cn-title{font-size:44px}}
      `}</style>
      <div className="cn-shell">
        <header className="cn-nav">
          <div className="cn-brand"><span className="cn-mark">✦</span>Celebration Notes</div>
          <nav className="cn-navlinks" aria-label="Page sections">
            <a href="#size">Cake size</a><a href="#delivery">Delivery</a><a href="#photos">Photo cakes</a><a href="/blog">Blog</a>
          </nav>
        </header>
        <main>
          <section className="cn-hero">
            <div><p className="cn-eyebrow">Plan the moment, not the stress</p><h1 className="cn-title">Simple ideas for celebrations that feel personal.</h1><p className="cn-lead">Good celebrations rarely need more stuff. They need the right cake size, sensible timing, and a few thoughtful details. This guide helps you make those choices without turning a happy occasion into a project.</p></div>
            <div className="cn-art" aria-hidden="true"><svg viewBox="0 0 360 300"><ellipse cx="180" cy="259" fill="#eaded7" rx="138" ry="24"/><rect fill="#f6cad4" height="78" rx="18" width="224" x="68" y="173"/><path d="M68 196c25 18 46-13 69 3 23 17 40-12 66 1 25 13 45-14 89 2v-30H68z" fill="#fff9f5"/><rect fill="#f1b7c5" height="77" rx="17" width="160" x="100" y="105"/><path d="M100 127c18 14 34-9 51 2 18 12 32-10 52 1 18 10 33-9 57 1v-27H100z" fill="#fff9f5"/><rect fill="#c99143" height="49" rx="7" width="14" x="173" y="55"/><path d="M180 53c-15-18 1-31 1-31s14 16-1 31z" fill="#9f3f61"/><circle cx="123" cy="150" fill="#9f3f61" r="7"/><circle cx="180" cy="150" fill="#c99143" r="7"/><circle cx="237" cy="150" fill="#9f3f61" r="7"/></svg></div>
          </section>
          <section className="cn-section" id="size">
            <p className="cn-eyebrow">Start with portions</p><h2>Choose a cake size by guest count, not guesswork.</h2><p className="cn-sectionhead">Cake weight is only a starting point. Height, shape, cutting style, and whether other desserts are served all change the number of useful portions.</p>
            <div className="cn-table"><table><thead><tr><th>Approx. weight</th><th>Small portions</th><th>Generous portions</th><th>Useful for</th></tr></thead><tbody><tr><td>0.5 kg</td><td>5–6</td><td>3–4</td><td>Couple or small family</td></tr><tr><td>1 kg</td><td>10–12</td><td>7–9</td><td>Small birthday gathering</td></tr><tr><td>1.5 kg</td><td>15–18</td><td>11–14</td><td>Home party</td></tr><tr><td>2 kg</td><td>20–24</td><td>15–18</td><td>Larger family celebration</td></tr></tbody></table></div>
            <div className="cn-note"><strong>Best question to ask:</strong> “How many dessert-size slices will this exact design provide?” That is more useful than asking only for the cake’s weight.</div>
          </section>
          <section className="cn-section" id="delivery">
            <p className="cn-eyebrow">Plan backwards</p><h2>Start with the cake-cutting time.</h2><div className="cn-grid"><article className="cn-card"><div className="cn-num">1</div><h3>Add a sensible buffer</h3><p>Allow time for local traffic, entry gates, receiving the box, and checking the message. Avoid making the slot so early that a cream cake sits outside refrigeration.</p></article><article className="cn-card"><div className="cn-num">2</div><h3>Share a useful address</h3><p>Include the complete address, a map pin, the correct gate or tower, and the number of the person who will actually receive the order.</p></article><article className="cn-card"><div className="cn-num">3</div><h3>Prepare safe storage</h3><p>Clear a flat refrigerator shelf before arrival. Carry the box from its base and follow the storage instructions supplied with the cake.</p></article></div>
          </section>
          <section className="cn-section" id="photos">
            <p className="cn-eyebrow">Personalisation guide</p><h2>A better source photo makes a better photo cake.</h2><div className="cn-grid"><article className="cn-card"><h3>Use the original</h3><p>Avoid screenshots and repeatedly forwarded images. Compression removes detail that printing cannot restore.</p></article><article className="cn-card"><h3>Leave breathing room</h3><p>Keep space around faces and shoulders so the image can be cropped into a circle, heart, or rectangle without cutting off the subject.</p></article><article className="cn-card"><h3>Send text separately</h3><p>Share the cake message as typed text, then confirm the spelling, age, date, and which part of the image must remain visible.</p></article></div>
          </section>
          <section className="cn-section"><div className="cn-cta"><div><h2>Ready to browse celebration cakes?</h2><p>Compare flavours, designs, and delivery choices after the practical details are clear.</p></div><a className="cn-button" href="https://cakesportal.in/">Visit Cakesportal</a></div></section>
        </main>
        <footer className="cn-footer">© 2026 Celebration Notes · Practical guidance for happier occasions.</footer>
      </div>
    </>
  );
}
