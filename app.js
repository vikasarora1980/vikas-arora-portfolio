import { useState, useRef, useEffect } from 'react';
import {
  Briefcase,
  Code,
  Award,
  Book,
  Mail,
  Linkedin,
  Github,
  Phone,
  ArrowUp,
  User,
  Star,
  Zap,
  LayoutGrid,
  MapPin,
  Heart,
  Music,
  Bike,
  Users,
  ChevronDown,
  Projector,
  MessageCircle,
  Zap as ZapIcon // Renamed to avoid conflict
} from 'lucide-react';

const portfolioData = {
  name: "Vikas Arora",
  tagline: "Executive Director | Marketing and Loyalty technologies | NAB",
  location: "Greater Melbourne Area",
  summary: `Proficient Data Engineering Manager with 22 years of technology experience across Telecom, Banking and Consulting domain. Key focus on Marketing Technologies (Martech) with Snowflake, Postgres, Airflow, DBT and AWS. Squad leadership for 25 team members. Certified AWS/Azure Solutions Architect with a background in DevOps, CI/CD, Multi-Cloud, CRM, BSS/OSS and Order Management. Strong technical and people leadership skills managing scaled agile deliveries and platform teams in multi-cultural setups. Extensive experience in Automation, DevOps/CI-CD and Multi-Cloud Platforms.`,
  aboutMe: `I am a seasoned Engineering Leader with over two decades of experience, currently heading a global team for Marketing and Loyalty at NAB, one of Australia's Big 4 banks. My journey has been defined by a passion for solving complex problems and delivering transformative outcomes across the Telecom, Banking, and Consulting sectors. I have a strong background in Data, GenAI, Microservices, and Platform engineering, and have successfully led large-scale application implementations, championed automation and DevOps practices that deliver significant value. Over the last 6 months, I have been specifically accountable for building and scaling international teams in Australia and India. My deep passion for GenAI is backed by my recent certifications, including the GenAI Ethics program from Melbourne University and the Generative AI Mastermind certification from Outskill.`,
  contact: {
    phone: "+919717040196 / +61435054734",
    email: "vikasarora1980@gmail.com",
    linkedin: "http://in.linkedin.com/in/vikasarora123",
    github: "http://github.com/viksasarora1980"
  },
  skills: [
    { name: "Technical Management", icon: Briefcase },
    { name: "Solution Architecture", icon: LayoutGrid },
    { name: "Data Platforms", icon: ZapIcon },
    { name: "DevOps & CI/CD", icon: Code },
    { name: "Cloud Technologies", icon: Star },
    { name: "Project Management", icon: Award }
  ],
  experience: [
    {
      title: "Data Engineering Manager – Martech Platforms",
      company: "National Australia Bank (NAB)",
      period: "Sep 2021 – Present",
      achievements: [
        "Setup MADI (Marketing Application Data Integrator) using Snowflake/Postgres, Airflow, DBT and AWS services.",
        "Completed remediation of 13 legacy Salesforce Marketing Cloud instances into a single unified instance.",
        "Successfully delivered a $7M remediation project within cost and timelines, completing 80% in the last 5 months.",
        "Managed a squad of 25 team members across NAB Australia, NAB India, and offshore consultants."
      ]
    },
    {
      title: "Engineering Manager – NAB Salesforce CRM Platforms",
      company: "National Australia Bank (NAB)",
      period: "Feb 2020 – Sep 2021",
      achievements: [
        "Managed enhancements and support for Strategic/Legacy Salesforce CRM/Marketing Applications.",
        "Managed CI/CD DevOps/Automation of Salesforce delivery processes using Jenkins, Docker, Ansible, and GITLab over AWS Infrastructure.",
        "Hired for DevOps Management and took on additional EM responsibilities, ensuring platform stability."
      ]
    },
    {
      title: "Data Automation Specialist",
      company: "NBN Co",
      period: "Sep 2019 – Feb 2020",
      achievements: [
        "Automated key NBN processes around Workflow Management and ServiceNow in less than 3 months, now widely used across the enterprise."
      ]
    },
    {
      title: "DevOps/Automation Lead (Solution Architect/Technical Manager)",
      company: "Telstra (460)",
      period: "Mar 2019 – Sep 2019",
      achievements: [
        "Implemented an end-to-end CI/CD platform that projected savings of 13 million AUD over 5 years.",
        "Finalist in the Telecom World Awards for the work on the CI/CD platform."
      ]
    },
    {
      title: "Solution Architect/Technical Manager",
      company: "Telstra (TechM)",
      period: "Jul 2018 – Mar 2019",
      achievements: [
        "Built an ETL framework to analyze Telstra’s O2A and U2C stacks for service/billing misalignments.",
        "Implemented a BSS/OSS Remediation solution in a complex ecosystem with weekly releases."
      ]
    },
    {
      title: "Head – ITE (Infrastructure, Technology and Engineering) India",
      company: "Orange France Group",
      period: "Apr 2016 – Jul 2018",
      achievements: [
        "Led software, automation, and engineering initiatives for the global ITE function (team of 48).",
        "Saved 40% worth of manual efforts (~160K Euros YOY) through CI/CD/Automation for NFVi Platforms.",
        "Migration to Windows 10 using a home-grown solution saving ~1.5 million Euros over 5 years."
      ]
    },
    {
      title: "Oracle Siebel Design and Delivery Management",
      company: "Colt Technologies",
      period: "Jan 2006 – Apr 2016",
      achievements: [
        "Orchestrated the implementation of a 20M Euro CRM/Order Management System.",
        "Strategized CI/CD for the Oracle Siebel Platform, saving ~75K Euros YOY with zero major incidents.",
        "Reduced MTTR by over 300% and outstanding incidents by 600% in 6 months."
      ]
    },
    {
      title: "Assistant Manager – IT",
      company: "Spice Communications",
      period: "Oct 2002 – Jan 2006",
      achievements: [
        "Handled new product feature implementations for Postpaid and prepaid customers.",
        "Received 'Achiever of the year award' for exceptional performance in New Product Implementations."
      ]
    }
  ],
  projects: [
    {
      title: "Global CRM/Order Management System",
      description: "Orchestrated a large-scale project implementation for a 20M Euro CRM/Order Management System. Coordinated an 80-member team across multiple sites, focusing on business continuity and disaster recovery.",
      link: "#"
    },
    {
      title: "Automated CI/CD Platform Implementation",
      description: "Led the end-to-end implementation of a CI/CD platform for a large telecom company. Achieved projected savings of 13 million AUD over five years and was a finalist for a global industry award.",
      link: "#"
    },
    {
      title: "Windows 10 Migration Portal",
      description: "Developed and deployed a home-grown self-service portal for a company-wide Windows 10 migration, resulting in projected savings of 1.5 million Euros over five years.",
      link: "#"
    },
    {
      title: "BSS/OSS Remediation & ETL Framework",
      description: "Built an ETL framework to analyze and resolve service/billing misalignments across a complex telecom ecosystem. Enabled weekly releases and improved billing accuracy.",
      link: "#"
    }
  ],
  testimonials: [
    {
      quote: "Vikas is a very intelligent, supportive and team orientated individual who always has time for his team, supporting them on a daily basis from day to day tasks to big assignments. Vikas I have found is very approachable and always willing to help or listen to anything that is going on in the project but on a personal level too. He has done an amazing job in being the overall team manager for the project but also for supporting and assisting everyone to make the project a great success. I hope I have the pleasure of working with Vikas again in the future as he is a great man, both professionally and personally!",
      name: "Eugene Neborak",
      title: "Salesforce Marketing Cloud Solution Architect"
    },
    {
      quote: "Vikas was my manager at Colt for a period of 4 years from 2012-16 that I consider a golden period of my professional life. He was based out of Gurugram (Gurgaon) and I was in Bengaluru. A truly hard working, meticulous, perseverant and a dedicated person - one of the kind who is very rare to find. I was amazed with his working style managing business, onshore counterparts, internal development team and vendor partners with elan to deliver such a complex transformation programme. Any Organisation that he works is truly lucky to have him because anything that is assigned is taken to completion seamlessly.",
      name: "Ravikiran M J",
      title: "Sr. Solution Architect at Tecnotree Corporation"
    },
    {
      quote: "A brilliant and dedicated Problem Solver. Delivers with impeccable quality and is also a very good person!",
      name: "Ned Johnson",
      title: "Management Consulting"
    },
    {
      quote: "The rare combination of being able to deliver value within the ambiguity, communicate complex and highly technical thoughts in an articulate and succinct way, all while exercising great humility, made Vikas a highly sought-after automation expert. It was an absolute privilege to work with Vikas, and I have no doubt he will bring great value to any future role.",
      name: "Tim Hou",
      title: "Manager, Strategy & Improvement at nbn™ Australia"
    },
    {
      quote: "I hired and managed Vikas directly during 2+ years. At that time, I had a department in New Delhi while I was based out of France so I needed a local relay. Vikas was a lucky catch and consistently exceeded my expectations. Impeccable ethics, fast learner, strong ability to network and results oriented with a taste for details: Vikas was instrumental in stabilizing and developing the business. I definitely recommend Vikas and will work with him (or hire him) again in the blink of an eye!",
      name: "Nicolas Homo",
      title: "Department Director at Orange"
    },
    {
      quote: "Having worked with Vikas for 8 years I can undoubtedly say that he is a true leader & an excellent person to work with. He has a keen and uncommon ability to analyse situations and problems and come up with solutions, his strong technical skills makes him one among the rare breed of effective managers and one of the Best IT leader I have ever come across. He is a true gentleman, a great people manager and one of the most humble & genuine person I have known for a long time. As a team member, Vikas earns my highest recommendation.",
      name: "Kaushiki Shamsha Singh",
      title: "Engineering Leader"
    },
    {
      quote: "Vikas is a talented, hard-working professional with excellent technical & management skills. In my time managing Vikas at COLT he was quickly selected from amongst his peers to manage the team based on the above attributes as well as a willingness to take on new challenges and 'get the job done'. I cannot recommend Vikas highly enough.",
      name: "JP Sampson",
      title: "Product Strategy, Project Execution"
    }
  ],
  education: [
    {
      degree: "B-Tech (Comp. Sci. And Engg.)",
      institution: "National Institute of Technology (NIT)",
      period: "1998-2002"
    },
    {
      degree: "EGBMP (Executive Global Business Management Program)",
      institution: "Indian Institute of Management (IIM)",
      period: "2010-2011"
    },
    {
      degree: "PGDBA (MBA)",
      institution: "Symbiosis Center for Distance Learning (SCDL)",
      period: "2004-2006"
    },
    {
      degree: "1 year Data Science Capstone Specialization",
      institution: "John Hopkins University, US"
    }
  ],
  certifications: [
    "Certified AWS Solution Architect Associate",
    "Azure Practitioner (AZ 900)",
    "Azure Data (DP-900)",
    "Azure Solution Architect (AZ 303)",
    "CSM Certified from Scrum Alliance",
    "PMP Certified - Project Management Institute (PMI)",
    "ITIL V3 Foundation and Intermediate"
  ],
  interests: [
    { name: "Running Marathons", icon: Heart },
    { name: "Cycling", icon: Bike },
    { name: "Spending time with Friends/Family", icon: Users },
    { name: "Listening Music", icon: Music },
  ]
};

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const sectionsRef = useRef({});

  const scrollToSection = (sectionId) => {
    sectionsRef.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const SectionHeader = ({ id, title, icon: Icon }) => (
    <div
      id={id}
      ref={(el) => (sectionsRef.current[id] = el)}
      className="flex items-center space-x-3 mb-6 scroll-mt-20"
    >
      <Icon className="text-blue-400 h-6 w-6" />
      <h2 className="text-3xl font-bold text-gray-100">{title}</h2>
    </div>
  );

  const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg rounded-b-xl p-4 transition-all duration-300 transform md:translate-y-0">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-50 truncate">
              {portfolioData.name}
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavItem sectionId="about" label="About Me" />
            <NavItem sectionId="experience" label="Experience" />
            <NavItem sectionId="projects" label="Projects" />
            <NavItem sectionId="testimonials" label="Testimonials" />
            <NavItem sectionId="skills" label="Skills" />
            <NavItem sectionId="education" label="Education" />
            <NavItem sectionId="contact" label="Contact" />
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </nav>
    );
  };

  const NavItem = ({ sectionId, label }) => (
    <button
      onClick={() => scrollToSection(sectionId)}
      className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 font-semibold ${
        activeSection === sectionId ? 'text-blue-400' : ''
      }`}
    >
      {label}
    </button>
  );

  const HeroSection = () => (
    <section className="bg-gray-800 text-gray-100 py-24 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Profile Image */}
        <div className="mb-6 animate-fade-in-up animate-delay-200">
          <img
            src="http://googleusercontent.com/file_content/1"
            alt="Vikas Arora"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-white animate-fade-in-up">
          {portfolioData.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-300 animate-fade-in-up animate-delay-200">
          {portfolioData.tagline}
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-400 mb-8 animate-fade-in-up animate-delay-400">
          <MapPin className="inline-block h-5 w-5 mr-2 text-blue-400" />
          {portfolioData.location}
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://placehold.co/1920x1080/0d1217/ffffff?text=Background)'}}></div>
    </section>
  );

  const AboutMeSection = () => (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader id="about-section" title="About Me" icon={User} />
        <p className="text-lg text-gray-300 leading-relaxed font-light">{portfolioData.aboutMe}</p>
      </div>
    </section>
  );

  const ExperienceSection = () => (
    <section id="experience" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionHeader id="experience-section" title="Experience" icon={Briefcase} />
        <div className="relative">
          <div className="absolute left-3 md:left-1/2 -ml-1 w-0.5 bg-gray-700 h-full"></div>
          {portfolioData.experience.map((job, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-between items-start mb-12 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-500 rounded-full p-2 mr-4">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">{job.title}</h3>
                      <p className="text-md text-gray-400 font-medium">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.period}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`absolute left-0 md:left-1/2 top-4 -ml-4 w-8 h-8 rounded-full bg-gray-800 border-2 border-blue-500 flex items-center justify-center z-10 ${
                  index % 2 === 0 ? 'md:left-1/2 md:-mr-4 md:ml-0' : ''
                }`}
              >
                <ChevronDown className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader id="projects-section" title="Key Projects" icon={Projector} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TestimonialsSection = () => (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionHeader id="testimonials-section" title="Testimonials" icon={MessageCircle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
              <p className="text-xl italic text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const SkillsSection = () => (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader id="skills-section" title="Core Skills & Expertise" icon={Code} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex items-center space-x-4 transition-transform transform hover:scale-105"
            >
              <skill.icon className="text-blue-400 h-8 w-8 flex-shrink-0" />
              <p className="text-lg font-semibold text-gray-100">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            Strong framework knowledge of TOGAF, Scrum, PMBOK, DevOps, TMForum, ETSI, ITIL with industry certifications.
          </p>
        </div>
      </div>
    </section>
  );

  const EducationSection = () => (
    <section id="education" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionHeader id="education-section" title="Education & Certifications" icon={Book} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Education</h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-200">{edu.degree}</h4>
                  <p className="text-md text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Certifications</h3>
            <div className="space-y-4">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
                  <Award className="text-blue-400 h-6 w-6 flex-shrink-0" />
                  <p className="text-md font-medium text-gray-200">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const InterestsSection = () => (
    <section id="interests" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader id="interests-section" title="Interests" icon={Heart} />
        <div className="flex flex-wrap gap-4 justify-center">
          {portfolioData.interests.map((interest, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-full shadow-lg border border-gray-700 flex items-center space-x-3 transition-transform transform hover:scale-110"
            >
              <interest.icon className="text-blue-400 h-6 w-6" />
              <span className="text-gray-200 font-medium whitespace-nowrap">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <SectionHeader id="contact-section" title="Contact Me" icon={Mail} />
        <p className="text-lg text-gray-300 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to connect with me.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium text-gray-300">
          <a
            href={`tel:${portfolioData.contact.phone}`}
            className="flex items-center hover:text-blue-400 transition-colors duration-300"
          >
            <Phone className="h-5 w-5 mr-2" />
            {portfolioData.contact.phone}
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="flex items-center hover:text-blue-400 transition-colors duration-300"
          >
            <Mail className="h-5 w-5 mr-2" />
            {portfolioData.contact.email}
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6" />
            LinkedIn Profile
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-400 transition-colors duration-300"
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-800 text-gray-500 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );

  const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } focus:outline-none focus:ring-2 focus:ring-blue-400`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 font-sans leading-relaxed">
      <script src="https://cdn.tailwindcss.com"></script>
      <Navbar />
      <HeroSection />

      <main>
        <div className="container mx-auto px-6">
          <AboutMeSection />
          <ExperienceSection />
          <ProjectsSection />
          <TestimonialsSection />
          <SkillsSection />
          <EducationSection />
          <InterestsSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
      <BackToTopButton />

      <style>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #1a202c;
          color: #e2e8f0;
          line-height: 1.6;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default App;
