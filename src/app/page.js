import Container from "@/components/Container";
import Headers from "@/components/Headers";
import LearningSection from "@/components/LearningSection";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Headers />
      <Container />
      <LearningSection />
    </main>
  );
}
