import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - GHALIB",
  description: "Privacy Policy for GHALIB - Your poetry creation platform",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0E15]">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#A88C63] mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-[#12161f] rounded-lg p-6 border border-[#A88C63]/20">
              <h2 className="text-xl font-semibold text-[#A88C63] mb-4">Data Collection</h2>
              <p className="text-[#E4D9C8]/80 leading-relaxed">
                GHALIB collects minimal personal information necessary to provide our poetry creation services. This
                includes email addresses for account creation, user preferences, and poetry content you create.
              </p>
            </div>

            <div className="bg-[#12161f] rounded-lg p-6 border border-[#A88C63]/20">
              <h2 className="text-xl font-semibold text-[#A88C63] mb-4">Data Usage</h2>
              <p className="text-[#E4D9C8]/80 leading-relaxed">
                Your data is used solely to improve your experience on GHALIB. We use your poetry preferences to
                personalize AI suggestions and improve our generation algorithms.
              </p>
            </div>

            <div className="bg-[#12161f] rounded-lg p-6 border border-[#A88C63]/20">
              <h2 className="text-xl font-semibold text-[#A88C63] mb-4">Temporary Data Retention</h2>
              <p className="text-[#E4D9C8]/80 leading-relaxed">
                Chat conversations and generated content may be temporarily stored to provide service continuity.
                Inactive session data is automatically deleted after 30 days of inactivity.
              </p>
            </div>

            <div className="bg-[#12161f] rounded-lg p-6 border border-[#A88C63]/20">
              <h2 className="text-xl font-semibold text-[#A88C63] mb-4">No Sale of Personal Content</h2>
              <p className="text-[#E4D9C8]/80 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information or creative content to third
                parties. Your poetry remains yours.
              </p>
            </div>

            <div className="bg-[#12161f] rounded-lg p-6 border border-[#A88C63]/20">
              <h2 className="text-xl font-semibold text-[#A88C63] mb-4">Cookies & Analytics</h2>
              <p className="text-[#E4D9C8]/80 leading-relaxed">
                We use essential cookies to maintain your session and anonymous analytics to understand how users
                interact with our platform. You can disable cookies in your browser settings.
              </p>
            </div>

            <div className="bg-[#12161f] rounded-lg p-6 border border-[#A88C63]/20">
              <h2 className="text-xl font-semibold text-[#A88C63] mb-4">Contact Us</h2>
              <p className="text-[#E4D9C8]/80 leading-relaxed">
                If you have any questions about our privacy practices, please contact us at privacy@ghalib.app.
              </p>
            </div>
          </div>

          <p className="text-[#E4D9C8]/50 text-sm mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
