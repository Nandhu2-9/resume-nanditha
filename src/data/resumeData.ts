export interface Certification {
  id: string;
  title: string;
  issuer: string;
  partnerInstitution?: string;
  dateOrYear: string;
  certificateType: 'Diploma' | 'Participation' | 'Professional';
  credentialId?: string;
  description: string;
  skills: string[];
  signatories: string[];
  location?: string;
  badgeColor: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'Industrial Training' | 'Academic Experience' | 'Internship' | 'Full-Time';
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  bullets: string[];
  metrics?: string;
  architectureHighlights?: {
    module: string;
    description: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  score: string;
  scoreType: 'Percentage' | 'CGPA';
  status: string;
}

export interface ResumeData {
  personal: {
    name: string;
    headline: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    linkedinUrl: string;
    github: string;
    githubUrl: string;
    portfolioUrl?: string;
    photoUrl?: string;
  };
  summary: string;
  skills: {
    category: string;
    skills: string[];
  }[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  certifications: Certification[];
  education: EducationItem[];
  strengths: string[];
  languages: {
    language: string;
    proficiency: string;
  }[];
  declaration: {
    statement: string;
    place: string;
    date: string;
    signatory: string;
  };
}

export const initialResumeData: ResumeData = {
  personal: {
    name: "NANDITHA H",
    headline: "Software Developer | Python | React JS | Django | BCA Final Year",
    location: "Bengaluru, Karnataka, India",
    phone: "+91 7795925251",
    email: "nandithah0402@gmail.com",
    linkedin: "linkedin.com/in/nanditha-h-h-b0964638a",
    linkedinUrl: "https://www.linkedin.com/in/nanditha-h-h-b0964638a",
    github: "github.com/nandhu2-9",
    githubUrl: "https://github.com/nandhu2-9",
    portfolioUrl: "https://github.com/nandhu2-9/VoteSync",
    photoUrl: "/nanditha_h_portrait.jpg"
  },
  summary: "Motivated BCA final-year student with a solid foundation in modern software development and web technologies. Skilled in Python, JavaScript, HTML5, CSS3, React JS, Django, and relational database systems. Engineered VoteSync, an academic prototype integrating full-stack web engineering, OpenCV computer vision for biometric voter verification, and IoT hardware telemetry. Certified in Modular Angular Web Applications and Advanced MEAN Full-Stack development by Nanochip Skills & SSMRV College. Eager to contribute technical acumen, rapid learning agility, and reliable code quality to high-impact development teams as an entry-level Software Developer.",
  skills: [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript (ES6+)", "TypeScript"]
    },
    {
      category: "Frontend Development",
      skills: ["React JS", "Angular (Modular)", "HTML5", "CSS3", "Tailwind CSS", "Chart.js", "Responsive UI/UX"]
    },
    {
      category: "Backend & Frameworks",
      skills: ["Django", "REST APIs", "Node.js (MEAN concepts)", "Python MVC Architecture"]
    },
    {
      category: "Databases & Storage",
      skills: ["MySQL", "SQLite", "Relational Database Design", "CRUD Operations"]
    },
    {
      category: "Emerging Technologies",
      skills: ["Machine Learning Basics", "OpenCV (Computer Vision)", "IoT Device Telemetry & Sensors", "Biometric Authentication"]
    },
    {
      category: "Developer Tools & Workflow",
      skills: ["VS Code", "Git", "GitHub", "Postman", "Chrome DevTools", "Agile / Scrum Basics"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      title: "Full-Stack Web Development Trainee (Modular Angular & MEAN)",
      company: "Elevium – Nanochip Skills Pvt Ltd (in partnership with SSMRV College)",
      location: "Bengaluru, Karnataka",
      period: "Academic Year 2025 – 2026",
      type: "Industrial Training",
      description: [
        "Completed rigorous industrial training in Modular Angular Applications as part of the Advanced MEAN Full Stack course program.",
        "Engineered modular Single Page Application (SPA) components, dynamic routing, reactive forms, and data binding architectures.",
        "Integrated client-side services with backend RESTful APIs, implementing robust asynchronous request handling and error boundaries.",
        "Practiced professional Git version control workflows, component separation of concerns, and clean coding standards for enterprise web apps."
      ],
      technologies: ["Angular", "TypeScript", "MEAN Stack", "JavaScript", "HTML5/CSS3", "REST APIs", "Git"]
    },
    {
      id: "exp-2",
      title: "Lead Developer & System Architect (Academic Capstone)",
      company: "SSMRV College – Computer Applications Department",
      location: "Bengaluru, Karnataka",
      period: "2024 – 2025",
      type: "Academic Experience",
      description: [
        "Spearheaded the complete software lifecycle of VoteSync—an intelligent, fraud-resistant voting system integrating web, IoT, and ML technologies.",
        "Developed custom backend services using Django with SQLite/MySQL database models for voter registries, election constituencies, and ballot tallies.",
        "Designed biometric facial verification module leveraging Python and OpenCV to authenticate voter identity before issuing digital ballots.",
        "Configured IoT monitoring logic to continuously poll polling-booth hardware integrity, connectivity status, and system telemetry.",
        "Created an administrative analytics portal with real-time election turnout metrics and animated visualization graphs powered by Chart.js."
      ],
      technologies: ["Python", "Django", "OpenCV", "Machine Learning", "IoT", "MySQL", "JavaScript", "Chart.js"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "VoteSync – IoT & ML Smart Voting System",
      subtitle: "Smart Automated Voting Prototype with Biometric Face Verification & IoT Telemetry",
      technologies: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "OpenCV", "Machine Learning", "IoT", "SQLite/MySQL", "Chart.js"],
      bullets: [
        "Architected an end-to-end prototype smart voting system combining web development, IoT telemetry, and Machine Learning concepts.",
        "Designed and implemented secure voter registration, administrative authentication, and constituency access control.",
        "Engineered an automated voter biometric verification module using Python and OpenCV for real-time facial feature extraction and fraud prevention.",
        "Built simulated IoT hardware monitoring functionality to track physical voting terminal heartbeat, sensor signals, and tamper alarms.",
        "Created comprehensive modules for election lifecycle management, candidate profiles, anonymous encrypted voting, and dynamic result visualization via Chart.js.",
        "Constructed normalized SQLite/MySQL relational schemas guaranteeing ballot idempotency, audit trail integrity, and relational constraints.",
        "Authored academic documentation detailing production-ready roadmaps for cryptographic tallying, security compliance, and high-concurrency scaling."
      ],
      metrics: "Prototype successfully validated on simulated multi-station electoral dataset with 100% audit accuracy",
      architectureHighlights: [
        {
          module: "Biometric Authentication",
          description: "Python + OpenCV camera feed processing, face detection Haar cascades / embeddings for instant identity verification against registered voter database."
        },
        {
          module: "Backend & ORM",
          description: "Django MVC architecture managing authenticated sessions, role-based views for Election Officers, and transactional ballot persistence."
        },
        {
          module: "IoT Station Monitor",
          description: "Telemetry listener recording polling station online/offline heartbeats, battery status, and terminal diagnostics."
        },
        {
          module: "Interactive Analytics",
          description: "Chart.js client integration rendering dynamic pie, bar, and progress visualizers for real-time voter turnout and candidate share."
        }
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Diploma Certificate in Modular Angular Applications",
      issuer: "Elevium – Nanochip Skills Pvt Ltd",
      partnerInstitution: "Sivananda Sarma Memorial RV College (SSMRV College)",
      dateOrYear: "Academic Year 2025–26",
      certificateType: "Diploma",
      credentialId: "NANOCHIP/SSMRV/MEAN-ANG/2025-26/0402",
      description: "Successfully completed comprehensive practical training in Modular Angular Applications and Web Applications as part of the Advanced MEAN Full Stack course program.",
      skills: ["Angular", "MEAN Full Stack", "Modular Architecture", "TypeScript", "RESTful Web Services", "SPA Engineering"],
      signatories: [
        "Principal, SSMRV College",
        "HOD – BCA, SSMRV College",
        "Elevium – by Nanochip Skills Pvt Ltd"
      ],
      location: "Bengaluru, Karnataka",
      badgeColor: "emerald"
    },
    {
      id: "cert-2",
      title: "Certificate of Participation – Student Induction Programme (SIP)",
      issuer: "RV Educational Institutions – SSNMV College",
      partnerInstitution: "Universal Human Values (UHV) Cell & Deha Bharati",
      dateOrYear: "September 25, 2023",
      certificateType: "Participation",
      credentialId: "RV-SSNMV/UHV-SIP/2023/NANDITHA",
      description: "Successfully participated and completed the Student Induction Programme organized by the Universal Human Values cell of SSNMV College in association with Deha Bharati.",
      skills: ["Universal Human Values", "Ethics in Engineering", "Interpersonal Communication", "Professional Conduct", "Team Collaboration"],
      signatories: [
        "Arjun DR (Co-Ordinator, UHV Cell)",
        "Dr. G B Sunil Kumar (Principal, SSNMV College)"
      ],
      location: "Tanga, Karnataka - 572244",
      badgeColor: "blue"
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "SSMRV College",
      location: "Bengaluru, Karnataka",
      period: "2024 – 2027 (Final Year)",
      score: "65.95%",
      scoreType: "Percentage",
      status: "Final Year | Expected Graduation: 2027"
    },
    {
      id: "edu-2",
      degree: "Pre-University Course (PUC)",
      institution: "Karnataka Pre-University Examination Board",
      location: "Karnataka, India",
      period: "Completed",
      score: "67.5%",
      scoreType: "Percentage",
      status: "Passed with First Class"
    },
    {
      id: "edu-3",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Karnataka Secondary Education Examination Board (KSEEB)",
      location: "Karnataka, India",
      period: "Completed",
      score: "53.96%",
      scoreType: "Percentage",
      status: "Passed"
    }
  ],
  strengths: [
    "Problem Solving",
    "Quick Learning",
    "Teamwork & Collaboration",
    "Effective Communication",
    "Adaptability & Agility",
    "Willingness to Learn",
    "Time Management & Dedication"
  ],
  languages: [
    {
      language: "English",
      proficiency: "Professional Working Proficiency"
    },
    {
      language: "Kannada",
      proficiency: "Native / Full Professional"
    }
  ],
  declaration: {
    statement: "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.",
    place: "Bengaluru, Karnataka",
    date: "October 2026",
    signatory: "Nanditha H"
  }
};
