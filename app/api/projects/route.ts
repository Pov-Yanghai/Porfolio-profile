import { NextResponse } from "next/server"

const projects = [
  {
    id: 1,
    title: "Akhara - Innovation Project",
    role: "Backend Developer",
    period: "2025-NOW",
    description:
      "Comprehensive backend system for an innovation project focusing on machine learning integration and data management.",
    technologies: ["MySQL", "PostgreSQL", "Node.js", "REST API", "Database Design"],
    highlights: [
      "Designed relational database schema for ML applications",
      "Integrated backend with frontend systems",
      "Implemented data preparation and cleaning workflows",
      "Maintained data integrity and security",
    ],
  },
  {
    id: 2,
    title: "RIWAS - Recruitment Platform",
    role: "Database Designer",
    period: "2025-NOW",
    description:
      "Recruitment document management system with comprehensive database architecture for managing users, roles, jobs, and applications.",
    technologies: ["Database Design", "ER Diagrams", "SQL", "System Architecture"],
    highlights: [
      "Created detailed database structure and ER diagrams",
      "Designed user roles and permissions system",
      "Implemented job posting and application workflows",
      "Collaborated with full-stack development team",
    ],
  },
]

export async function GET() {
  return NextResponse.json(projects)
}
