import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Heart, Calendar, Gift } from "lucide-react"

export default function FamilyDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Family Details
        </CardTitle>
        <CardDescription>Information about my loved ones</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-4 flex items-center">
            <Heart className="h-4 w-4 mr-2 text-rose-500" />
            Immediate Family
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {familyMembers.map((member, index) => (
              <div key={index} className="flex items-center gap-4 p-3 border rounded-md">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${member.name.charAt(0)}`} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.relation}</p>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    Birthday: {member.birthday}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4 flex items-center">
            <Gift className="h-4 w-4 mr-2 text-amber-500" />
            Special Family Occasions
          </h3>
          <div className="space-y-3">
            {familyOccasions.map((occasion, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded-md">
                <div>
                  <h4 className="font-medium">{occasion.event}</h4>
                  <p className="text-sm text-muted-foreground">{occasion.description}</p>
                </div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">{occasion.date}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Family Traditions</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                ✓
              </div>
              <span>Annual summer camping trip to Yosemite National Park</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                ✓
              </div>
              <span>Sunday dinner with extended family once a month</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                ✓
              </div>
              <span>Holiday cookie baking competition every December</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                ✓
              </div>
              <span>New Year's Day hike to watch the first sunrise of the year</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

const familyMembers = [
  {
    name: "Sarah Doe",
    relation: "Wife",
    birthday: "June 12, 1990",
  },
  {
    name: "Emma Doe",
    relation: "Daughter",
    birthday: "March 3, 2015",
  },
  {
    name: "Ethan Doe",
    relation: "Son",
    birthday: "November 18, 2017",
  },
  {
    name: "Max",
    relation: "Family Dog",
    birthday: "May 5, 2019",
  },
]

const familyOccasions = [
  {
    event: "Wedding Anniversary",
    description: "Celebrating 10 years of marriage",
    date: "September 15",
  },
  {
    event: "Family Reunion",
    description: "Annual gathering with extended family",
    date: "July 4",
  },
  {
    event: "Parents' Anniversary",
    description: "Mom and Dad's 40th wedding anniversary",
    date: "October 22",
  },
]

