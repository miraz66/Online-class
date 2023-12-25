import Container from "@/components/Container";
import Headers from "@/components/Headers";
import HeadmasterLecture from "@/components/HeadmasterLecture";
import LearningSection from "@/components/LearningSection";
import SubjectsOverview from "@/components/SubjectsOverview";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Headers />
      <Container />
      <LearningSection />
      <HeadmasterLecture />
      <SubjectsOverview />
    </main>
  );
}
