"use client"

import { useEffect, useRef, useState } from "react"

interface UseFadeInViewOptions {
  threshold?: number
  rootMargin?: string
}

export function useFadeInView<T extends HTMLElement>(options: UseFadeInViewOptions = {}) {
  const { threshold = 0.2, rootMargin = "0px" } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}
