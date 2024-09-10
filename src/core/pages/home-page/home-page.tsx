import { AboutMe, RApps, HeroSection } from "./sections";

export default function HomePage() {
  return (
    <main className="w-full h-fit flex flex-col items-center justify-start gap-16 sm:gap-0">
      <HeroSection />

      <RApps />

      <AboutMe />
    </main>
  )
}
