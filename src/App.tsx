import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Check,
  ExternalLink,
  MoveUpRight,
  Sparkles,
} from 'lucide-react';

const betaContact = 'frncspls@gmail.com';

const pipeline = [
  {
    marker: '📱',
    step: '01 / CAPTURE',
    title: 'Point & Snap',
    copy: 'Hold your phone camera over any confusing textbook page, assignment grid, or loose scratch notes.',
    accent: 'green',
  },
  {
    marker: '🤖',
    step: '02 / DECODE',
    title: 'AI Fluff Killer',
    copy: 'Our high-speed cloud pipeline immediately reads the page and discards academic filler layout text.',
    accent: 'black',
  },
  {
    marker: '🕹️',
    step: '03 / MASTER',
    title: 'Gamified Speed Run',
    copy: 'The system automatically generates practice question cards that flash green or red instantly.',
    accent: 'yellow',
  },
];

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !event.currentTarget.reportValidity()) return;
    const subject = encodeURIComponent('Magic Banana beta invite request');
    const body = encodeURIComponent(`Please add ${email.trim()} to the Magic Banana beta list.`);
    window.location.href = `mailto:${betaContact}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="landing-shell">
      <div className="grain" />
      <header className="site-header content-width">
        <a href="#top" className="brand" aria-label="Magic Banana home">
          <span className="brand-word">Magic<br />Banana</span>
          <span className="brand-banana" aria-hidden="true">🍌</span>
        </a>
        <a className="launch-button" href="#app-access" aria-label="Check Magic Banana app availability">
          <span>App Access</span><span aria-hidden="true">⚡</span><MoveUpRight size={15} />
        </a>
      </header>

      <section id="top" className="hero content-width">
        <div className="hero-tag"><span className="tag-dot" /> HOMEWORK, MEET YOUR MATCH <span className="tag-line" /></div>
        <h1>Point. Scan.<br /><span>Understand.</span></h1>
        <p className="hero-copy">Magic Banana ruthlessly strips away academic filler sentences and translates confusing textbooks into 30-second toddler analogies and addictive study games. Engineered for when you are running on 3 hours of sleep and need to pass the exam in 10 minutes.</p>
        <form className="beta-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="student-email">Student email</label>
          <input id="student-email" type="email" required value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }} placeholder="Enter your student email..." />
          <button type="submit">{submitted ? 'Request ready in email' : 'Request a beta invite'} <span>⚡</span></button>
        </form>
        <p className={`form-note ${submitted ? 'success-note' : ''}`} aria-live="polite">{submitted ? <><Check size={14} /> Send the prefilled email to request your invite.</> : 'No spam. Just your invite when the next study sprint opens.'}</p>
        <div className="hero-stats" aria-label="Product highlights"><span><Sparkles size={15} /> Built for curious minds</span><i /> <span>30-second explanations</span><i /> <span>Zero judgement</span></div>
      </section>

      <section className="pipeline-section content-width" id="how-it-works">
        <div className="section-intro"><span className="eyebrow">THE MAGIC FORMULA</span><h2>Less memorizing.<br /><span>More getting it.</span></h2><p>Three moves from stuck to “wait, that actually makes sense.”</p></div>
        <div className="pipeline-grid">
          {pipeline.map((item) => <article className={`pipeline-card ${item.accent}`} key={item.title}>
            <div className="card-topline"><span className="card-marker">{item.marker}</span><span>{item.step}</span></div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <span className="card-arrow"><ArrowRight size={18} /></span>
          </article>)}
        </div>
      </section>

      <section className="library-feature">
        <div className="content-width library-layout">
          <div className="library-copy"><span className="eyebrow">THE GLOBAL DIGITAL SHELF</span><h2>Search every textbook<br /><span>in the world.</span></h2><p>Rather study a book? Switch to the global digital shelf. Search comprehensive curricula from Canada to India. Tap any textbook to watch our Gemini cloud engine instantly crunch an entire semester&apos;s textbook syllabus down into a 10-minute diagnostic review.</p><a href="#library" className="text-link">Explore the shelf <ArrowRight size={17} /></a></div>
          <div id="library" className="library-visual" aria-label="3D textbook preview">
            <div className="visual-glow" />
            <div className="book-stage"><div className="book-shadow" /><div className="book-cover-3d"><div className="book-spine" /><div className="cover-kicker">MAGIC BANANA / 2026</div><strong>THE<br /><em>SHORTCUT</em><br />TO SMARTER</strong><div className="cover-scribble">understand<br />everything.</div><div className="cover-stamp">10<br />MIN</div></div></div>
            <div className="visual-label"><span><BookOpen size={14} /> GLOBAL LIBRARY</span><span>Tap to inspect <ArrowRight size={14} /></span></div>
          </div>
        </div>
      </section>

      <section className="beta-cta content-width" id="beta"><div className="cta-card"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Make the next<br /><span>“aha” easier.</span></h2></div><a className="dark-cta" href="#app-access">Check app availability <ExternalLink size={16} /></a></div></section>

      <footer className="site-footer content-width">
        <div className="footer-main"><a href="#top" className="brand footer-brand"><span className="brand-word">Magic<br />Banana</span><span className="brand-banana" aria-hidden="true">🍌</span></a><p>Engineered by national Canada-Wide Science Fair (CWSF) alumni.<br />Zero hardcoding. 100% cloud-powered utility.</p><a className="footer-launch" href="#app-access">Check app availability <ArrowRight size={15} /></a></div>
        <div className="footer-divider" />
        <div className="footer-setup" id="app-access"><div><span className="eyebrow">APP ACCESS</span><h3>The study app is temporarily unavailable.</h3></div><div><p>The previous Expo Go link has expired. Request a beta invite and we’ll send updated access details when the app is back online.</p><a className="footer-launch" href="#student-email">Request a beta invite <ArrowRight size={15} /></a></div></div>
        <div className="footer-bottom"><span>© 2026 Magic Banana</span><span>Made for the sleep-deprived.</span><a href="#app-access">App availability <ArrowRight size={13} /></a></div>
      </footer>
    </main>
  );
}

export default App;
