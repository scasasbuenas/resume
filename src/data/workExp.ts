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
      "Designed and implemented workflows to ingest and store structured/unstructured data into a database",
      "Generated vector embeddings from ingested data using NLP models to enable semantic search and contextual understanding.",
      "Developed AI agents capable of interpreting vectorized information and generating detailed, user-facing responses.",
      "Fine-tuned prompt engineering strategies and agent logic to optimize answer accuracy and coherence.",
      "Ensured scalability and modularity of the system to allow for future data expansion and agent behavior improvements.",
      "Conducted testing and validation to evaluate agent performance and refine system accuracy.",
      "Collaborated with team members (if applicable) to align AI output with user needs and project goals."
    ],
    achievements: [
      "Successfully deployed an end-to-end AI system capable of responding to complex user queries using contextual data understanding.",
      "Enabled dynamic interaction with large-scale data by embedding and storing over 1000 documents/records into a vector database.",
      "Integrated modern NLP models and retrieval-augmented generation (RAG) techniques to enhance user satisfaction and system intelligence.",
      "Built a reusable architecture that allows fast adaptation to different domains and datasets, improving scalability and maintainability.",
      "Demonstrated the project’s viability in real-world use cases, leading to APC to use the system."
    ],
    workMode: "hybrid",
    employmentType: "full-time",
  },
  {
    title: "Research Assitant in Artificial Intelligence",
    team: "Inteligencia Aumentada (IAU)",
    organization: "IAU / Universidad de los Andes",
    city: "Bogotá",
    country: "Colombia",
    startDate: new Date("2025-01-20T12:00:00-05:00"),
    description: "Worked as a research assistant in a university initiative led by the Dean of Engineering that focused on the application and exploration of cutting-edge Artificial Intelligence technologies. Collaborated with faculty members on projects combining theoretical AI research with practical implementation of modern AI tools to create functional, impactful solutions for academic and institutional needs.",
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
      "Langchain",
    ],
    responsibilities: [
      "Conducted research on recent advancements in AI and evaluated their relevance to educational and institutional contexts",
      "Collaborated directly with the Dean and faculty to conceptualize and implement AI-powered tools that addressed specific academic and administrative needs",
      "Developed intelligent agents using OpenAI Playground to perform specialized tasks in academic environments",
      "Designed and deployed Microsoft Copilot workflows to automate team coordination, improving productivity for students and staff",
      "Created modular AI workflows using n8n to automate data handling, notifications, and knowledge access across systems",
      "Integrated voice synthesis and language processing tools (e.g., ElevenLabs, LangChain) to develop interactive AI interfaces and voice-enabled applications",
      "Documented and presented solutions to academic stakeholders for feedback and further development"
    ],
    achievements: [
      "Played a key role in launching AI-powered systems adopted by faculty to enhance educational workflows and student services",
      "Helped establish the university's AI research initiative as a model of innovation by combining frontier technologies with tangible academic outcomes",
      "Contributed to a strategic research vision personally driven by the Dean of Engineering, reinforcing institutional leadership in applied AI"
    ],
    workMode: "onsite",
    employmentType: "contract",
    isCurrent: true,
  }
]
