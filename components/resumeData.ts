export type ResumeItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

export const resumeItems: ResumeItem[] = [
  {
    title: "Peercoach",
    company: "Rotterdam University of Applied Sciences",
    location: "Rotterdam, Netherlands",
    period: "August 2025 - Present",
    description:
      "Provided guidance and support to first-year students with coursework and projects",
    highlights: [
      "Simulated the role of a Senior Engineer by performing code reviews while upholding OWASP and WCAG guidelines in quality",
      "Helping students in the understanding of HTML/CSS, Javascript, PHP, MySQL databases, and product/user research",
      "Developed skills in mentorship and demonstrated high level understanding of programming and software development processes",
    ],
  },
  {
    title: "Provo CAPS - Engineering & Industrial Design Student",
    company: "Provo Center of Advanced Professional Students",
    location: "Provo, UT",
    period: "January 2022 - May 2022",
    description:
      "Designed a wellness room for students at Timpview High School to relax from studies in a cross-disciplinary team",
    highlights: [
      "Delivered a well executed wellness room concept that followed budget guidelines and exceeded expectations",
      "Worked together with a business- and health student to generate ideas and gain insight from other practices",
      "Developed skills in UX research and IoT applications for the healthcare of students and built professional skills in communicating with clients and stakeholders",
    ],
  },
  {
    title: "Intern - Architect",
    company: "Pontis AG",
    location: "Springville, UT",
    period: "September 2020 - Februari 2021",
    description:
      "Worked on a 3 bedroom housing project for a client under the guidance of a senior engineer",
    highlights: [
      "Underwent the entire process from concept, to design, to execution",
      "Polished my skills in AutoDesk Revit and AutoCAD",
      "Built professional experience in communicating my thought process, creativity, and findings with colleagues",
    ],
  },
];
