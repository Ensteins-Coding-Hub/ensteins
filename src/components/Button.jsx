export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 cursor-pointer sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 bg-blue-600 hover:bg-SpecialBlueHovered text-white rounded-full transition-colors duration-300 uppercase ${className}`}
      style={{
        fontFamily: 'Gudea, sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(16px, 3vw, 20px)',
        lineHeight: '100%',
        letterSpacing: '0%'
      }}
    >
      {children}
      <link
        href="https://fonts.googleapis.com/css2?family=Gudea:wght@700&display=swap"
        rel="stylesheet"
      />
    </button>
  );
}

