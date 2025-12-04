export default function Button({ children }) {
  return (
    <button className="bg-SpecialBlue hover:bg-SpecialBlueHovered px-4 rounded-xl font-bold transition-colors duration-300">{children}</button>
  );
}
