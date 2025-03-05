import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Music, Book, Film, Coffee, User, Mail, Calendar } from "lucide-react"

export default function PersonalInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Personal Information
        </CardTitle>
        <CardDescription>Basic details and interests</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">About Me</h3>
          <p className="text-muted-foreground">
            I'm a passionate full-stack developer with 8 years of experience building web applications. I enjoy solving
            complex problems and creating intuitive user experiences. When I'm not coding, you can find me hiking,
            reading, or experimenting with new recipes in the kitchen.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Birthday</p>
              <p className="text-sm text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                April 15, 1988
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                john.doe@example.com
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">(555) 123-4567</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Languages</p>
              <p className="text-sm text-muted-foreground">English, Spanish</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <Heart className="h-3 w-3 mr-1" />
              Hiking
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Music className="h-3 w-3 mr-1" />
              Jazz Music
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Book className="h-3 w-3 mr-1" />
              Science Fiction
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Film className="h-3 w-3 mr-1" />
              Classic Movies
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Coffee className="h-3 w-3 mr-1" />
              Coffee Brewing
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

