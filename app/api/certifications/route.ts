import { NextResponse } from "next/server"

const certifications = [
  {
    id: 1,
    title: "Innovation Award",
    organization: "Akhara Project",
    year: "2025",
    description:
      "Recognized for outstanding contribution to the Akhara innovation project, particularly in database design and backend development.",
  },
  {
    id: 2,
    title: "Research Paper Presenter",
    organization: "ACET Conference",
    year: "2025",
    description:
      "Successfully presented research on AR performance optimization using data analysis and algorithm evaluation.",
  },
  {
    id: 3,
    title: "100% Decho Scholarship",
    organization: "CADT",
    year: "2023",
    description: "Awarded full scholarship for academic excellence and potential in Computer Science studies.",
  },
]

export async function GET() {
  return NextResponse.json(certifications)
}
