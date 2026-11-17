function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Yousef Alznefer</h1>
        <h2>QA Tester & Full-Stack Developer</h2>
        <p>
          I test software like a user and build it like a developer.
          Currently ensuring quality at YallaGo, and building web apps
          with React and Node.js.
        </p>
        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <img
        src="/profile.png"
        alt="Yousef Alznefer"
        className="hero-photo"
      />
    </section>
  )
}

export default Hero