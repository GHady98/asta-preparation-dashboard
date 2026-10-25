import TrainingPlan from './training-plan';
export default function Home() {
  return <><a className="skip-link" href="#main">Skip to training dashboard</a>
    <header className="site-header"><div className="brand"><span className="brand-mark" aria-hidden="true">✦</span><span>BLACK BULLS <small>PREPARATION HQ</small></span></div><span className="header-note">ASTA / TRAINING JOURNAL</span></header>
    <main id="main" className="page-shell">
      <section className="hero" aria-labelledby="page-title"><div className="hero-copy"><p className="eyebrow"><span className="red-dash" /> THE ROAD TO READINESS</p><h1 id="page-title">Asta’s Preparation<br /><span>Dashboard</span></h1><p>Your strength is in the work.<br className="desktop-break" /> Follow the plan. Track your progress. Be ready.</p></div><div className="hero-emblem" aria-hidden="true"><span>✦</span><small>NEVER GIVE UP</small></div></section>
      <section className="threat-brief" aria-labelledby="threat-title"><span className="threat-symbol" aria-hidden="true">!</span><div><p className="eyebrow">KNOW THE CHALLENGE</p><h2 id="threat-title">Lucifero is approaching.</h2><p>A powerful devil wielding gravity magic. Stay focused on the preparation you can control.</p></div><span className="brief-tag">THREAT BRIEF</span></section>
      <TrainingPlan />
      <footer><span>DETERMINATION INTO ACTION.</span><p>A fictional training plan inspired by Black Clover. Built for learning.</p><span>TECHTALKS / 02</span></footer>
    </main></>;
}
