import Logo from "@/src/components/Logo"
import Button from "@/src/components/Button"

export default function NavigationBar() {
  return (
    <nav className="flex justify-around w-full py-5 text-white">
      <div className="w-[40px]">
        <Logo />
      </div>
      <ul className="flex gap-6 items-center">
        <li>HOME</li>
        <li>EVENTS</li>
        <li>GALLERY</li>
        <li>PROJECTS</li>
      </ul>
      <Button>CONTACT</Button>
    </nav>
  );
}
