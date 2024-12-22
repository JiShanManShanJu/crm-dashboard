import { Search, Share, Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopNav() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b bg-white/40 backdrop-blur-sm">
      <div className="flex items-center space-x-8">
        <div className="font-semibold text-xl">sugarcrm</div>
        <div className="flex space-x-6">
          <span>Relationship</span>
          <span>Opportunities</span>
          <span>Leads</span>
          <span>Calendar</span>
          <span className="bg-black text-white px-3 py-1 rounded-full">Cases</span>
          <span>Reports</span>
          <span>Quotes</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5" />
        <Share className="w-5 h-5" />
        <Bell className="w-5 h-5" />
        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}

