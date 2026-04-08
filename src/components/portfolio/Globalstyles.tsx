const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes ticker {
      from { transform: translateX(0); }
      to { transform: translateX(-33.33%); }
    }
    @keyframes breathe {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0.5; }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-16px) rotate(1deg); }
    }
    @keyframes scrollBob {
      0%, 100% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(8px); opacity: 0.4; }
    }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #FFF8F0; }
    ::-webkit-scrollbar-thumb { background: #1a1a1a; }
    ::-webkit-scrollbar-thumb:hover { background: #D4522A; }
    ::selection { background: #D4522A; color: #FFF8F0; }
  `}</style>
);

export default GlobalStyles;