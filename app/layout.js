import "./globals.css";

export const metadata = {
  title: "Jharyll Fuertes | Programmer Profile",
  description: "Jharyll Fuertes' frontend programmer profile built with Next.js and CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <a className="logo" href="#home">Jharyll<span>.</span></a>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
