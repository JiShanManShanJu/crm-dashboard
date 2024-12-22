import { TopNav } from "@/components/nav/top-nav"
import { SideNav } from "@/components/nav/side-nav"
import { FluidBackground } from "@/components/fluid-background"
import { Book, BookOpen, Clock, GraduationCap, Library, Plus } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function StudyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FluidBackground />
      
      <div className="relative h-screen flex flex-col">
        <TopNav />
        
        <div className="flex-1 flex">
          <div className="flex items-center">
            <SideNav />
          </div>
          
          <main className="flex-1 p-6 overflow-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold dark:text-white">我的书房</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">今天是学习的好日子</p>
            </div>

            {/* Reading Progress Section */}
            <div className="bg-white/40 backdrop-blur-sm dark:bg-gray-800/40 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-medium dark:text-white">当前阅读</h2>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  添加新书籍
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-4 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Book className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium dark:text-white">深入理解计算机系统</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">已阅读 45%</p>
                      <Progress value={45} className="mt-2" />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        上次阅读: 2小时前
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium dark:text-white">算法导论</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">已阅读 28%</p>
                      <Progress value={28} className="mt-2" />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        上次阅读: 1天前
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Library className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium dark:text-white">设计模式</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">已阅读 65%</p>
                      <Progress value={65} className="mt-2" />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        上次阅读: 3天前
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Study Statistics Section */}
            <div className="bg-white/40 backdrop-blur-sm dark:bg-gray-800/40 rounded-lg p-6">
              <h2 className="font-medium mb-6 dark:text-white">学习统计</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-4 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">本周学习时长</p>
                      <p className="text-2xl font-bold dark:text-white">12.5h</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <Book className="w-6 h-6 text-green-600 dark:text-green-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">已读书籍</p>
                      <p className="text-2xl font-bold dark:text-white">8本</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">阅读进度</p>
                      <p className="text-2xl font-bold dark:text-white">46%</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">学习目标</p>
                      <p className="text-2xl font-bold dark:text-white">85%</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

