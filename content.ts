export const content = {
  projectName: "CRM Agentic",
  icon: "📊",
  tagline: "A CRM that researches, enriches, and monitors your pipeline for you.",
  description:
    "An agentic CRM system where autonomous agents handle lead research, data enrichment, and account monitoring — so reps spend time closing, not typing.",
  badges: ["FastAPI", "Supabase", "ChromaDB", "Python"],
  stats: [
    { value: "3", label: "Autonomous agents" },
    { value: "8/8", label: "Core tasks shipped" },
    { value: "MVP", label: "Current phase" },
  ],
  features: [
    {
      title: "Research agent",
      description:
        "Pulls public signal on leads and accounts automatically, so reps start every call already briefed.",
    },
    {
      title: "Enrichment agent",
      description:
        "Fills in missing contact and firmographic data as records come in, keeping the CRM clean without manual entry.",
    },
    {
      title: "Monitoring agent",
      description:
        "Watches accounts for changes — job moves, funding, hiring signals — and surfaces what matters.",
    },
    {
      title: "Vector-backed memory",
      description:
        "ChromaDB gives every agent long-term recall across accounts, not just the current session.",
    },
  ],
  architecture: ["FastAPI backend", "Postgres (Supabase)", "Chroma vector store", "Agent runtime"],
  githubUrl: "https://github.com/Puneetshivhare/CRM_agentic",
  status: "MVP complete",
};
