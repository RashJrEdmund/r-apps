import { AboutMe, TopSection } from "./sections";

export default function HomePage() {
  return (
    <main className="w-full h-fit flex flex-col items-center justify-start">
      <TopSection />

      <AboutMe />
    </main>
  )
};
