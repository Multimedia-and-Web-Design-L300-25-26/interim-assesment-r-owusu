// SVG sparkline / price chart used in AssetDetail
export default function PriceChart({ positive }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`grad-${positive}`} x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor={positive ? "#22c55e" : "#ef4444"}
            stopOpacity="0.3"
          />
          <stop
            offset="100%"
            stopColor={positive ? "#22c55e" : "#ef4444"}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      {positive ? (
        <>
          <path
            d="M0,50 C30,45 60,55 90,38 C120,20 150,30 200,5"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <path
            d="M0,50 C30,45 60,55 90,38 C120,20 150,30 200,5 L200,60 L0,60 Z"
            fill={`url(#grad-${positive})`}
          />
        </>
      ) : (
        <>
          <path
            d="M0,10 C30,15 60,8 90,25 C120,42 150,35 200,50"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
          />
          <path
            d="M0,10 C30,15 60,8 90,25 C120,42 150,35 200,50 L200,60 L0,60 Z"
            fill={`url(#grad-${positive})`}
          />
        </>
      )}
    </svg>
  );
}
