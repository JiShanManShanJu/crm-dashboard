import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserAvatars() {
  return (
    <div className="flex -space-x-2">
      {[...Array(8)].map((_, i) => (
        <Avatar key={i} className="border-2 border-white">
          <AvatarImage src={`/placeholder.svg?text=${i + 1}`} />
          <AvatarFallback>{i + 1}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}

