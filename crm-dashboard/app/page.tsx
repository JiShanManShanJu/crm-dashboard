import { TopNav } from "@/components/nav/top-nav"
import { SideNav } from "@/components/nav/side-nav"
import { WorkflowStage } from "@/components/workflow-stage"
import { SuggestedKnowledge } from "@/components/suggested-knowledge"
import { ChevronLeft, Plus, Share, Calendar } from 'lucide-react'
import { FluidBackground } from "@/components/fluid-background"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FluidBackground />
      
      {/* Content */}
      <div className="relative"> {/* Changed margin-left here */}
        <TopNav />
        
        <div className="flex">
          <SideNav />
          <main className="flex-1 p-6">
            <div className="mb-6" />

            <div className="bg-white/40 backdrop-blur-sm dark:bg-gray-800/40 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-medium dark:text-white">New Case Management</h2>
                <div className="flex space-x-2">
                  <Plus className="w-5 h-5 dark:text-gray-300" />
                  <Share className="w-5 h-5 dark:text-gray-300" />
                  <Calendar className="w-5 h-5 dark:text-gray-300" />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-8">
                <WorkflowStage
                  title="Case Allocation"
                  tasks={[
                    {
                      title: "Allocate Case to User!",
                      avatar: "/placeholder.svg",
                      hasCheck: true,
                      hasCalendar: true
                    },
                    {
                      title: "Acknowledge Case receipt to customer!",
                      avatar: "/placeholder.svg",
                      hasCheck: true,
                      hasCalendar: true
                    }
                  ]}
                />
                
                <WorkflowStage
                  title="Issue Identification"
                  tasks={[
                    {
                      title: "Identify Issue Category",
                      avatar: "/placeholder.svg",
                      hasCheck: true,
                      hasCalendar: true
                    },
                    {
                      title: "Identify Issue Severity",
                      avatar: "/placeholder.svg",
                      hasCheck: true,
                      hasCalendar: true
                    },
                    {
                      title: "Identify Issue Impact",
                      avatar: "/placeholder.svg",
                      hasCheck: true,
                      hasCalendar: true
                    },
                    {
                      title: "Allocate to Resolution Team",
                      avatar: "/placeholder.svg",
                      hasCheck: true,
                      hasMore: true
                    },
                    {
                      title: "Advise Customer of Resolution Estimate",
                      avatar: "/placeholder.svg",
                      hasCheck: true,
                      hasMore: true
                    }
                  ]}
                />
                
                <WorkflowStage
                  title="Technical Resolution"
                  tasks={[
                    {
                      title: "Identify Issue Dependencies",
                      hasCheck: true,
                      hasCalendar: true
                    },
                    {
                      title: "Identify Issue Resolution",
                      hasCheck: true,
                      hasCalendar: true
                    },
                    {
                      title: "Estimate Resolution Time",
                      avatar: "/placeholder.svg",
                      hasCheck: true,
                      hasMore: true
                    },
                    {
                      title: "Advise Customer of Resolution Estimate",
                      avatar: "/placeholder.svg",
                      hasCheck: true,
                      hasMore: true
                    }
                  ]}
                />
                
                <WorkflowStage
                  title="New Tasks"
                  tasks={[
                    {
                      title: "Request Processing",
                      avatar: "/placeholder.svg",
                    },
                    {
                      title: "Customer Communication",
                      avatar: "/placeholder.svg",
                    },
                    {
                      title: "Customer Notification",
                      avatar: "/placeholder.svg",
                    },
                    {
                      title: "Problem Resolution",
                      avatar: "/placeholder.svg",
                    },
                    {
                      title: "Testing and Verification",
                      avatar: "/placeholder.svg",
                    },
                    {
                      title: "Customer Satisfaction",
                      avatar: "/placeholder.svg",
                    }
                  ]}
                />
              </div>
            </div>

            <div className="mt-8 bg-white/40 backdrop-blur-sm dark:bg-gray-800/40 rounded-lg p-4">
              <SuggestedKnowledge />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

