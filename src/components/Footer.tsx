'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-10 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Developer Credit */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Built with ❤️ by <span className="text-white font-semibold">Abhinav</span>
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition text-lg"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-400 hover:text-white transition text-lg"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
