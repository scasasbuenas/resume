import { UNIANDES } from "./constants";
import type { Teaching } from "../../api/schemas/teachingExp";

export const TEACHING: Teaching[] = [
  {
    title: "Enterprise Architecture Teaching Assistant",
    course: {
      name: "ARQUIEMP",
      originalName: "Arquitectura Empresarial",
      code: "ISIS2403",
      credits: 6,
    },
    department: "Systems and Computing Engineering",
    startDate: new Date("2025-01-01T12:00:00-05:00"),
    endDate: new Date("2025-12-12T12:00:00-05:00"),
    supervisor: "Prof. Maria Camila Romero",
    description: [
      "Assisted students with their regards.",
      "Graded assignments and provided feedback to students.",
    ],
    isCurrent: true,
    ...UNIANDES,
  },
];
