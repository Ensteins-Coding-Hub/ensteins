import logo from "@/public/ensteins_logo.png"
import Image from "next/image"

export default function Logo() {
  return (
      <Image src={logo} alt="ensteins logo" className="object-contain"/>
  );
}
