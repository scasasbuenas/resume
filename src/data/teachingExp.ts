import { UNIANDES } from "./constants";
import type { Teaching } from "../../api/schemas/teachingExp";

export const TEACHING: Teaching[] = [
  {
    title: "Enterprise Architecture Teaching Assistant",
    course: {
      name: "ARQUIEMP",
      originalName: "Arquitectura Empresarial",
      code: "ISIS2403",
      credits: 3,
    },
    department: "Systems and Computing Engineering",
    startDate: new Date("2025-01-01T12:00:00-05:00"),
    endDate: new Date("2025-12-12T12:00:00-05:00"),
    supervisor: "Prof. Maria Camila Romero",
    description: [
      "Assist students with project-related questions in topics such as conceptual models, business models, strategic models, financial models, capability models, information models, organizational models, process models, business strategic analysis, and resource models.",
      "Graded assignments and provided feedback to students to help them improve their understanding of enterprise architecture concepts and methodologies.",
    ],
    isCurrent: true,
    ...UNIANDES,
  },
  {
    title: "Agent Development Teaching Assistant (Masters Program)",
    course: { 
      name: "Building applications based on LLMs",
      originalName: "Desarrollo de aplicaciones basadas en grandes modelos de lenguaje",
      code: "ISISXXXX",
      credits: 3,
    },
    department: "Systems and Computing Engineering",
    startDate: new Date("2025-10-06T12:00:00-05:00"),
    endDate: new Date("2025-12-12T12:00:00-05:00"),
    supervisor: "Prof. Jesse Padilla",
    description: [
      "Assist students with code and project-related questions in topics such as installation and configuration of Ollama and LangChain, running initial prompts, working with models, prompts, and parsers, implementing memory and embeddings, building basic RAG pipelines, and applying reranking techniques with LangChain."
    ],
    isCurrent: false,
    ...UNIANDES,
  }
];
