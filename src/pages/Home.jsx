function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Vishal Services</h1>
        <p className="hero-description">
          We are based in Gondia City and provide excellent plumbing and electrician services with quality and reliability.
        </p>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🔧</div>
          <h3>Professional Plumbing</h3>
          <p>Expert plumbing solutions for all your needs</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Reliable Electrician</h3>
          <p>Safe and efficient electrical services</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">✓</div>
          <h3>Quality Assured</h3>
          <p>Trusted service with guaranteed satisfaction</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
