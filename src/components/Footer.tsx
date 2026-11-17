
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0D1320] px-5 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

        <p className="text-center text-sm text-gray-400">
          © 2026 Toufiqur Rahaman. All Rights Reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/toufiq-tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl text-gray-400 transition hover:text-[#52E6AC]"
          >
            <SiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/toufiqur-rahaman"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl text-gray-400 transition hover:text-[#0A66C2]"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/8801846043286"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-xl text-gray-400 transition hover:text-[#25D366]"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </footer>
  );
}
