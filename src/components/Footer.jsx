import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import SocialIcon from './SocialIcon'
export default function Footer() {
  return (
    <footer className="w-full bg-[#050322] text-white py-16 relative overflow-hidden">

      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-br from-blue-600/30 to-transparent"></div>

      <div className="relative flex flex-col items-center z-10">

        <div className="flex gap-6 mb-12">
          <SocialIcon href="https://www.facebook.com/share/1C5FUTsm9Z/">
            <FaFacebookF />
          </SocialIcon>

          <SocialIcon href="https://www.instagram.com/ensteins_club?">
            <FaInstagram />
          </SocialIcon>

          <SocialIcon href="https://www.tiktok.com/@club_ensteins?">
            <FaTiktok />
          </SocialIcon>

          <SocialIcon href="https://www.linkedin.com/company/ensteins-club/">
            <FaLinkedinIn />
          </SocialIcon>
        </div>

        <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-blue-600/40 to-transparent mb-10"></div>

        <div className="text-center leading-relaxed max-w-xl opacity-90 text-[15px]">
          <p className="font-light">ENSTEINS — Where Passion Meets Innovation.</p>
          <p className="font-semibold mt-2">
            ENSTA ❤️ National Higher School of Advanced Technologies
          </p>
          <p className="opacity-70">Ex-biomedical, Dergana, Bordj El Kiffane</p>

          <p className="mt-3 opacity-80 hover:opacity-100 transition text-blue-400 cursor-pointer">
            ensteins@ensta.edu.dz
          </p>
        </div>

        <p className="mt-12 opacity-60 text-sm tracking-wide">
          © {new Date().getFullYear()} ENSTEINS — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

