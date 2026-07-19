export interface Project {
  id: string;
  nameKey: string; // Translation key
  categoryKey: string;
  shortKey: string;
  descKey: string;
  roleKey: string;
  statusKey: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: string;
  featuresKey: string; // Translation key pointing to array list
  attributionKey?: string;
}

export interface Skill {
  name: string;
  level: "professional" | "project" | "academic" | "developing";
}

export interface SkillGroup {
  id: string;
  titleKey: string;
  skills: Skill[];
}

export interface TimelineEntry {
  id: string;
  roleKey: string;
  companyKey: string;
  locationKey: string;
  periodKey?: string;
  descriptionKey: string;
  tasksKeys: string[];
  isEducation?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "darsio",
    nameKey: "projects.darsio.name",
    categoryKey: "projects.darsio.category",
    shortKey: "projects.darsio.short",
    descKey: "projects.darsio.desc",
    roleKey: "projects.darsio.role",
    statusKey: "projects.darsio.status",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "JWT Auth",
      "REST APIs",
      "RBAC",
      "Multi-tenant",
      "Integration Testing"
    ],
    liveUrl: "https://darsio.org/en",
    image: "/images/darsio.jpg",
    featuresKey: "projects.darsio.features"
  },
  {
    id: "bedaya",
    nameKey: "projects.bedaya.name",
    categoryKey: "projects.bedaya.category",
    shortKey: "projects.bedaya.short",
    descKey: "projects.bedaya.desc",
    roleKey: "projects.bedaya.role",
    statusKey: "projects.bedaya.status",
    technologies: [
      "React",
      "Tailwind CSS",
      "RTL/LTR Translation",
      "Cloudflare Pages",
      "Responsive Layout"
    ],
    liveUrl: "https://bedaya.pages.dev",
    image: "/images/bedaya.jpg",
    featuresKey: "projects.bedaya.features"
  },
  {
    id: "cafe-zeitlos",
    nameKey: "projects.cafe.name",
    categoryKey: "projects.cafe.category",
    shortKey: "projects.cafe.short",
    descKey: "projects.cafe.desc",
    roleKey: "projects.cafe.role",
    statusKey: "projects.cafe.status",
    technologies: [
      "HTML5",
      "CSS Grids",
      "JavaScript",
      "GitHub Pages",
      "Smooth CSS Transitions"
    ],
    liveUrl: "https://eslammetawie20.github.io/cafeZeitLos/",
    repoUrl: "https://github.com/EslamMetawie20/cafeZeitLos",
    image: "/images/cafe-zeitlos.png",
    featuresKey: "projects.cafe.features"
  },
  {
    id: "ci-cd-practice",
    nameKey: "projects.cicd.name",
    categoryKey: "projects.cicd.category",
    shortKey: "projects.cicd.short",
    descKey: "projects.cicd.desc",
    roleKey: "projects.cicd.role",
    statusKey: "projects.cicd.status",
    technologies: [
      "GitHub Actions",
      "Tekton CD",
      "Docker",
      "Kubernetes Fundamentals",
      "Python",
      "Automated Testing"
    ],
    repoUrl: "https://github.com/EslamMetawie20/wtecc-CICD_PracticeCode",
    image: "/images/cicd-practice.jpg",
    featuresKey: "projects.cicd.features",
    attributionKey: "projects.cicd.attribution"
  }
];

export const skillsData: SkillGroup[] = [
  {
    id: "development",
    titleKey: "skills.cat_development",
    skills: [
      { name: "Java", level: "project" },
      { name: "Spring Boot", level: "project" },
      { name: "TypeScript", level: "project" },
      { name: "JavaScript", level: "project" },
      { name: "React", level: "project" },
      { name: "HTML / CSS", level: "project" },
      { name: "REST APIs", level: "project" },
      { name: "SQL", level: "academic" },
      { name: "PostgreSQL", level: "project" },
      { name: "Git", level: "professional" }
    ]
  },
  {
    id: "devops",
    titleKey: "skills.cat_devops",
    skills: [
      { name: "CI / CD Pipelines", level: "professional" },
      { name: "GitHub Actions", level: "professional" },
      { name: "Automated Builds", level: "professional" },
      { name: "Automated Software Tests", level: "professional" },
      { name: "Release Automation", level: "professional" },
      { name: "Docker Environments", level: "professional" },
      { name: "Chocolatey Packaging", level: "professional" },
      { name: "Kubernetes Fundamentals", level: "developing" },
      { name: "Tekton Fundamentals", level: "developing" },
      { name: "PowerShell Scripting", level: "professional" }
    ]
  },
  {
    id: "cloud",
    titleKey: "skills.cat_cloud",
    skills: [
      { name: "Microsoft Azure Servers", level: "professional" },
      { name: "Docker Container Deployments", level: "professional" },
      { name: "Windows App Deployment", level: "professional" },
      { name: "Server Configuration", level: "professional" },
      { name: "Monitoring & Troubleshooting", level: "professional" }
    ]
  },
  {
    id: "practices",
    titleKey: "skills.cat_practices",
    skills: [
      { name: "Version Control Systems", level: "professional" },
      { name: "Root-Cause Investigation", level: "professional" },
      { name: "Clean Code Principles", level: "academic" },
      { name: "Role-Based Access Control", level: "project" },
      { name: "Multi-tenant Architecture", level: "project" },
      { name: "Responsive UI Development", level: "project" }
    ]
  }
];

export const timelineData: TimelineEntry[] = [
  {
    id: "ggu-software",
    roleKey: "experience.ggu_role",
    companyKey: "experience.ggu_company",
    locationKey: "experience.ggu_location",
    descriptionKey: "experience.ggu_p1",
    tasksKeys: [
      "experience.ggu_task_1",
      "experience.ggu_task_2",
      "experience.ggu_task_3",
      "experience.ggu_task_4",
      "experience.ggu_task_5"
    ]
  },
  {
    id: "ostfalia",
    roleKey: "about.edu_degree",
    companyKey: "about.edu_uni",
    locationKey: "common.germany",
    descriptionKey: "about.edu_desc",
    tasksKeys: [
      "about.edu_stage"
    ],
    isEducation: true
  }
];
