import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"

export default function ProfileHeader() {
  return (
    <Card className="w-full overflow-hidden">
      <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600" />
      <div className="p-6 md:p-8 relative">
        <Avatar className="h-24 w-24 absolute -top-12 border-4 border-white">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <div className="mt-12 md:mt-0 md:ml-28 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">Full Stack Developer</p>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">San Francisco, CA</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

