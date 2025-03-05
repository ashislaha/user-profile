import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Map, MapPin, Calendar, Plane } from "lucide-react"

export default function TravelExperiences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Map className="h-5 w-5" />
          Travel Experiences
        </CardTitle>
        <CardDescription>Places I've visited and memorable trips</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="favorites">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="favorites">Favorite Places</TabsTrigger>
            <TabsTrigger value="recent">Recent Trips</TabsTrigger>
            <TabsTrigger value="bucket">Bucket List</TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="space-y-4 mt-4">
            {favoriteDestinations.map((destination, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={`/placeholder.svg?height=96&width=96&text=${destination.name}`}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.name}
                  </h3>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {destination.visitDate}
                  </div>
                  <p className="text-sm mt-1">{destination.description}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="recent" className="space-y-4 mt-4">
            {recentTrips.map((trip, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={`/placeholder.svg?height=96&width=96&text=${trip.destination}`}
                    alt={trip.destination}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium flex items-center">
                    <Plane className="h-4 w-4 mr-1" />
                    {trip.destination}
                  </h3>
                  <div className="text-sm text-muted-foreground">{trip.date}</div>
                  <p className="text-sm mt-1">{trip.highlights}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="bucket" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bucketList.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 border rounded-md">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{item.destination}</h3>
                    <p className="text-sm text-muted-foreground">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

const favoriteDestinations = [
  {
    name: "Kyoto, Japan",
    visitDate: "April 2018",
    description:
      "Explored ancient temples, experienced traditional tea ceremonies, and enjoyed the cherry blossom season.",
  },
  {
    name: "Barcelona, Spain",
    visitDate: "June 2019",
    description:
      "Admired Gaudí's architecture, enjoyed tapas at local restaurants, and relaxed on Mediterranean beaches.",
  },
  {
    name: "Queenstown, New Zealand",
    visitDate: "January 2020",
    description: "Hiked stunning trails, went bungee jumping, and took in the breathtaking mountain scenery.",
  },
]

const recentTrips = [
  {
    destination: "Rome, Italy",
    date: "September 2022",
    highlights: "Visited the Colosseum, Vatican City, and enjoyed authentic Italian cuisine.",
  },
  {
    destination: "Bali, Indonesia",
    date: "March 2023",
    highlights: "Relaxed on beautiful beaches, explored rice terraces, and experienced local culture.",
  },
]

const bucketList = [
  {
    destination: "Machu Picchu, Peru",
    reason: "To hike the Inca Trail and witness the ancient ruins",
  },
  {
    destination: "Northern Lights, Iceland",
    reason: "To experience the magical aurora borealis",
  },
  {
    destination: "Safari in Tanzania",
    reason: "To see the wildlife in their natural habitat",
  },
  {
    destination: "Great Barrier Reef, Australia",
    reason: "To dive and explore the world's largest coral reef system",
  },
]

