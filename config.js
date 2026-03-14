import { FaDiscord, FaGithub, FaMapPin, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase, HiChip, HiCog } from "react-icons/hi";

export const config = {
    developer: {
        name: "Vinay N",
        title: "Embedded Systems Engineer — AI/ML Integration",
        username: "VINNU",
        location: "Bengaluru, India",
        bio: "I'm an Embedded Systems Engineer who bridges hardware and AI — from writing Verilog HDL for FPGAs to deploying real-time ML on Raspberry Pi. I built a sub-second drowsiness detection system and currently work as a Prompt Engineer on a HIPAA-compliant healthcare AI chatbot, improving resolution rates by 50–80%. MathWorks-certified, IEEE-active, and always building something.",
        currentlyLearning: ["Machine Learning", "Generative AI", "Full-Stack Web Dev"],
        funFact: "Loves gaming (Valorant 🎮) and building model kits 🚀",
        status: "🎯 Focusing"
    },
    social: {
        github: "x-vinay-x",
        linkedin: "vinay-nece",
        email: "vinevinayn@gmail.com",
        phone: "+91-9901090656",
        portfolio: "https://portfolio-vinayn.netlify.app/"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Driver Drowsiness Detection",
            description: "Real-time hardware-integrated fatigue detection using Raspberry Pi for ML inference and Arduino for alert actuation (buzzer/LED) with GSM module. Implemented computer vision-based eye state detection delivering sub-second drowsiness alerts in low-light embedded conditions.",
            image: "/projects/Project 1.jpg",
            technologies: ["Raspberry Pi", "Arduino", "Python", "OpenCV", "ML"],
            github: "https://github.com/x-vinay-x/ML-Projects/tree/main/Driver%20drowsiness%20using%20Hardware",
            demo: "",
            year: "2024–2025",
            highlight: "Selected as final year project"
        },
        {
            id: 2,
            title: "Air Pollution Monitoring System",
            description: "Real-time IoT system using ESP8266 with DHT11 and MQ2 sensors, OLED display, and ThingSpeak cloud for live remote data logging over Wi-Fi using I2C communication.",
            image: "/projects/project 2.webp",
            technologies: ["ESP8266", "C++", "DHT11", "MQ2", "ThingSpeak", "Arduino IDE"],
            github: "https://github.com/x-vinay-x/Air-Pollution-Monitoring-System-",
            demo: "",
            year: "2025"
        },
        {
            id: 3,
            title: "Traffic Light Controller – FPGA",
            description: "6-state FSM-based traffic controller in Verilog HDL with 3-bit signal encoding and synchronous counter timing (7s Green, 2s Yellow, 3s Side). Synthesized and verified on Spartan Series FPGA.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=center",
            technologies: ["Verilog HDL", "Xilinx Vivado", "ModelSim", "FPGA Spartan"],
            github: "https://github.com/x-vinay-x/Traffic-Light-Controller-using-Verilog",
            demo: "",
            year: "2025"
        },
        {
            id: 4,
            title: "ML Projects Collection",
            description: "Collection of ML projects showcasing predictive modeling, data-driven insights, and intelligent automation.",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&crop=center",
            technologies: ["Python", "Jupyter Notebook", "Machine Learning"],
            github: "https://github.com/x-vinay-x/ML-Projects",
            demo: ""
        }
    ],
    skills: [
        {
            title: "Frontend & Web Development",
            icon: <HiCode />,
            description: "Web Technologies & UI Development",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "HTML", level: "Advanced", hot: true },
                { name: "CSS", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Bootstrap", level: "Intermediate" },
                { name: "Netlify", level: "Intermediate" }
            ]
        },
        {
            title: "Embedded & Hardware",
            icon: <HiChip />,
            description: "Hardware Design & Embedded Systems",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Arduino", level: "Expert", hot: true },
                { name: "Raspberry Pi", level: "Advanced" },
                { name: "ESP8266", level: "Advanced", hot: true },
                { name: "Verilog HDL", level: "Advanced" },
                { name: "FPGA Spartan", level: "Intermediate" },
                { name: "Xilinx Vivado", level: "Advanced" },
                { name: "ModelSim", level: "Advanced" },
                { name: "Arduino IDE", level: "Expert" }
            ]
        },
        {
            title: "AI / ML & Data Science",
            icon: <HiDatabase />,
            description: "Machine Learning & AI Development",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            skills: [
                { name: "Python", level: "Advanced", hot: true },
                { name: "OpenCV", level: "Advanced" },
                { name: "scikit-learn", level: "Advanced" },
                { name: "Keras", level: "Intermediate" },
                { name: "TensorFlow", level: "Intermediate", hot: true },
                { name: "NumPy", level: "Advanced" },
                { name: "Pandas", level: "Advanced" },
                { name: "Matplotlib", level: "Advanced" },
                { name: "SciPy", level: "Intermediate" }
            ]
        },
        {
            title: "Prompt Engineering & LLM",
            icon: <HiCog />,
            description: "Language Models & AI Operations",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "LangChain", level: "Advanced", hot: true },
                { name: "RAG", level: "Advanced" },
                { name: "NLP", level: "Advanced" },
                { name: "Generative AI", level: "Advanced", hot: true },
                { name: "LLM Operations", level: "Advanced" }
            ]
        },
        {
            title: "IoT & Cloud Platforms",
            icon: <HiCube />,
            description: "IoT Systems & Cloud Integration",
            bgClass: "bg-red-500/10",
            iconClass: "text-red-500",
            skills: [
                { name: "ThingSpeak IoT Cloud", level: "Advanced", hot: true },
                { name: "Firebase", level: "Intermediate" },
                { name: "I2C Communication", level: "Advanced" },
                { name: "GSM Module", level: "Advanced" },
                { name: "Serial Communication", level: "Advanced" },
                { name: "Wi-Fi (ESP8266)", level: "Advanced" }
            ]
        },
        {
            title: "Programming Languages",
            icon: <HiCode />,
            description: "Core Programming Skills",
            bgClass: "bg-indigo-500/10",
            iconClass: "text-indigo-500",
            skills: [
                { name: "C", level: "Advanced" },
                { name: "C++", level: "Advanced" },
                { name: "Python", level: "Advanced", hot: true },
                { name: "MATLAB", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
                { name: "HTML", level: "Advanced" },
                { name: "CSS", level: "Advanced" }
            ]
        },
        {
            title: "Tools & DevOps",
            icon: <HiCube />,
            description: "Development Tools & Platforms",
            bgClass: "bg-teal-500/10",
            iconClass: "text-teal-500",
            skills: [
                { name: "Git", level: "Advanced", hot: true },
                { name: "GitHub", level: "Advanced" },
                { name: "Linux", level: "Advanced" },
                { name: "VS Code", level: "Expert", hot: true },
                { name: "MATLAB", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "AI Operator / Prompt Engineer",
            company: "xTransMatrix",
            period: "Sept 2025 – Present",
            location: "Bengaluru",
            description: "Optimizing EVA, a healthcare AI chatbot handling medical benefits, prescriptions, and Medicare inquiries — achieving 50-80% resolution rate improvement through strategic prompt engineering.",
            responsibilities: [
                "Designed prompt frameworks from greetings to complex benefits documentation, including elderly-care prompts simplifying Medicare explanations while maintaining strict HIPAA compliance",
                "Monitored 100+ daily AI interactions, performing quality benchmarking, edge case identification, and structured data annotation"
            ],
            technologies: ["LLM Operations", "Prompt Engineering", "Healthcare AI", "HIPAA Compliance", "Data Annotation"]
        },
        {
            position: "Digital Electronics & VLSI Intern",
            company: "Codec Technologies Pvt. Ltd.",
            period: "Sept 2025 – Oct 2025",
            location: "Bengaluru (AICTE Approved)",
            description: "Developed Verilog HDL-based digital design modules for digital circuits and gained exposure to VLSI SoC design workflows.",
            responsibilities: [
                "Developed 5+ Verilog HDL modules resulting in a 15% reduction in circuit latency during simulation testing.",
                "Gained exposure to industry-standard VLSI SoC design verification workflows using Xilinx Vivado and ModelSim."
            ],
            technologies: ["Verilog HDL", "Digital Design", "VLSI", "Xilinx Vivado", "ModelSim"]
        },
        {
            position: "AI Machine Learning Engineer",
            company: "Rooman Technologies Pvt. Ltd.",
            period: "Sept 2024 – Feb 2025",
            location: "Bengaluru (VTU Facilitated)",
            description: "Completed 480-hour structured AI/ML program with NASSCOM, IBM, Skill India, NSDC, and Wadhwani Foundation. Earned NASSCOM certification at NSQF Level 5, Grade B.",
            responsibilities: [
                "Earned NASSCOM certification at NSQF Level 5, Grade B — trained in ML algorithms, neural networks, and practical AI engineering"
            ],
            technologies: ["Machine Learning", "Neural Networks", "AI Engineering", "Python", "Data Science"]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@x-vinay-x",
            link: `https://github.com/x-vinay-x`
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "vinay-nece",
            link: "https://linkedin.com/in/vinay-nece"
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "vinevinayn@gmail.com",
            link: "mailto:vinevinayn@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+91-9901090656",
            link: "tel:+91-9901090656"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bengaluru, India",
            link: "https://maps.google.com/?q=Bengaluru,India"
        }
    ],
    certifications: [
        {
            title: "NASSCOM AI ML Engineer",
            issuer: "NASSCOM",
            details: "NSQF Level 5, Grade B | 480hrs | IBM, Skill India, NSDC, Wadhwani Foundation",
            date: "Apr 2025"
        },
        {
            title: "VLSI System On Chip Design",
            issuer: "Industry Certification",
            date: "Sept 2025"
        },
        {
            title: "Image Processing Onramp",
            issuer: "MathWorks (Official)",
            date: "Aug 2023"
        },
        {
            title: "Electric Vehicle Technology",
            issuer: "Kodacy in association with SPACE",
            date: "Nov 2023"
        }
    ],
    activities: [
        {
            title: "IEEE Bharat 6G Summit",
            role: "Participant",
            organization: "IEEE ComSoC & Signal Processing Bangalore Chapter, IISc Bangalore",
            date: "July 2023"
        },
        {
            title: "IEEE SPS Workshop: Image Processing & Object Detection",
            role: "Participant",
            organization: "IEEE Signal Processing Society, RNSIT Bengaluru",
            date: "May 2024"
        },
        {
            title: "Agentic AI Day Hackathon",
            role: "Volunteer",
            organization: "Google & Hack2Skill, 30-hour hackathon",
            date: "2024"
        }
    ],
    education: {
        degree: "B.E. – Electronics and Communication Engineering",
        institution: "Sri Venkateshwara College of Engineering (NBA Accredited)",
        location: "Bengaluru",
        duration: "2021 – 2025",
        cgpa: "7.90 / 10"
    }
}