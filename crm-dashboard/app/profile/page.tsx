'use client'

import { FluidBackground } from "@/components/fluid-background"
import { TopNav } from "@/components/nav/top-nav"
import { SideNav } from "@/components/nav/side-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Camera, Lock } from 'lucide-react'
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ConfettiAnimation } from "@/components/confetti-animation"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function ProfilePage() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  const handleSave = async () => {
    setIsSaving(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Show success toast
      toast({
        title: "恭喜您成功修改！",
        description: "您的个人信息已经更新成功",
        variant: "default",
        duration: 5000,
        action: (
          <ToastAction altText="关闭">关闭</ToastAction>
        ),
      })

      // Trigger confetti
      const canvas = document.querySelector('canvas')
      if (canvas) {
        // @ts-ignore - we know this exists because we added it
        canvas.startConfetti()
      }
    } catch (error) {
      toast({
        title: "保存失败",
        description: "请稍后重试",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FluidBackground />
      <ConfettiAnimation />
      
      <div className="relative"> {/* Changed margin-left here */}
        <TopNav />
        
        <div className="flex">
          <SideNav />
          
          <main className="flex-1 p-6">
            <div className="bg-white/40 backdrop-blur-sm dark:bg-gray-800/40 rounded-lg p-8">
              <div className="max-w-2xl mx-auto">
                {/* Avatar Upload Section */}
                <div className="flex justify-center mb-8">
                  <div className="relative group">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 rounded-full transition-opacity">
                      <Camera className="w-6 h-6 text-white" />
                    </button>
                    <input 
                      type="file" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                      accept="image/*"
                    />
                  </div>
                </div>

                {/* Profile Form */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="johndoe" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value="john@example.com" disabled />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="userId">User ID</Label>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">Modified 3 times</Badge>
                        <Badge variant="outline">3 changes remaining</Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Input id="userId" defaultValue="JD123456" />
                      <Button variant="outline">Modify</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself..."
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* Password Change Dialog */}
                  <Dialog open={isPasswordModalOpen} onOpenChange={setIsPasswordModalOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Lock className="w-4 h-4 mr-2" />
                        Change Password
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Change Password</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input id="currentPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button onClick={() => setIsPasswordModalOpen(false)}>
                          Save Changes
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button 
                    className="w-full" 
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? '保存中...' : '保存个人信息'}
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

