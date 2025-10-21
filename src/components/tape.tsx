"use client";

import { useState, useEffect } from "react";

interface Item {
    id: number;
    label: string;
    correctAnswer: string;
}

interface LevelProps {
    title: string;
    apiUrl: string;
    optionA: { label: string; value: string };
    optionB: { label: string; value: string };
}

export default function TapePage({ title, apiUrl, optionA, optionB }: LevelProps) {
    const [items, setItems] = useState<Item[]>([]);
    const [points, setPoints] = useState(0);
    const [rounds, setRounds] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [selected, setSelected] = useState<{ [id: number]: boolean }>({});
    const [answers, setAnswers] = useState<{ [id: number]: boolean }>({});

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) =>
                setItems(
                    data.map((d: { id: number; skaterFullName?: string; name?: string; tape?: string; answer?: string }) => ({
                        id: d.id,
                        label: d.skaterFullName ?? d.name ?? "Unknown",
                        correctAnswer: d.tape ?? d.answer ?? "",
                    }))
                )
            );
    }, [apiUrl]);

    useEffect(() => {
        setPercentage(Math.round((points / rounds) * 100 || 0));
    }, [points, rounds]);

    const checkAnswer = (answer: string, item: Item) => {
        const correct = item.correctAnswer === answer;
        if (correct) setPoints((p) => p + 1);
        setRounds((r) => r + 1);

        setSelected((prev) => ({ ...prev, [item.id]: true }));
        setAnswers((prev) => ({ ...prev, [item.id]: correct }));
    };

    const getCardColor = (id: number) => {
        if (!selected[id]) return "bg-white";
        return answers[id] ? "bg-green-200" : "bg-red-200";
    };

    return (
        <main>
            <div className="sticky top-0 z-50 bg-white py-4 shadow">
                <div className="container px-4 lg:px-0 lg:mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-2xl font-bold mb-4">
                        {points} / {rounds} ({percentage}%)
                    </p>
                </div>
            </div>

            <div className="container px-4 lg:px-0 lg:mx-auto py-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`rounded-lg shadow border border-gray-100 p-4 mb-4 w-3/4 md:w-1/3 lg:w-1/4 mx-auto ${getCardColor(item.id)}`}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center">{item.label}</h2>
                        <div className="flex justify-around">
                            <button
                                className="bg-black transition hover:shadow-lg text-white px-4 py-2 rounded cursor-pointer"
                                onClick={() => checkAnswer(optionA.value, item)}
                                disabled={selected[item.id]}
                            >
                                {optionA.label}
                            </button>
                            <button
                                className="bg-white shadow border border-gray-100 transition hover:shadow-lg hover:border-gray-300 text-black px-4 py-2 rounded cursor-pointer"
                                onClick={() => checkAnswer(optionB.value, item)}
                                disabled={selected[item.id]}
                            >
                                {optionB.label}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
