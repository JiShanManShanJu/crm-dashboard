'use client'

import { ChevronLeft, Home, Library, Plus, FileText, Calendar, Send, AlertTriangle } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SideNavItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

function SideNavItem({ icon, label, isActive, onClick, className }: SideNavItemProps) {
  return (
    <div className="relative flex">
      <button 
        onClick={onClick}
        className={cn(
          "group relative w-10 h-10 flex items-center",
          "transition-all duration-200 ease-in-out",
          "hover:w-[120px]",
          "rounded-full hover:rounded-full",
          isActive ? 
            "bg-gray-100 text-black dark:bg-gray-800 dark:text-white" : 
            "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800",
          className
        )}
      >
        {/* Icon container - always centered */}
        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
          <div className={cn(
            "w-5 h-5",
            isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-500",
            "group-hover:text-black dark:group-hover:text-white"
          )}>
            {icon}
          </div>
        </div>
        
        {/* Label that appears on hover */}
        <span className={cn(
          "absolute left-10 text-sm font-medium z-50",
          "w-0 overflow-hidden whitespace-nowrap",
          "group-hover:w-[80px] group-hover:px-2",
          "transition-all duration-200 ease-in-out",
          "text-black dark:text-white bg-gray-100 dark:bg-gray-800 rounded-r-full"
        )}>
          {label}
        </span>
      </button>
    </div>
  )
}

export function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const router = useRouter()

  return (
    <div className={cn(
      "z-40 h-[calc(100vh-57px)]", 
      "flex flex-col items-start transition-all duration-300 overflow-visible",
      isCollapsed ? "w-[0px]" : "w-[72px]"
    )}>
      <div className={cn(
        "flex-1 flex flex-col justify-center w-full",
        "transition-all duration-300",
      )}>
        {/* Collapse button - always visible */}
        <div className={cn(
          "transition-all duration-300 mb-4",
          isCollapsed ? "pl-2" : "px-4"
        )}>
          <SideNavItem 
            icon={
              <ChevronLeft className={cn(
                "transition-transform duration-300",
                isCollapsed && "rotate-180"
              )} />
            }
            label={isCollapsed ? "展开菜单" : "收起菜单"}
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>

        {/* Menu items - hidden when collapsed */}
        <div className={cn(
          "flex flex-col gap-4 transition-all duration-300 w-full",
          isCollapsed ? "opacity-0 invisible w-0" : "px-4",
        )}>
          <SideNavItem 
            icon={<Home />}
            label="首页"
            onClick={() => router.push('/')}
          />
          <SideNavItem 
            icon={<Library />}
            label="书房"
            onClick={() => router.push('/study')}
          />
          <SideNavItem 
            icon={<Plus />}
            label="新建"
          />
          <SideNavItem 
            icon={<FileText />}
            label="文档"
          />
          <SideNavItem 
            icon={<Calendar />}
            label="日历"
          />
          <SideNavItem 
            icon={<Send />}
            label="消息"
          />
          <SideNavItem 
            icon={<AlertTriangle />}
            label="警告"
            isActive
          />
        </div>
      </div>
    </div>
  )
}

