'use client'

import { useEffect, useState } from 'react'

interface TypingTextProps {
  texts: string[]
  typingSpeed?: number
  delayBetweenTexts?: number
}

export function TypingText({ 
  texts, 
  typingSpeed = 50, 
  delayBetweenTexts = 3000 
}: TypingTextProps) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const type = () => {
      const fullText = texts[currentIndex]
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          timeout = setTimeout(() => {
            setCurrentText(fullText.slice(0, currentText.length + 1))
          }, typingSpeed)
        } else {
          // Wait before starting to delete
          timeout = setTimeout(() => {
            setIsDeleting(true)
          }, delayBetweenTexts)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          timeout = setTimeout(() => {
            setCurrentText(fullText.slice(0, currentText.length - 1))
          }, typingSpeed / 2)
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }

    type()

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts, typingSpeed, delayBetweenTexts])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

