export default function Home() {
  return (
    <main className="container-cyber">
      {/* Cyberpunk Grid Background */}
      <div className="grid-bg"></div>
      
      {/* Scanline Effect */}
      <div className="scanline"></div>
      
      {/* Radial Glow */}
      <div className="radial-glow"></div>
      
      {/* Background Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="loader-container">
          <div className="loader-outer"></div>
          <div className="loader-inner"></div>
          <div className="loader-core"></div>
        </div>

        <h1 className="glitch" data-text="SISTEMA INICIANDO...">
          SISTEMA INICIANDO...
        </h1>

        <p className="subtitle">
          <span className="bracket">[</span>
          <span className="status">DICESTREAM3D</span>
          <span className="bracket">]</span>
        </p>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p className="status-text">
          Carregando motores de física 3D
          <span className="dots">
            <span>.</span><span>.</span><span>.</span>
          </span>
        </p>
      </div>
    </main>
  );
}
