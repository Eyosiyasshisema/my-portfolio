import { useState, useEffect, useRef } from 'react';

// Inline SVG icons to avoid external dependencies
const GitHubIcon = ({ size = 24, className }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height={size} width={size} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M165.9 397.4c0 2-2.3 3.5-5.6 3.5-3.1 0-5.4-1.5-5.4-3.5 0-2.1 2.3-3.7 5.6-3.7 3.3.1 5.4 1.7 5.4 3.7zm-2.3 43.1c.1 2.1-1.9 3.9-4.8 3.9-2.7 0-4.9-1.8-4.9-3.9 0-2.1 2-3.9 4.8-3.9 2.9 0 4.9 1.8 4.9 3.9zm-8.8-16.7c-.1 2.3-4.4 3.9-7.2 3.9-2.9 0-5.2-1.8-5.2-4 0-2.1 2.3-4.1 5.2-4.1 2.8.1 7.2 1.8 7.2 4.2zm-12.8-1.5c.2 2.6-6.1 4.2-9.4 4.2-3.3 0-5.9-1.8-5.9-4.3 0-2.4 2.6-4.2 5.9-4.2 3.3-.1 9.4 1.6 9.4 4.3zm-17.5-2.8c.2 2.8-7.7 4.7-11.8 4.7-4.1 0-7.3-2-7.3-4.7 0-2.5 3.2-4.5 7.3-4.5 4.1-.1 11.8 1.8 11.8 4.5zm-19.1-1.7c.3 3.1-9.2 5.2-14.1 5.2-4.8 0-8.6-2.3-8.6-5.2 0-2.8 3.8-5.2 8.6-5.2 4.9.1 14.1 2.2 14.1 5.2zm-28.7-1.1c.5 3.5-12.1 6.2-19.2 6.2-7.2 0-13.4-2.8-13.4-6.2 0-3.5 6.3-6.2 13.4-6.2 7.1-.1 19.2 2.6 19.2 6.2zm288.7-27.8v-115.1c0-11.2-1.3-23.7-25.1-23.7-17.2 0-21.3 12.8-21.3 22.1v116.7c0 10.3 7.8 19.6 17.5 19.6h.4c9.9 0 16.9-9.3 16.9-19.6zm-171.6-135c-.1 3-3.3 5.7-7.8 5.7-4.4 0-7.7-2.8-7.7-5.7 0-3 3.3-5.7 7.7-5.7 4.5 0 7.8 2.7 7.8 5.7zM381 21c-26.6-4-53.7 1-79.9 14.6-25.6 13.2-46.7 33.3-61.9 57.2-22.1 35.8-31.1 82.5-31.1 127.3 0 119.5 75.6 179.9 184.2 179.9 104.9 0 157.9-63.5 157.9-173.3 0-66.3-30.8-111.4-82.6-127.1-1.8-.6-3.7-.9-5.5-1-1.9-.2-3.8-.3-5.7-.2-1.5.1-3 .3-4.5.5-2.6.4-5.1 1-7.6 1.9-5.1 2-9.9 4.6-14.2 7.8-10.7 8-15.3 11.2-19.1 12.9-10.3 4.4-15.6 11.2-15.6 21.6 0 9.1 5.3 16 16.4 17.9 11.1 1.9 15.6 5.8 15.6 12.7 0 5.2-1.8 9.3-5.3 12.9-3.7 4-8.8 6.7-15.3 8.3-6.6 1.6-14.3 2.5-23.2 2.5-12.8 0-24.8-2.6-35.9-7.8-11.4-5.4-21.2-13.6-28.7-24.3-17.7-25-27.1-59.5-27.1-99.2 0-25.2 5.5-47.5 16.3-65.7 10.9-18.4 25.5-31.6 42.7-39.7 17.2-8.3 35.3-11.5 53.6-9.9 22.8 2 40.5 11.6 52.8 29.8 1.1 1.6 2.3 3.3 3.4 5.1-1.6 4.9-2.6 10.3-2.6 16.5 0 9 2.5 17.3 7.5 24.3 5.1 7.1 12.4 12.1 21.3 14.5 8.9 2.4 17.5 2.1 25.4-1.3 7.8-3.3 13.9-8.4 17.7-15.1 4.5-8.3 6.8-18.2 6.8-29.6 0-14-3.5-27-10.4-38.3zm19.3-5.5c-4.3 3.3-8.8 7.3-13.6 12-14.8 14.5-24.6 30.6-29.5 48.4-4.8 17.8-5.1 36.3-1.1 55.4 4.1 19.1 13.1 37 26.6 51.5 13.5 14.5 30.7 25.4 50.1 31.8 19.3 6.4 39.4 8.2 59.5 5.3 20.3-2.9 39.4-11.8 55.3-26.6 16.1-15 28.3-33 36-53.5 7.7-20.5 10.6-42.3 8.8-64.1-1.8-22-8.8-43.1-21-61.6-12.1-18.5-28.4-33.5-48.4-44.8-20-11.2-42.5-17.1-66.4-16.7-24.5.4-47.7 7.2-69 20.4zm-143 5.4c-3.1 1.5-6.1 3.5-8.9 5.8-2.6 2.2-4.9 4.7-7 7.5-2.2 2.8-4.2 5.8-5.9 9-1.9 3.2-3.5 6.7-4.8 10.4-1.3 3.7-2.1 7.7-2.6 11.9-.5 4.3-.6 8.7-.3 13.2.3 4.5.9 9.1 1.9 13.8 1 4.8 2.5 9.7 4.5 14.8 2.1 5.2 4.6 10.5 7.6 16.1 3.1 5.5 6.6 11.2 10.4 17.1 3.8 5.8 7.9 11.8 12.3 18.2 4.4 6.4 9.1 13 14 20-5.1-4.7-10.4-9.6-15.8-14.7-5.5-5.1-10.9-10.5-16.2-16-5.3-5.5-10.5-11.3-15.4-17.2-4.9-6-9.5-12.2-13.7-18.7-4.2-6.5-7.9-13.3-11.3-20.2-3.2-6.9-6-14-8.2-21.4-2.2-7.4-3.8-15.1-4.8-23.1-1-8-.9-16.1-.1-24.2.7-8.1 2.3-16.2 4.8-24.2 2.5-8.1 5.8-16 10.1-23.6 4.2-7.6 9.3-14.9 15.3-21.8 6-7 12.8-13.5 20.2-19.4 7.4-5.9 15.5-11.3 24.3-16.1 8.8-4.8 18.2-9.1 28.2-12.9 9.8-3.7 20.4-7 31.6-9.9 11.3-2.9 22.9-4.7 35.1-5.3h-.7l-.1-.4-2-.1c-13.3.4-26.7 2.4-39.7 5.9-13.1 3.5-25.5 8.7-37.1 15.5-11.4 6.9-21.7 15-30.7 24.5-9.1 9.5-16.8 20.4-22.9 32.4-6.2 12-10.8 25.1-13.8 39z"></path>
  </svg>
);

const LinkedInIcon = ({ size = 24, className }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={size} width={size} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-0.7-79.2-48.34-79.2-48.33 0-55.67 37.7-55.67 76.7v148.1h-92.7V148.9h89.01v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
  </svg>
);

const XTwitterIcon = ({ size = 24, className }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={size} width={size} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.7L136.9 88.1H92.7L364.4 421.8z"></path>
  </svg>
);

const EnvelopeIcon = ({ size = 24, className }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={size} width={size} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M502.3 190.5C502.3 85.31 417 0 311.8 0H200.2C95.04 0 92.42 85.31 92.42 190.5V321.5C92.42 426.7 177.7 512 282.9 512H394.5C499.7 512 502.3 426.7 502.3 321.5V190.5zM256 352C216.4 352 184 319.6 184 280C184 240.4 216.4 208 256 208C295.6 208 328 240.4 328 280C328 319.6 295.6 352 256 352zM432 208C448.2 208 461.3 221.1 461.3 237.3C461.3 253.5 448.2 266.7 432 266.7C415.8 266.7 402.7 253.5 402.7 237.3C402.7 221.1 415.8 208 432 208z"></path>
  </svg>
);

const AnimatedDiv = ({ children, className, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigateTo = (section) => {
    setActiveSection(section);
    setTimeout(() => {
      let sectionId;
      switch (section) {
        case 'home':
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        case 'slogan':
          sectionId = 'slogan-section';
          break;
        case 'about':
          sectionId = 'about-section';
          break;
        case 'education':
          sectionId = 'education-section';
          break;
        case 'journey':
          sectionId = 'journey-section';
          break;
          case 'projects':
          sectionId = 'projects-section';
          break;
        case 'tech-stacks':
          sectionId = 'tech-stacks-section';
          break;
        case 'contact':
          sectionId = 'contact-section';
          break;
        default:
          return;
      }
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home-section');
      const slogan = document.getElementById('slogan-section');
      const about = document.getElementById('about-section');
      const education = document.getElementById('education-section');
      const journey = document.getElementById('journey-section');
      const projects = document.getElementById('projects-section');
      const tech = document.getElementById('tech-stacks-section');
      const contact = document.getElementById('contact-section');
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (contact && scrollPosition > contact.offsetTop) {
        setActiveSection('contact');
      } else if (tech && scrollPosition > tech.offsetTop) {
        setActiveSection('tech-stacks');
      } 
        else if (projects && scrollPosition > projects.offsetTop) {
        setActiveSection('projects');
      }
        else if (journey && scrollPosition > journey.offsetTop) {
        setActiveSection('journey');
      } else if (education && scrollPosition > education.offsetTop) {
        setActiveSection('education');
      } else if (about && scrollPosition > about.offsetTop) {
        setActiveSection('about');
      } else if (slogan && scrollPosition > slogan.offsetTop) {
        setActiveSection('slogan');
      } else if (home) {
        setActiveSection('home');
      }

      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const Navbar = () => (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-gray-700 shadow-lg px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/#" onClick={() => navigateTo('home')} className="text-xl font-bold text-white hover:text-blue-400 transition duration-300">
          Eyosiyas.dev
        </a>
        <div className="hidden md:flex space-x-6 text-lg">
          {['home', 'slogan', 'about', 'education', 'journey',  'projects','tech-stacks', 'contact'].map((section) => (
            <a
              key={section}
              href={`/#${section}`}
              onClick={() => navigateTo(section)}
              className={`capitalize font-medium transition duration-300 ${
                activeSection === section ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              {section.replace('-', ' ')}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section id="home-section" className="h-screen flex items-center justify-center text-center bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedDiv delay={0}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-400">Eyosiyas</span>
          </h1>
          <p className="text-lg md:text-2xl font-light mb-8">
            A passionate full-stack developer specializing in creating beautiful and functional web applications.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/#projects-section"
              onClick={() => navigateTo('projects')}
              className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
            <a
              href="/#contact-section"
              onClick={() => navigateTo('contact')}
              className="px-6 py-3 bg-gray-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gray-600 transform hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
            </a>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );

  const SloganSection = () => (
    <section id="slogan-section" className="min-h-screen flex items-center justify-center bg-gray-800 text-white py-20 px-8">
      <div className="container mx-auto text-center max-w-6xl">
        <AnimatedDiv delay={0}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400 leading-tight">
           For every problem, there's a solution. I build the software to make it happen.
          </h2>
        </AnimatedDiv>
        <AnimatedDiv delay={200}>
          <p className="text-lg md:text-xl font-light max-w-4xl mx-auto">
            I'm a software developer dedicated to crafting elegant and efficient solutions that bring ideas to life.
          </p>
        </AnimatedDiv>
      </div>
    </section>
  );

  const AboutSection = () => {
    const [activeParagraph, setActiveParagraph] = useState(0);
    const paragraphRefs = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index, 10);
              setActiveParagraph(index);
            }
          });
        },
        {
          root: null,
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0
        }
      );
  
      paragraphRefs.current.forEach(ref => {
        if (ref) observer.observe(ref);
      });
  
      return () => {
        paragraphRefs.current.forEach(ref => {
          if (ref) observer.unobserve(ref);
        });
      };
    }, []);
  
    return (
      <section id="about-section" className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-20 px-8">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start md:space-x-12 relative">
          <AnimatedDiv delay={0} className="w-full md:w-2/3 text-center md:text-left space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-6">
              About Me
            </h2>
            <p
              ref={el => paragraphRefs.current[0] = el}
              data-index="0"
              className={`text-lg md:text-xl font-light leading-relaxed transition-colors duration-500 ${
                activeParagraph === 0 ? 'text-white' : 'text-gray-400'
              }`}
            >
              Hi, I'm Eyosiyas, a backend engineer from Ethiopia, driven by a deep passion for solving real-world problems through technology. This commitment is what initially drew me to the world of software development and continues to fuel my dedication to building impactful applications.
            </p>
            <p
              ref={el => paragraphRefs.current[1] = el}
              data-index="1"
              className={`text-lg md:text-xl font-light leading-relaxed transition-colors duration-500 ${
                activeParagraph === 1 ? 'text-white' : 'text-gray-400'
              }`}
            >
              My expertise lies in designing and implementing robust, scalable applications. While my focus is on backend engineering, I'm adept at creating the server-side architecture for both web and mobile applications, as well as developing complete web apps. I thrive on the challenge of building solutions that are not only functional but also efficient and reliable.
            </p>
            <p
              ref={el => paragraphRefs.current[2] = el}
              data-index="2"
              className={`text-lg md:text-xl font-light leading-relaxed transition-colors duration-500 ${
                activeParagraph === 2 ? 'text-white' : 'text-gray-400'
              }`}
            >
              My work is guided by a strong belief in the power of discipline and consistency. I approach every project with a meticulous mindset, ensuring that my code is clean, well-structured, and easy to maintain. I'm committed to continuous learning and improvement, always striving to deliver the highest quality work possible.
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={300} className="w-full md:w-1/3 flex-shrink-0 mt-12 md:mt-0 sticky top-20">
            <img
              src="https://raw.githubusercontent.com/Eyosiyasshisema/image-assets/refs/heads/main/photo_2025-07-31_18-42-30.jpg"
              alt="A profile picture of the portfolio owner."
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-blue-500 shadow-lg mx-auto"
            />
          </AnimatedDiv>
        </div>
      </section>
    );
  };
  

  const EducationSection = () => {
    const education = [
      {
        degree: 'Bachelor of Science in Software Engineering',
        institution: ' Addis Ababa Science And Technology University',
        duration: '2021 - 2025',
        description: 'Focused on software engineering, data structures, and algorithms. Graduated with honors.'
      },
      {
        degree: 'Certified Agentic AI Developer',
        institution: 'Online Certification',
        duration: '2025-present',
        description: 'Built real-world agentic AI systems'
      }
    ];

    return (
      <section id="education-section" className="min-h-screen bg-gray-800 text-white py-20 px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <AnimatedDiv delay={0}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-400">
              Education & Learning
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {education.map((item, index) => (
              <AnimatedDiv key={index} delay={index * 200}>
                <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                  <p className="text-blue-400 font-semibold mb-1">{item.institution}</p>
                  <p className="text-gray-400 mb-4">{item.duration}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const JourneySection = () => {
    const journey = [
      {
        role: 'Senior Backend Engineer',
        company: 'Chiraro Tech Solutions',
        duration: '2023 - 2024',
        description: 'Led the logic development of a scalable e-commerce platform using Node.js ,PostgresQl and a microservices architecture. Mentored junior developers and improved code quality through a rigorous review process.'
      },
      {
        role: 'Upwork Full-Stack Developer',
        company: '',
        duration: '2019 - present',
        description: 'Throughout my career, I have had the opportunity to build a diverse range of projects, both for remote clients and for my own personal development. My approach is always centered on problem-solving: I am driven by the process of identifying a real-world problem and architecting a robust solution to address it. This has allowed me to build scalable applications that not only meet project requirements but also make a tangible impact.'
      }
    ];

    return (
      <section id="journey-section" className="min-h-screen bg-gray-900 text-white py-20 px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <AnimatedDiv delay={0}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-400">
              My Journey So Far
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {journey.map((item, index) => (
              <AnimatedDiv key={index} delay={index * 200}>
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.role}</h3>
                  <p className="text-blue-400 font-semibold mb-1">{item.company}</p>
                  <p className="text-gray-400 mb-4">{item.duration}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>
    );
  };
const ProjectsSection = () => {
    const projectsData = [
      {
        id: 1,
        title: 'Couples App ',
        description: 'A backend API for a couples relationship application. It provides the server-side logic for user authentication, game management, and data persistence, enabling interactive and engaging experiences for couples.',
        technologies: ['Node.js','flutter', 'Express', 'Postgres', 'Socket.io','jwt'],
        projectUrl: 'https://github.com/Eyosiyasshisema/couples-app-backend-modified', 
      },
      {
        id: 2,
        title: 'Telegram Reminder Bot',
        description: 'A conversational Telegram bot designed to help users efficiently manage their tasks and schedules by setting personalized reminders. It also supports both one-time and recurrence reminders. Built with Node.js and the Telegraf.js framework, the bot offers a seamless and interactive user experience.',
        technologies: ['Node.js', 'Telegraf', 'Postgres', 'Render'],
        projectUrl: 'https://github.com/Eyosiyasshisema/reminderBot', 
      },
      {
        id: 3,
        title: 'Portfolio Website',
        description: 'The very website you are viewing! A personal portfolio showcasing projects, skills, and contact information. Designed with a clean, minimalist aesthetic and full responsiveness.',
        technologies: ['React','Tailwind.css','node.js'],
        projectUrl: '/eyosiyas.dev', 
      },
      {
        id: 4,
        title: 'Lexical Analysis Compliler',
        description: 'A compiler built with c++ that performs lexical and semantic analysis',
        technologies: ['c++'],
        projectUrl: 'https://github.com/Eyosiyasshisema/scd-project', 
      },
    ];
  
    return (
      <section id="projects-section" className="min-h-screen bg-gray-700 text-white py-20 px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <AnimatedDiv delay={0}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-400">
              My Projects
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projectsData.map((project, index) => (
              <AnimatedDiv key={project.id} delay={index * 200}>
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-600 text-teal-400 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:bg-blue-700"
                  >
                    View Project
                  </a>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>
    );
  };


  const TechStacksSection = () => {
    const techLogos = [
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
      'https://www.mysql.com/common/logos/mysql-logo.svg',
      'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redis.svg',
      'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
      'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg',
      'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
      'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
      'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
      'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg',
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg',
      'https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg',
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
      'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    ];
    return (
      <section id="tech-stacks-section" className="min-h-screen bg-gray-800 text-white py-20 px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <AnimatedDiv delay={0}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-400">
              My Tech Stacks and languages
            </h2>
          </AnimatedDiv>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {techLogos.map((logo, index) => (
              <AnimatedDiv key={index} delay={index * 100}>
                <div className="p-4 bg-gray-700 rounded-lg shadow-xl cursor-pointer hover:scale-110 rotate-3 transition-transform duration-300">
                  <img src={logo} alt="Tech Logo" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('Sending...'); 
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        const errorData = await response.json();
        setSubmissionStatus(`Failed to send message: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section id="contact-section" className="py-16">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Get In Touch</h2>
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
          {submissionStatus && (
            <p className={`mt-4 text-center font-medium ${submissionStatus.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {submissionStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
  const ContactSection = () => (
    <section id="contact-section" className="min-h-screen flex items-center justify-center bg-gray-800 text-white py-20 px-8">
      <div className="container mx-auto text-center max-w-4xl">
        <AnimatedDiv delay={0}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-400">
            Get In Touch
          </h2>
        </AnimatedDiv>
        <AnimatedDiv delay={200}>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to send me a message!
          </p>
        </AnimatedDiv>
        <AnimatedDiv delay={400}>
          <ContactForm />
        </AnimatedDiv>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-gray-400 py-8 px-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Eyosiyasshisema" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/eyosiyas-shisema-31b156255/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <LinkedInIcon />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Eyosiyas. All rights reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="bg-gray-900 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <SloganSection />
        <AboutSection />
        <EducationSection />
        <JourneySection />
        <ProjectsSection/>
        <TechStacksSection />
        <ContactSection />
      </main>
      <Footer />
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 animate-fade-in"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 254.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
