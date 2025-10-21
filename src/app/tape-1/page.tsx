import TapePage from "@/components/tape";

export default function ShooterQuizPage() {
  return (
    <TapePage
      title="Samstick - Tape niveau 1"
      apiUrl="./api/tape/niveau-1.json"
      optionA={{ label: "Noir", value: "N" }}
      optionB={{ label: "Blanc", value: "B" }}
    />
  );
}