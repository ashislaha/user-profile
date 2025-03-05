"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { User, Briefcase, Map, Users } from "lucide-react"

export default function ProfileNavigation() {
  return (
    <Card className="p-4 sticky top-4">
      <nav className="space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => document.getElementById("personal")?.scrollIntoView({ behavior: "smooth" })}
        >
          <User className="h-4 w-4 mr-2" />
          Personal Info
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Briefcase className="h-4 w-4 mr-2" />
          Work History
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => document.getElementById("travel")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Map className="h-4 w-4 mr-2" />
          Travel Experiences
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => document.getElementById("family")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Users className="h-4 w-4 mr-2" />
          Family Details
        </Button>
      </nav>
    </Card>
  )
}