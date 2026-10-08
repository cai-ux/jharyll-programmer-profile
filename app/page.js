export default function Home() {
  return (
    <main>
      <section id="home" className="hero section">
        <div className="flower flower-one" aria-hidden="true"><span /></div>
        <div className="hero-content">
          <p className="eyebrow">PROGRAMMER PROFILE</p>
          <h1>Hi, I&apos;m <span>Jharyll</span> 🌸</h1>
          <p className="intro">Hi! I’m a college student and an aspiring programmer who is passionate about learning technology and improving my skills in programming. I enjoy exploring new ideas, creating simple projects, and learning how technology can solve everyday problems. I’m still growing as a programmer, but I’m always willing to learn, practice, and improve.</p>
          <a className="button" href="#about">Get to know me</a>
        </div>
        <div className="flower flower-two" aria-hidden="true"><span /></div>
      </section>

      <section id="about" className="section">
        <p className="eyebrow">ABOUT ME</p>
        <h2>Who I am</h2>
        <div className="cards three">
          <article><h3>Background</h3><p>I am a college student who is interested in technology and programming. I am building my knowledge through school activities, practice, and projects.</p></article>
          <article><h3>Interest</h3><p>I enjoy learning new things, exploring different programming skills, and working on projects that help me improve.</p></article>
          <article><h3>Learning Goal</h3><p>I may still be learning, but I am hardworking, willing to learn, and always trying to become better at what I do.</p></article>
        </div>
      </section>

      <section id="education" className="section soft">
        <p className="eyebrow">EDUCATION</p>
        <h2>My College Journey</h2>
        <article className="education-card">
          <div className="badge">NDM</div>
          <div>
            <h3>Nueva Vizcaya State University</h3>
            <p className="degree">Bachelor of Science in Information Technology</p>
            <p><strong>Major:</strong> Network and Data Management (NDM)</p>
            <p><strong>Section:</strong> 3A</p>
            <p>I am currently a third-year college student learning about programming, networking, database management, and other areas of Information Technology.</p>
          </div>
        </article>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">PROJECTS</p>
        <h2>What I&apos;m working on</h2>
        <article className="project-card">
          <div className="project-top"><span className="status">IN PROGRESS</span><span className="project-number">01</span></div>
          <h3>Computer Registration System</h3>
          <p>A simple computer registration system designed for a computer laboratory. It allows students to register using their Student ID and record their computer usage, including time-in and time-out. The system helps keep track of which students are using each computer and makes laboratory monitoring more organized.</p>
          <div className="tags"><span>Frontend</span><span>Registration</span><span>Computer Lab</span></div>
        </article>
      </section>

      <section id="contact" className="section contact">
        <div className="flower flower-three" aria-hidden="true"><span /></div>
        <p className="eyebrow">CONTACT</p>
        <h2>Let&apos;s connect</h2>
        <p>If you want to reach me, you can contact me through my email or phone number.</p>
        <div className="contact-grid">
          <a href="mailto:fuertesjharyll15@gmail.com"><small>EMAIL</small><strong>fuertesjharyll15@gmail.com</strong></a>
          <a href="tel:09072991650"><small>PHONE</small><strong>09072991650</strong></a>
        </div>
      </section>
      <footer>© 2026 Jharyll Fuertes · Built with Next.js & CSS 🌷</footer>
    </main>
  );
}
