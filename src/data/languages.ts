import type { Language } from "../../api/schemas/language";

export const LANGUAGES: Language[] = [
    {
        name: "Spanish",
        proficiency: "Native",
    },
    {
        name: "English",
        proficiency: "Bilingual",
        certifications: [
            {
                name:"IELTS",
                date: new Date("2024-07-05T12:00:00-05:00"),
                grade: "7.5/9.0",
                cefrLevel: "C1",
                id: " 24CO501267CASS001A",
            },
        ],
    },
];