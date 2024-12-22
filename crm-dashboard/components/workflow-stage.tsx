import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check, Calendar, MoreHorizontal, Plus } from 'lucide-react'
import { Card } from "@/components/ui/card"

interface WorkflowStageProps {
  title: string
  tasks: {
    title: string
    avatar?: string
    hasCheck?: boolean
    hasCalendar?: boolean
    hasMore?: boolean
  }[]
}

export function WorkflowStage({ title, tasks }: WorkflowStageProps) {
  return (
    <div className="flex-1">
      <h3 className="text-sm font-medium mb-4 dark:text-white">{title}</h3>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <Card key={index} className="p-4 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 dark:text-white">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                {task.avatar ? (
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={task.avatar} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                    <Plus className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                )}
                <span className="text-sm">{task.title}</span>
              </div>
              <div className="flex space-x-2">
                {task.hasCheck && <Check className="w-4 h-4 dark:text-gray-300" />}
                {task.hasCalendar && <Calendar className="w-4 h-4 dark:text-gray-300" />}
                {task.hasMore && <MoreHorizontal className="w-4 h-4 dark:text-gray-300" />}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

