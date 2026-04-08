const TICKER_ITEMS = [
  "DEVELOPER", "UI/UX DESIGNER", "RESPONSIVE WEB DESIGN", "2 YEARS XP", "CRAFTING DIGITAL PRODUCTS"  
];

export default function Ticker() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{
      overflow: "hidden",
      borderTop: "2px solid #1a1a1a",
      borderBottom: "2px solid #1a1a1a",
      padding: "0.7rem 0",
      background: "#D4522A",
      position: "relative",
    }}>
      <div style={{
        display: "flex", gap: "3rem",
        animation: "ticker 18s linear infinite",
        whiteSpace: "nowrap",
      }}>
        {repeated.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.72rem", fontWeight: 600,
            letterSpacing: "0.18em", color: "#FFF8F0",
            display: "inline-flex", alignItems: "center", gap: "1.5rem",
          }}>
            {item} <span style={{ opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}