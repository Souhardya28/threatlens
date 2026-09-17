import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow">
            <span className="dot" /> 404
          </span>
          <h1>This page isn&apos;t on our radar.</h1>
          <p className="hero-sub" style={{ margin: '22px auto 0' }}>
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to safety.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link className="btn btn-primary" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
