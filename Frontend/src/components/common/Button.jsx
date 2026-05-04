// Reusable Button component with variant and size support
export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  className = "",
  ...props
}) {
  const base = "font-semibold rounded-full transition-colors";

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary: "bg-[#1652F0] text-white hover:bg-blue-700",
    secondary: "bg-gray-900 text-white hover:bg-gray-700",
    dark: "bg-[#1a2a5e] text-white hover:bg-[#1e3270]",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
