import logo from "@/public/ensteins_logo.png"
import Image from "next/image"
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="ensteins logo" className="object-contain"/>
    </Link>
  );
}
