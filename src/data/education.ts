import { UNIANDES } from "./constants";
import type { Education } from "../../api/schemas/education";

export const EDUCATION: Education[] = [
    {
        degree: "B.Sc. Systems and Computing Engineering",
        ...UNIANDES,
        startDate: new Date("2022-08-03T12:00:00-05:00"),
        graduationDate: new Date("2026-06-01T12:00:00-05:00"),
        trueEndDate: new Date("2026-06-01T12:00:00-05:00"),
        gpa: "4.10/5.00",
    },
    {
        degree: "Bachiller Académico",
        organization: "Colegio Hacienda los Alcaparros",
        city: "Bogotá",
        country: "Colombia",
        graduationDate: new Date("2022-06-18T12:00:00-05:00"),
        honors: "Con Mención",
        gpa:"3.3/4.0",
        isHidden: true,
    }
];
