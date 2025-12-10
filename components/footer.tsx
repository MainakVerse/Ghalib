import Link from "next/link"
import { Feather, Twitter, Instagram, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0B0E15] border-t border-[#A88C63]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Feather className="h-6 w-6 text-[#A88C63]" />
              <span className="text-xl font-semibold text-[#A88C63]">GHALIB</span>
            </Link>
            <p className="text-[#E4D9C8]/70 text-sm max-w-sm">
              Where words become heartbeats. Create, share, and explore beautiful poetry with AI-assisted Shayari
              generation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#A88C63] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#E4D9C8]/70 hover:text-[#A88C63] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/generate" className="text-[#E4D9C8]/70 hover:text-[#A88C63] transition-colors text-sm">
                  Generate
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-[#E4D9C8]/70 hover:text-[#A88C63] transition-colors text-sm">
                  All Posts
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#A88C63] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-[#E4D9C8]/70 hover:text-[#A88C63] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#E4D9C8]/70 hover:text-[#A88C63] transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#A88C63]/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#E4D9C8]/50 text-sm">© {new Date().getFullYear()} GHALIB. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#E4D9C8]/50 hover:text-[#A88C63] transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#E4D9C8]/50 hover:text-[#A88C63] transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#E4D9C8]/50 hover:text-[#A88C63] transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
