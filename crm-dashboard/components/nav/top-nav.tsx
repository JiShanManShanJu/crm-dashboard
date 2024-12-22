'use client'

import { Search, Share, Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TypingText } from './typing-text'
import { useRouter } from 'next/navigation'

const quotes = [
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Innovation distinguishes between a leader and a follower.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there."
]

interface TopNavProps {
  className?: string
}

export function TopNav({ className }: TopNavProps) {
  const router = useRouter()

  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
      <div className="flex items-center space-x-8">
        <div className="font-semibold text-xl dark:text-white">sugarcrm</div>
        <div className="text-sm text-gray-600 dark:text-gray-300 italic min-w-[300px]">
          "<TypingText texts={quotes} typingSpeed={40} delayBetweenTexts={2000} />"
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 dark:text-gray-300" />
        <Share className="w-5 h-5 dark:text-gray-300" />
        <Bell className="w-5 h-5 dark:text-gray-300" />
        <button 
          onClick={() => router.push('/profile')}
          className="rounded-full hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-700 transition-all"
        >
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </nav>
  )
}

