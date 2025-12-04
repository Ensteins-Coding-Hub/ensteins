export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0734] text-white py-16 flex flex-col items-center">

      <div className="flex gap-10 mb-10">
        {/* Facebook */}
        <a href="https://www.facebook.com/share/1C5FUTsm9Z/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition">
          <img src="/facebook.svg" alt="Facebook" className="w-5" />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/ensteins_club?" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition">
          <img src="/instagram.svg" alt="Instagram" className="w-5" />
        </a>

        {/* YouTube */}
        {/* <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition">
                    <img src="/youtube.svg" alt="YouTube" className="w-5" />
                </a>*/}

        {/* TikTok */}
        <a href="https://www.tiktok.com/@club_ensteins?" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition">
          <img src="/tiktok.png" alt="TikTok" className="w-5" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/company/ensteins-club/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-5" />
        </a>
      </div>

      {/* Text Info */}
      <div className="text-center leading-8 opacity-90">
        <p>ENSTA—National Higher School of Advanced Technologies</p>
        <p>Ex-biomedical, Bergana, Bordj El Kiffan</p>
        <p className="mt-3">+213 0611223366</p>
        <p>ENSTA@gmail.com</p>
      </div>

      {/* Copyright */}
      <p className="mt-12 opacity-80">
        Copyright ©2025 by ENSTEINS
      </p>
    </footer>
  );
}
