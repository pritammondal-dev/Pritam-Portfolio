import profileImg from '../assets/images/profile/profile.png';
import neurovaultImg from '../assets/images/projects/neurovault.png';
import neurovaultChatImg from '../assets/images/projects/neurovault_chat.png';
import neurovaultDocsImg from '../assets/images/projects/neurovault_docs.png';
import neurovaultDashboardImg from '../assets/images/projects/Neurovault_Dashboard.png';
import topicSectionImg from '../assets/images/projects/Topic_section.png';
import folderStructureImg from '../assets/images/projects/Folder_structure.png';
import studentManagementImg from '../assets/images/projects/student_management.png';
import portfolioImg from '../assets/images/projects/portfolio.png';
import eCommerceImg from '../assets/images/projects/ecommerce.png';
import taskManagerImg from '../assets/images/projects/task_manager.png';

const images = {
  avatarHero: profileImg,
  avatarAbout: profileImg,
  projects: {
    neuroVault: neurovaultImg,
    neuroVaultChat: neurovaultChatImg,
    neuroVaultDocs: neurovaultDocsImg,
    Neurovault_Dashboard: neurovaultDashboardImg,
    Topic_section: topicSectionImg,
    Folder_structure: folderStructureImg,
    studentManagement: studentManagementImg,
    portfolio: portfolioImg,
    eCommerce: eCommerceImg,
    taskManager: taskManagerImg
  }
};

export const siteConfig = {
  // Centralized Image Paths
  images,

  // Personal Details
  personal: {
    fullName: 'Pritam Mondal',
    firstName: 'Pritam',
    lastName: 'Mondal',
    title: 'Full-Stack & Generative AI Developer',
    email: 'itspritam133@gmail.com',
    phone: '+91 7810866098',
    whatsapp: '',
    address: '',
    city: 'Kolkata',
    state: 'West Bengal',
    country: 'India',
    location: 'Basirhat, Kolkata, West Bengal, India',
    resumeUrl: '/resume.pdf'
  },

  // SEO Settings
  seo: {
    title: 'Pritam Mondal — Full-Stack & Generative AI Developer',
    description: 'Portfolio of Pritam Mondal — Full-Stack, MERN Stack & Generative AI Developer.',
    keywords: 'Pritam Mondal, portfolio, developer, Full-Stack, MERN, AI, React, Node.js',
    author: 'Pritam Mondal'
  },

  // Navigation Items
  navigation: [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Services', target: 'services' },
    { label: 'Contact', target: 'contact' }
  ],

  // Social URLs
  socials: {
    github: 'https://github.com/pritammondal-dev',
    linkedin: 'https://linkedin.com/in/pritam-mondal-dev',
    email: 'itspritam133@gmail.com',
    x: 'https://x.com/PritamMond133'
  },

  // Social Links List
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/pritammondal-dev', icon: 'fa-brands fa-github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/pritam-mondal-dev', icon: 'fa-brands fa-linkedin-in' },
    { platform: 'Email', url: 'mailto:itspritam133@gmail.com', icon: 'fa-solid fa-envelope' },
    { platform: 'X (Twitter)', url: 'https://x.com/PritamMond133', icon: 'fa-brands fa-x-twitter' }
  ],

  // Buttons Configuration
  buttons: {
    resume: 'Resume',
    downloadResume: 'Download Resume',
    contactMe: 'Contact Me',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    viewDetails: 'View Details',
    closeModal: 'Close modal'
  },

  // Theme Settings
  themeSettings: {
    defaultTheme: 'dark',
    allowThemeToggle: true
  },

  // Hero Section Strings
  hero: {
    badgeText: 'Open to opportunities',
    greeting: 'Hi, I\'m',
    waveIcon: '👋',
    nameFirst: 'Pritam',
    nameLast: 'Mondal',
    description: 'Building scalable web applications, beautiful user experiences, and AI-powered digital products — one clean commit at a time.',
    developerRoles: [
      'Full-Stack Developer',
      'MERN Stack Developer',
      'Generative AI Developer',
      'React Developer',
      'Backend Developer'
    ],
    scrollText: 'Scroll',
    orbitIcons: [
      { name: 'React', icon: 'si si-react', color: '#61DAFB', style: { top: '-6%', left: '44%', animationDelay: '0s' } },
      { name: 'Node', icon: 'si si-nodedotjs', color: '#6EE7B7', style: { top: '20%', right: '-8%', animationDelay: '.6s' } },
      { name: 'MongoDB', icon: 'si si-mongodb', color: '#53E0D7', style: { bottom: '12%', right: '-4%', animationDelay: '1.2s' } },
      { name: 'JavaScript', icon: 'si si-javascript', color: '#F7DF1E', style: { bottom: '-6%', left: '38%', animationDelay: '1.8s' } },
      { name: 'Brain', icon: 'fa-solid fa-brain', color: '#A78BFA', style: { top: '22%', left: '-10%', animationDelay: '.9s' } },
      { name: 'Git', icon: 'si si-git', color: '#F88F22', style: { bottom: '22%', left: '-10%', animationDelay: '1.5s' } }
    ]
  },

  // About Section Strings
  about: {
    eyebrow: 'About Me',
    icon: 'fa-solid fa-user',
    title: 'Who I Am',
    subtitle: 'A curious builder turning ideas into fast, elegant, AI-powered products.',
    education: {
      degree: 'BCA',
      institution: 'MAKAUT',
      location: 'India',
      icon: 'fa-solid fa-graduation-cap'
    },
    locationIcon: 'fa-solid fa-location-dot',
    descriptionParagraph1: 'I\'m a Full-Stack, MERN Stack, and Generative AI Developer currently pursuing my BCA at MAKAUT. I enjoy turning complex problems into simple, elegant interfaces backed by solid, scalable engineering.',
    descriptionParagraph2: 'Right now I\'m deep in the MERN stack, exploring Next.js, and building hands-on experience with Generative AI and backend engineering — from REST APIs to database design.',
    currentlyLearningTitle: 'Currently learning',
    currentlyLearning: ['MERN Stack', 'Next.js', 'Generative AI', 'Backend Engineering'],
    goalIcon: 'fa-solid fa-bullseye',
    goalText: 'Become a Full-Stack Engineer building scalable products powered by AI.',
    interestsTitle: 'Interests',
    interests: ['Open Source', 'Problem Solving', 'Modern UI', 'Artificial Intelligence'],
    stats: [
      { target: 18, suffix: '+', label: 'Projects Completed' },
      { target: 15, suffix: '+', label: 'Technologies Learned' },
      { target: 30, suffix: '+', label: 'GitHub Repositories' },
      { target: 600, suffix: '+', label: 'Learning Hours' },
      { target: 6, suffix: '', label: 'Certificates' }
    ]
  },

  // Skills Section Strings
  skills: {
    eyebrow: 'Skills',
    icon: 'fa-solid fa-layer-group',
    title: 'What I Work With',
    subtitle: 'A toolbox built for shipping full-stack, AI-powered products end to end.',
    searchPlaceholder: 'Search a skill...',
    categories: ['all', 'Frontend', 'Backend', 'Database', 'Tools', 'Deployment'],
    allLabel: 'All',
    emptyMessage: 'No skills found.',
    proficiencyLabel: 'Proficiency',
    skillsData: [
      { name: 'HTML5', cat: 'Frontend', level: 95, icon: 'si si-html5', color: '#F06529' },
      { name: 'CSS3', cat: 'Frontend', level: 92, icon: 'si si-css3', color: '#2965F1' },
      { name: 'JavaScript', cat: 'Frontend', level: 90, icon: 'si si-javascript', color: '#F7DF1E' },
      { name: 'TypeScript', cat: 'Frontend', level: 78, icon: 'si si-typescript', color: '#3178C6' },
      { name: 'React', cat: 'Frontend', level: 92, icon: 'si si-react', color: '#61DAFB' },
      { name: 'Next.js', cat: 'Frontend', level: 75, icon: 'si si-nextdotjs', color: '#FFFFFF' },
      { name: 'Tailwind CSS', cat: 'Frontend', level: 90, icon: 'si si-tailwindcss', color: '#38BDF8' },
      { name: 'Bootstrap', cat: 'Frontend', level: 85, icon: 'si si-bootstrap', color: '#7952B3' },
      { name: 'Node.js', cat: 'Backend', level: 88, icon: 'si si-nodedotjs', color: '#6EE7B7' },
      { name: 'Express.js', cat: 'Backend', level: 86, icon: 'si si-express', color: '#FBB931' },
      { name: 'PHP', cat: 'Backend', level: 65, icon: 'si si-php', color: '#8993BE' },
      { name: 'Java', cat: 'Backend', level: 70, icon: 'si si-openjdk', color: '#EA6113' },
      { name: 'MongoDB', cat: 'Database', level: 88, icon: 'si si-mongodb', color: '#6EE7B7' },
      { name: 'MySQL', cat: 'Database', level: 80, icon: 'si si-mysql', color: '#7CE7F3' },
      { name: 'PostgreSQL', cat: 'Database', level: 72, icon: 'si si-postgresql', color: '#A78BFA' },
      { name: 'Git', cat: 'Tools', level: 90, icon: 'si si-git', color: '#F1502F' },
      { name: 'GitHub', cat: 'Tools', level: 90, icon: 'si si-github', color: '#FFFFFF' },
      { name: 'VS Code', cat: 'Tools', level: 95, icon: 'devicon-vscode-plain', color: '#007ACC' },
      { name: 'Postman', cat: 'Tools', level: 85, icon: 'si si-postman', color: '#F88F22' },
      { name: 'Figma', cat: 'Tools', level: 70, icon: 'si si-figma', color: '#A78BFA' },
      { name: 'Vercel', cat: 'Deployment', level: 88, icon: 'si si-vercel', color: '#FFFFFF' },
      { name: 'Netlify', cat: 'Deployment', level: 85, icon: 'si si-netlify', color: '#53E0D7' },
      { name: 'Render', cat: 'Deployment', level: 80, icon: 'si si-render', color: '#D8B4FE' },
      { name: 'Docker', cat: 'Deployment', level: 60, icon: 'si si-docker', color: '#7CE7F3' }
    ]
  },

  // Projects Section Strings
  projects: {
    eyebrow: 'Work',
    icon: 'fa-solid fa-diagram-project',
    title: 'Featured Projects',
    subtitle: 'A selection of projects across AI tooling, full-stack apps, and platforms.',
    modalEyebrow: 'Project',
    techStackHeading: 'Technology Stack',
    architectureHeading: 'Architecture',
    architectureText: 'Client built with React and a component-driven architecture, communicating with a REST API backend, backed by a document/relational database depending on the project\'s data shape.',
    featuresHeading: 'Features',
    challengesHeading: 'Challenges Solved',
    lessonsHeading: 'Lessons Learned',
    galleryHeading: 'Gallery',
    projectsData: [
      {
        title: 'NeuroVault',
        img: images.projects.Neurovault_Dashboard,
        gallery: [
          images.projects.Neurovault_Dashboard,
          images.projects.Topic_section,
          images.projects.Folder_structure
        ],
        desc: 'A full-stack knowledge management platform that helps users organize notes, documents, and ideas in structured workspaces. It provides a clean and efficient way to manage personal knowledge with secure authentication and powerful organization features.',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
        features: [
          'Secure JWT authentication',
          'Create, edit, and delete notes',
          'Document upload and management',
          'Workspace organization',
          'Search and filtering',
          'Responsive dashboard',
          'Profile management'
        ],
        challenges: 'Designed a scalable backend architecture for managing user data, documents, and workspaces while implementing secure authentication, efficient database relationships, and a responsive user interface.',
        lessons: 'Strengthened my full-stack development skills by building a complete MERN application with authentication, CRUD operations, file management, state management, and responsive UI design.',
        links: { github: 'https://github.com/pritammondal-dev/NeuroVault', live: 'https://neuro-vault-liard.vercel.app' }
      },
      {
        title: 'Student Management System',
        img: images.projects.studentManagement,
        gallery: [
          images.projects.studentManagement,
          images.projects.neuroVaultDocs,
          images.projects.taskManager
        ],
        desc: 'A full-stack platform for schools to manage student records, attendance, grades, and communication in one dashboard.',
        tech: ['React', 'Express', 'MongoDB', 'JWT'],
        features: ['Role-based dashboards', 'Attendance & grade tracking', 'Real-time notices', 'Secure authentication'],
        challenges: 'Modeling a relational-style schema in MongoDB for students, classes, and grades while keeping queries fast and consistent.',
        lessons: 'Deepened my understanding of role-based access control and schema design trade-offs in NoSQL databases.',
        links: { github: '#', live: '#' }
      },
      {
        title: 'Portfolio Website',
        img: images.projects.portfolio,
        gallery: [
          images.projects.portfolio,
          images.projects.neuroVaultChat,
          images.projects.eCommerce
        ],
        desc: 'This very site — a premium, animated, glassmorphism portfolio built to showcase projects and skills.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        features: ['Aurora animated background', 'Glassmorphism UI system', 'Scroll-based reveal animations', 'Fully responsive layout'],
        challenges: 'Balancing rich motion design with performance, keeping animations smooth across devices without hurting load time.',
        lessons: 'Refined my eye for motion timing, easing curves, and building a cohesive design system from scratch.',
        links: { github: '#', live: '#' }
      },
      {
        title: 'E-Commerce Platform',
        img: images.projects.eCommerce,
        gallery: [
          images.projects.eCommerce,
          images.projects.neuroVaultDocs,
          images.projects.portfolio
        ],
        desc: 'A MERN-stack storefront with cart, checkout, and an admin dashboard for managing products and orders.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
        features: ['Product catalog & search', 'Cart & secure checkout', 'Order tracking', 'Admin analytics dashboard'],
        challenges: 'Implementing secure payment flows and keeping cart state in sync across sessions and devices.',
        lessons: 'Gained hands-on experience with payment gateway integration and state management at scale.',
        links: { github: '#', live: '#' }
      },
      {
        title: 'Task Manager',
        img: images.projects.taskManager,
        gallery: [
          images.projects.taskManager,
          images.projects.neuroVaultChat,
          images.projects.studentManagement
        ],
        desc: 'A Kanban-style task manager with drag-and-drop boards, deadlines, and team collaboration features.',
        tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
        features: ['Drag-and-drop boards', 'Real-time collaboration', 'Deadline reminders', 'Team workspaces'],
        challenges: 'Building smooth real-time sync between multiple users editing the same board without conflicting updates.',
        lessons: 'Learned to work with WebSockets for live collaboration and how to structure optimistic UI updates.',
        links: { github: '#', live: '#' }
      }
    ]
  },

  // Experience Section Strings
  experience: {
    eyebrow: 'Journey',
    icon: 'fa-solid fa-timeline',
    title: 'Experience & Journey',
    subtitle: 'A timeline of building, learning, and contributing.',
    timelineData: [
      { tag: 'Self-Learning', title: 'Started the MERN Stack journey', desc: 'Began learning HTML, CSS, and JavaScript fundamentals before moving into React and Node.js through project-based learning.' },
      { tag: 'Academic Project', title: 'Built college mini-projects', desc: 'Developed several academic projects during BCA coursework, applying database design and web fundamentals.' },
      { tag: 'Personal Project', title: 'Shipped first full-stack MERN app', desc: 'Designed, built, and deployed a complete MERN application end-to-end, from schema design to production deployment.' },
      { tag: 'Open Source', title: 'Started contributing to open source', desc: 'Made first contributions to open-source repositories, learning collaborative workflows with Git and GitHub.' },
      { tag: 'Freelancing', title: 'Took on freelance web projects', desc: 'Delivered small freelance websites and features for clients, focused on clean UI and reliable functionality.' },
      { tag: 'Generative AI', title: 'Diving into Generative AI development', desc: 'Currently exploring AI integration, embeddings, and building AI-powered features into full-stack applications.' }
    ]
  },

  // Services Section Strings
  services: {
    eyebrow: 'Services',
    icon: 'fa-solid fa-handshake',
    title: 'What I Can Do For You',
    subtitle: 'From idea to deployed product — frontend, backend, and everything between.',
    servicesData: [
      { icon: 'fa-solid fa-globe', title: 'Website Development', desc: 'Custom, responsive websites built from scratch with clean, maintainable code.' },
      { icon: 'fa-solid fa-layer-group', title: 'MERN Stack Development', desc: 'End-to-end web apps using MongoDB, Express, React, and Node.js.' },
      { icon: 'fa-solid fa-plug', title: 'REST API Development', desc: 'Well-documented, secure APIs designed for scalability and easy integration.' },
      { icon: 'fa-solid fa-server', title: 'Backend Development', desc: 'Robust backend systems with authentication, business logic, and data validation.' },
      { icon: 'fa-solid fa-paintbrush', title: 'Frontend Development', desc: 'Pixel-perfect, accessible interfaces built with React and modern CSS.' },
      { icon: 'fa-solid fa-database', title: 'Database Design', desc: 'Efficient schema design across SQL and NoSQL databases for real-world scale.' },
      { icon: 'fa-solid fa-brain', title: 'AI Integration', desc: 'Adding AI-powered features like chat, search, and automation into products.' },
      { icon: 'fa-solid fa-wrench', title: 'Maintenance', desc: 'Ongoing support, bug fixes, and performance improvements for live projects.' }
    ]
  },

  // Achievements Section Strings
  achievements: {
    eyebrow: 'Achievements',
    icon: 'fa-solid fa-trophy',
    title: 'Stats & Recognition',
    subtitle: 'Certificates, contributions, and coding activity.',
    achievementsData: [
      { target: 6, suffix: '', label: 'Certificates', icon: 'fa-solid fa-certificate' },
      { target: 30, suffix: '+', label: 'GitHub Repos', icon: 'fa-brands fa-github' },
      { target: 900, suffix: '+', label: 'Contributions', icon: 'fa-solid fa-code-branch' },
      { target: 4, suffix: '', label: 'Hackathons', icon: 'fa-solid fa-trophy' }
    ],
    profileStats: [
      { name: 'GitHub', stat: '30+ repositories · active contributor', icon: 'fa-brands fa-github' },
      { name: 'LeetCode', stat: '200+ problems solved', icon: 'fa-solid fa-code' },
      { name: 'LinkedIn', stat: 'Full-Stack & AI Developer', icon: 'fa-brands fa-linkedin-in' }
    ]
  },

  // Contact Section Strings
  contact: {
    eyebrow: 'Contact',
    icon: 'fa-solid fa-comments',
    title: 'Let\'s Build Something',
    subtitle: 'Have a project in mind or just want to say hi? My inbox is open.',
    availabilityLabel: 'Availability',
    availabilityStatus: 'Open to opportunities',
    fields: {
      name: { label: 'Name', placeholder: 'Your name' },
      email: { label: 'Email', placeholder: 'you@example.com' },
      subject: { label: 'Subject', placeholder: 'What\'s this about?' },
      message: { label: 'Message', placeholder: 'Tell me about your project...' }
    },
    validation: {
      nameRequired: 'Please enter your name.',
      nameLength: 'Name must be between 2 and 50 characters.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      emailPlaceholder: 'Please use your real email address.',
      subjectRequired: 'Please enter a subject.',
      subjectLength: 'Subject must be at least 5 characters.',
      messageRequired: 'Please enter a message.',
      messageLength: 'Message must be between 15 and 1000 characters.'
    },
    messages: {
      success: 'Thank you! Your message has been sent successfully.',
      error: 'Something went wrong. Please try again later.'
    }
  },

  // Footer Section
  footer: {
    copyrightTemplate: '© 2026 {name}. Built with React, Tailwind & a lot of coffee.',
    allowedPlatforms: ['GitHub', 'LinkedIn', 'X (Twitter)']
  }
};
