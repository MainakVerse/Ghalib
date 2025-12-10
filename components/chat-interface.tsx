"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  role: "user" | "assistant"
  content: string
}

interface ChatInterfaceProps {
  onShayariGenerated: (shayari: string) => void
  setIsGenerating: (loading: boolean) => void
}

const sampleResponses = [
  "Dil ki baat zuban pe aa gayi\nJaise chandni raat mein ghulaab khil gaye\nTeri yaad mein har pal guzarta hai\nJaise samandar mein moti chhup gaye",
  "Mohabbat ka safar hai ye\nJisme har mod pe tu mili\nTeri aankhon mein kho gaya main\nJaise taare aasman mein khil gaye",
  "Zindagi teri rahon mein\nHar kadam pe gul khile\nTere bin ye dil mera\nJaise baarish bin badal mile",
  "Ishq mein hai faqat ek hi gham\nKi tu paas nahin aur yaad bahut\nDil mein teri tasveer hai\nAur aankhon mein neend bahut",
]

export function ChatInterface({ onShayariGenerated, setIsGenerating }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Adaab! I am GHALIB, your poetry companion. Tell me your emotions, a theme, or simply share what's on your heart, and I'll weave words into beautiful Shayari for you.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setIsGenerating(true)

    // Simulate AI response
    setTimeout(() => {
      const randomShayari = sampleResponses[Math.floor(Math.random() * sampleResponses.length)]

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: `Here's a Shayari inspired by your thoughts:\n\n${randomShayari}\n\nWould you like me to try a different style or theme?`,
      }

      setMessages((prev) => [...prev, assistantMessage])
      onShayariGenerated(randomShayari)
      setIsLoading(false)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="h-full flex flex-col bg-[#12161f] rounded-lg border border-[#A88C63]/20">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === "user" ? "bg-[#A88C63]" : "bg-[#5A3A31]"
              }`}
            >
              {message.role === "user" ? (
                <User className="w-4 h-4 text-[#0B0E15]" />
              ) : (
                <Bot className="w-4 h-4 text-[#E4D9C8]" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user" ? "bg-[#A88C63] text-[#0B0E15]" : "bg-[#1a1f2a] text-[#E4D9C8]"
              }`}
            >
              <p className="whitespace-pre-line text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#5A3A31] flex items-center justify-center">
              <Bot className="w-4 h-4 text-[#E4D9C8]" />
            </div>
            <div className="bg-[#1a1f2a] rounded-lg p-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#A88C63] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span
                  className="w-2 h-2 bg-[#A88C63] rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 bg-[#A88C63] rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-[#A88C63]/20">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Share your emotions, a theme, or inspiration..."
            className="flex-1 bg-[#0B0E15] border-[#A88C63]/30 text-[#E4D9C8] placeholder:text-[#E4D9C8]/40 focus:border-[#A88C63]"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-[#A88C63] text-[#0B0E15] hover:bg-[#5A3A31] hover:text-[#E4D9C8] disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
