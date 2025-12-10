"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useFadeInView } from "@/hooks/use-fade-in-view"

const faqs = [
  {
    question: "How does AI help with poetry creation?",
    answer:
      "Our AI analyzes your prompts and emotional context to generate authentic Shayari, Ghazals, and other poetry forms. It understands classical poetic structures while maintaining the emotional depth and authenticity of traditional poetry.",
  },
  {
    question: "Is GHALIB free to use?",
    answer:
      "Yes! GHALIB offers a generous free tier that includes basic poetry generation, script conversion, and sharing features. Premium features like advanced AI enhancements and unlimited cloud storage are available through our subscription plans.",
  },
  {
    question: "Can I share my poetry on social media?",
    answer:
      "You can download your beautifully designed poetry cards or share them directly to social media platforms. Your creations are yours to share with the world.",
  },
  {
    question: "What languages does GHALIB support?",
    answer:
      "GHALIB supports multiple languages including Urdu, Hindi, English, and Persian. Our script conversion feature allows seamless translation between Roman and native scripts.",
  },
  {
    question: "Is my poetry private and secure?",
    answer:
      "Your poetry is stored securely in the cloud. You have full control over what you share publicly and what remains private. We never sell or share your personal content.",
  },
  {
    question: "Can I customize the design of my poetry cards?",
    answer:
      "Yes! GHALIB offers extensive customization options including fonts, colors, backgrounds, borders, and layouts. Create poetry cards that match your personal style or the mood of your verses.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click 'Get Started' to begin your poetry journey. No account required to try our basic features. Sign up to save your creations and unlock more capabilities.",
  },
  {
    question: "Can I edit AI-generated poetry?",
    answer:
      "Of course! AI-generated poetry serves as a starting point. You can edit, refine, and personalize every line to make it truly yours. The AI is here to inspire, not replace your creativity.",
  },
]

export function FAQSection() {
  const { ref: sectionRef, isVisible } = useFadeInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`bg-[#0B0E15] py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#A88C63] text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-[#E4D9C8]/70 text-center mb-12">Everything you need to know about GHALIB</p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#12161f] border border-[#A88C63]/20 rounded-lg px-6 data-[state=open]:border-[#A88C63]/50"
            >
              <AccordionTrigger className="text-[#E4D9C8] hover:text-[#A88C63] text-left py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#E4D9C8]/70 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
