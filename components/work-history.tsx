import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building } from "lucide-react"

export default function WorkHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          Work History
        </CardTitle>
        <CardDescription>Professional experience and skills</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {workExperiences.map((job, index) => (
            <div key={index} className="border-l-2 border-muted pl-4 pb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="h-4 w-4 mr-1" />
                    {job.company}
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                  <Calendar className="h-4 w-4 mr-1" />
                  {job.period}
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{job.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {job.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-2">Education</h3>
          <div className="border-l-2 border-muted pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
              <div>
                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                <div className="text-sm text-muted-foreground">Stanford University</div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                <Calendar className="h-4 w-4 mr-1" />
                2006 - 2010
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const workExperiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2019 - Present",
    description:
      "Leading development of the company's main SaaS product. Architected and implemented major features that increased user engagement by 45%.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    period: "2015 - 2019",
    description:
      "Developed and maintained multiple client projects. Implemented responsive designs and optimized application performance.",
    skills: ["Angular", "Express", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Studios",
    period: "2011 - 2015",
    description: "Built and maintained client websites. Collaborated with designers to implement pixel-perfect UIs.",
    skills: ["JavaScript", "PHP", "MySQL", "HTML/CSS", "jQuery"],
  },
]

