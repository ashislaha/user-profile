import ProfileHeader from "@/components/profile-header"
import PersonalInfo from "@/components/personal-info"
import WorkHistory from "@/components/work-history"
import TravelExperiences from "@/components/travel-experiences"
import FamilyDetails from "@/components/family-details"
import ProfileNavigation from "@/components/profile-navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <ProfileHeader />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <ProfileNavigation />
          </div>

          <div className="md:col-span-3 space-y-8">
            <section id="personal" className="scroll-mt-20">
              <PersonalInfo />
            </section>

            <section id="work" className="scroll-mt-20">
              <WorkHistory />
            </section>

            <section id="travel" className="scroll-mt-20">
              <TravelExperiences />
            </section>

            <section id="family" className="scroll-mt-20">
              <FamilyDetails />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

