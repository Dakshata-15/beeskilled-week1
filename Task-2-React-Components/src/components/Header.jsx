
function Header() {
  return (
    <header className="header">
      <a href="#home" className="brand">
        <span className="brand-icon">R</span>
        <span>react<span className="brand-light">lab.</span></span>
      </a>

      <nav>
        <a href="#home">Home</a>
        <a href="#components">Components</a>
        <a href="#demo">Playground</a>
      </nav>

      <a href="#contact" className="header-cta">
        Get Started ↗
      </a>
    </header>
  );
}

export default Header;
