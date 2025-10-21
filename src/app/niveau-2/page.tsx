import LevelPage from "@/components/level";

export default function ShooterQuizPage() {
  return (
    <LevelPage
      title="Samstick - Niveau 2"
      apiUrl="/api/skaters/niveau-2.json"
      optionA={{ label: "Gaucher", value: "L" }}
      optionB={{ label: "Droitier", value: "R" }}
    />
  );
}