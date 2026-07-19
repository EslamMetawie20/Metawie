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

export interface ExperienceEntry {
  id: string;
  roleKey: string;
  companyKey: string;
  locationKey?: string;
  periodKey: string;
  descriptionKey: string;
  tasksKeys: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationEntry {
  id: string;
  degreeKey: string;
  schoolKey: string;
  locationKey: string;
  periodKey: string;
  descriptionKey: string;
  badgeKey?: string;
  focusKeys?: string[];
  current?: boolean;
}

export interface ExpertiseCategory {
  id: string;
  titleKey: string;
  skills: string[];
}

export interface LanguageEntry {
  id: string;
  nameKey: string;
  levelKey: string;
  certKey?: string;
  /** Filled segments out of 6 (CEFR A1–C2) */
  level: number;
}

export interface InterestEntry {
  id: string;
  nameKey: string;
  descKey: string;
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

export const experienceData: ExperienceEntry[] = [
  {
    id: "ggu-software",
    roleKey: "about.ggu_role",
    companyKey: "about.ggu_company",
    locationKey: "about.ggu_location",
    periodKey: "about.ggu_period",
    descriptionKey: "about.ggu_desc",
    tasksKeys: [
      "about.ggu_task_1",
      "about.ggu_task_2",
      "about.ggu_task_3",
      "about.ggu_task_4",
      "about.ggu_task_5",
      "about.ggu_task_6"
    ],
    technologies: [
      "Jenkins",
      "Chocolatey",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "CI/CD",
      "Shell Scripting",
      "Python"
    ],
    current: true
  },
  {
    id: "dos-software",
    roleKey: "about.dos_role",
    companyKey: "about.dos_company",
    periodKey: "about.dos_period",
    descriptionKey: "about.dos_desc",
    tasksKeys: [
      "about.dos_task_1",
      "about.dos_task_2",
      "about.dos_task_3"
    ],
    technologies: [
      "Spring Boot",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "CI/CD",
      "Bitbucket",
      "Podman",
      "Figma"
    ]
  },
  {
    id: "skbs",
    roleKey: "about.skbs_role",
    companyKey: "about.skbs_company",
    periodKey: "about.skbs_period",
    descriptionKey: "about.skbs_desc",
    tasksKeys: [],
    technologies: ["Microsoft Office", "Outlook"]
  }
];

export const educationData: EducationEntry[] = [
  {
    id: "ostfalia",
    degreeKey: "about.ostfalia_degree",
    schoolKey: "about.ostfalia_school",
    locationKey: "about.ostfalia_location",
    periodKey: "about.ostfalia_period",
    descriptionKey: "about.ostfalia_desc",
    badgeKey: "about.ostfalia_stage",
    focusKeys: [
      "about.ostfalia_focus_1",
      "about.ostfalia_focus_2",
      "about.ostfalia_focus_3",
      "about.ostfalia_focus_4",
      "about.ostfalia_focus_5"
    ],
    current: true
  },
  {
    id: "mansoura",
    degreeKey: "about.mansoura_degree",
    schoolKey: "about.mansoura_school",
    locationKey: "about.mansoura_location",
    periodKey: "about.mansoura_period",
    descriptionKey: "about.mansoura_desc"
  }
];

export const expertiseData: ExpertiseCategory[] = [
  {
    id: "backend",
    titleKey: "about.cat_backend",
    skills: ["Java", "Spring Boot", "Python", "Jakarta EE", "REST APIs", "JavaFX", "Vaadin"]
  },
  {
    id: "frontend",
    titleKey: "about.cat_frontend",
    skills: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    id: "devops",
    titleKey: "about.cat_devops",
    skills: [
      "Jenkins",
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Kubernetes",
      "Podman",
      "Linux",
      "Shell Scripting",
      "CI/CD",
      "Chocolatey",
      "Release Management",
      "Automation"
    ]
  },
  {
    id: "databases",
    titleKey: "about.cat_databases",
    skills: ["MySQL", "SQL", "Data Modeling"]
  },
  {
    id: "pm",
    titleKey: "about.cat_pm",
    skills: ["Scrum", "Jira", "Confluence"]
  },
  {
    id: "tools",
    titleKey: "about.cat_tools",
    skills: ["Bitbucket", "Figma", "Microsoft Office"]
  }
];

export const languagesData: LanguageEntry[] = [
  { id: "de", nameKey: "about.lang_de", levelKey: "about.lang_de_level", certKey: "about.lang_de_cert", level: 5 },
  { id: "en", nameKey: "about.lang_en", levelKey: "about.lang_en_level", certKey: "about.lang_en_cert", level: 4 },
  { id: "ar", nameKey: "about.lang_ar", levelKey: "about.lang_ar_level", level: 6 }
];

export const interestsData: InterestEntry[] = [
  { id: "travel", nameKey: "about.interest_travel", descKey: "about.interest_travel_desc" },
  { id: "fishing", nameKey: "about.interest_fishing", descKey: "about.interest_fishing_desc" },
  { id: "astronomy", nameKey: "about.interest_astronomy", descKey: "about.interest_astronomy_desc" }
];
