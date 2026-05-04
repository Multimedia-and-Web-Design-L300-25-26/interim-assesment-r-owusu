// Reusable Card wrapper with border and shadow
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-gray-100 rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}
