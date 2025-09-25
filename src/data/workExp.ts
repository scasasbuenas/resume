import { UNIANDES } from "./constants";
import type { WorkExperience } from "../../api/schemas/workExp";

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: "AI & Automation Engineer",
    team: "Development",
    organization: "Colnodo",
    city: "Bogotá",
    country: "Colombia",
    startDate: new Date("2025-04-09T12:00:00-05:00"),
    endDate: new Date("2025-06-10T12:00:00-05:00"),
    description: "Designed and implemented an AI-driven data processing pipeline: ingested structured/unstructured data into a database (supabase), generated vector embeddings for semantic search, and developed intelligent agents capable of understanding and responding to user queries with contextually accurate and complete answers.",
    technologies: [
      "n8n",
      "Supabase",
      "Apache",
      "SQL",
      "PostgreSQL",
      "OpenAI",
    ],
    responsibilities: [
      "Developed workflows to ingest and vectorize data with NLP models, enabling semantic search and AI agents capable of generating accurate, user-facing responses. Ensured scalability, refined performance through testing, and aligned solutions with user needs and project goals."
    ],
    achievements: [
      "Successfully deployed an end-to-end AI system with RAG techniques, enabling contextual data understanding, dynamic interaction with large-scale vectorized data, and enhanced user satisfaction. Built a scalable, reusable architecture proven viable in real-world use cases, leading to adoption by APC (Association for Progressive Communications)."
    ],
    workMode: "hybrid",
    employmentType: "full-time",
  },
  {
    title: "Research Assistant in Artificial Intelligence",
    team: "Inteligencia Aumentada (IAU)",
    organization: "IAU / Universidad de los Andes",
    city: "Bogotá",
    country: "Colombia",
    startDate: new Date("2025-01-20T12:00:00-05:00"),
    description: "Worked as a research assistant in a university initiative led by the Dean of Engineering, Rubby Casallas, that focused on the application and exploration of cutting-edge Artificial Intelligence technologies. Collaborated with faculty members, PhD professors, and other students on projects combining theoretical AI research with practical implementation of modern AI tools to create functional, impactful solutions for academic and institutional needs.",
    technologies: [
      "OpenAI Playground",
      "Copilot Studio",
      "n8n",
      "ElevenLabs",
      "Supabase",
      "VectorDB",
      "Python",
      "SQL",
      "PostgreSQL",
      "LangChain",
    ],
    responsibilities: [
      "Researched and implemented AI-powered tools for academic and administrative use, collaborating with faculty to design intelligent agents, Copilot workflows, and modular n8n automations that improved productivity and system integration. Developed interactive AI solutions with voice synthesis and language processing, and presented results to stakeholders for feedback and further development."
    ],
    achievements: [
      "Played a key role in launching AI-powered systems adopted by faculty to enhance workflows and student services, while contributing to the university’s AI research initiative as a model of innovation. Supported the Dean of Engineering’s strategic vision, reinforcing institutional leadership in applied AI."
    ],
    workMode: "onsite",
    employmentType: "contract",
    isCurrent: true,
  }
]
