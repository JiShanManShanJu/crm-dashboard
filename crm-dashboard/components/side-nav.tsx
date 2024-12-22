'use client'

import { ChevronLeft, Share, Star, Plus, FileText, Calendar, Send, AlertTriangle, Moon, Sun } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useState } from 'react'

interface SideNavItemProps {
  icon: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  className?: string
}

function SideNavItem({ icon, isActive, onClick, className }: SideNavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-full",
        isActive && "bg-gray-100",
        className
      )}
    >
      <div className={cn(
        "w-5 h-5",
        isActive ? "text-black" : "text-gray-400"
      )}>
        {icon}
      </div>
    </button>
  )
}

export function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn(
      "flex flex-col items-center py-4 transition-all duration-300",
      isCollapsed ? "w-[0px]" : "w-[72px]"
    )}>
      <SideNavItem 
        icon={
          <ChevronLeft className={cn(
            "transition-transform duration-300",
            isCollapsed && "rotate-180"
          )} />
        }
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      
      <div className={cn(
        "flex-1 flex flex-col items-center gap-4 transition-all duration-300 mt-4",
        isCollapsed && "opacity-0 invisible w-0"
      )}>
        <SideNavItem icon={<Share />} />
        <SideNavItem icon={<Star />} />
        <SideNavItem icon={<Plus />} />
        <SideNavItem icon={<FileText />} />
        <SideNavItem icon={<Calendar />} />
        <SideNavItem icon={<Send />} />
        <SideNavItem icon={<AlertTriangle />} isActive />
      </div>

      <div className={cn(
        "mt-auto flex flex-col items-center gap-4 transition-all duration-300",
        isCollapsed && "opacity-0 invisible w-0"
      )}>
        <SideNavItem icon={<Moon />} />
        <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
          <Sun className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

