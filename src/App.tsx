import React, { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Brain,
  Server,
  Award,
  GraduationCap,
  Trophy,
  AlignCenterVertical as Certificate,
  Terminal,
  Database,
  ExternalLink,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`https://formsubmit.co/monishkumardvs009@gmail.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Social media button handlers
  const handleGitHubClick = () => {
    window.open('https://github.com/monishkumardvs', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/darapu-monish-kumar/', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:monishkumardvs009@gmail.com';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+916303066854';
  };

  const experience = [
    {
      title: 'GirlScript Summer of Code',
      role: 'Remote Open Source Contributor',
      date: 'Jun 2024 – Aug 2024',
      points: [
        'Contributed to multiple open-source repositories, enhancing features and fixing bugs.',
        'Ranked 98 among thousands of participants in the program.',
      ],
    },
    {
      title: 'Swecha Summer of AI Internship',
      role: 'Swecha',
      date: 'May 2024 – June 2024',
      points: [
        'Explored AI techniques for language advancement, including NLP and speech processing.',
        'Managed team coordination, ensuring efficient execution of tasks and knowledge sharing.',
      ],
    },
    {
      title: 'Python Internship',
      role: 'SlashMark Intern',
      date: 'Nov 2023 – Jan 2023',
      points: [
        'Developed a machine learning-driven mental fitness tracker using scikit-learn.',
        'Completed an internship focusing on practical Python programming.',
        'Implemented advanced projects such as real-time auto license plate recognition using Jetson Nano.',
      ],
    },
  ];

  const projects = [
    {
      title: 'Comprehensive Study Planner Web App',
      description: 'Designed and developed a full-stack web application to enable collaborative study planning for students. Implemented JWT-based authentication for secure access and integrated real-time group messaging using Socket.io. Enhanced productivity with personalized study insights and deadline notifications, reducing missed deadlines by 20%. Enabled secure file uploads using Multer for seamless sharing of study materials.',
      technologies: ['React', 'NodeJS', 'MongoDB', 'Socket.io', 'JWT', 'Multer'],
      github: 'https://github.com/monishkumardvs/study-planner',
      
    },
    {
      title: 'AI-Driven Hedge Fund Trading Bot',
      description: 'Designed and developed a real-time AI-powered trading bot for hedge fund strategies, featuring a multi-agent system with sentiment analysis (FinBERT), technical indicators, fundamental analysis, and risk management. Implemented Streamlit-based deployment for live decision-making, integrated Gemini LLM for intelligent synthesis, and created a custom backtesting framework to validate strategies, improving simulated returns by 15%. Enabled secure API data retrieval from Yahoo Finance and Alpaca with environment variable management.',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Hugging Face Transformers (FinBERT)', 'Alpaca API', 'Yahoo Finance API', 'Gemini LLM'],
      github: '',
      demo: 'https://b9tyuhx5pdymid9dosqppr.streamlit.app/',
    },
    {
      title: 'Farm2Fork – Sustainable Food Supply Chain System',
      description: 'Developed a decentralized supply chain system using Pinata (IPFS) for tamper-proof data storage, ensuring end-to-end transparency. Designed a farmer dashboard for listing crops, fertilizers used, and pricing, and a distributor module for managing orders, negotiations, and storage. Built a retailer module to browse distributors, place orders, and generate a QR code for complete traceability. Integrated sustainability scoring for farmers and distributors to promote eco-friendly practices.',
      technologies: ['React', 'NodeJS', 'MongoDB', 'Pinata(IPFS)', 'Solidity', 'Ethereum'],
      github: 'https://github.com/monishkumardvs/license-plate-recognition',
    
    },
    {
      title: 'AI-Driven Audio Description Generator for Accessibility',
      description: 'Designed and developed an AI-powered virtual assistant for visually impaired users. Integrated speech recognition, text-to-speech (TTS), and Large Language Models (LLM). Implemented NewsAPI, OpenWeatherMap, and Wikipedia APIs; employed BLIP and DialoGPT for enhanced accessibility and conversational interactions. Developed an adaptive response system that dynamically generates real-time context-aware descriptions based on user queries.',
      technologies: ['Python', 'Transformers', 'NewsAPI', 'OpenWeatherMap', 'Wikipedia API'],
      github: '',
      
    },
    {
      title: 'AI-Enhanced 3D Puzzle Game with Adaptive Difficulty',
      description: 'Developed an interactive 3D puzzle-solving platform featuring dynamic difficulty adjustment powered by Deep Q-Networks (DQN). Created an immersive experience using Three.js and A-Frame for 3D environments. Integrated gesture and voice-based controls with HandTrack.js and Web Speech API for inclusive gameplay. Built an intelligent AI companion that offers real-time hints and guidance. Backend infrastructure implemented using Node.js, Express.js, and MongoDB for scalable performance.',
      technologies: ['JavaScript', 'Three.js', 'A-Frame', 'DQN', 'HandTrack.js', 'Web Speech API', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/monishkumardvs/holoquest',
      demo: 'https://holoquest.vercel.app/',
    },
  ];

  const education = {
    school: 'B V Raju Institute of Technology',
    location: 'Telangana, India',
    degree: 'Bachelor of Technology - Computer Science Engineering (Data Science)',
    gpa: '8.89',
    date: 'Nov 2022 - Expected 2026',
    courses: [
      'Operating Systems',
      'Data Structures',
      'Algorithms',
      'Artificial Intelligence',
      'Machine Learning',
      'Networking',
      'Databases',
    ],
  };

  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'SQL', icon: <Database className="w-8 h-8 text-teal-400" /> },
      ],
    },
    {
      category: 'Libraries & Frameworks',
      items: [
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Power BI', icon: <Terminal className="w-8 h-8 text-yellow-400" /> },
      ],
    },
  ];

  const codingProfiles = [
    { platform: 'LeetCode', stats: 'Highest Rating: 1506, 250+ Problems Solved', link: 'https://leetcode.com/u/monishkumardvs009/' },
    { platform: 'CodeChef', stats: 'Highest Rating: 1452, 160+ Problems Solved', link: 'https://www.codechef.com/users/monishkumar65' },
    { platform: 'MentorPick', stats: '380+ Problems Solved — Top 10 on College Leaderboard', link: '' },
  ];

  const achievements = [
    'Selected for the NxtWave NSDC Fellowship',
    'Captain of BVRIT Cricket Team and played for Telangana State team under 17',
    '2nd Prize, Datathon Inter-College Competition, among 500 participants',
  ];

  const certifications = [
    'Google - AIML Virtual Internship, 2024',
    'Oracle - Java Fundamentals, 2024',
    'Postman API Fundamentals Student Expert, 2024',
    'IBM - Introduction to Data Science, 2023',
    'AWS Services - Cloud Foundations, 2023',
    'AWS - Data Engineering, 2024',
    'NPTEL - Data Structures using Python, 2023',
  ];

  // Particle Animation
  useEffect(() => {
    const canvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }

      draw() {
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)'; // Cyan particles for 3D vibe
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen hero-gradient-dark text-gray-200 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-opacity-90 backdrop-blur-md z-50 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500"
          >
            Monish Kumar
          </motion.h1>
          <div className="flex items-center gap-2 sm:gap-4">
            {['home', 'experience', 'projects', 'education', 'skills', 'achievements', 'contact'].map(
              (item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`nav-link capitalize text-sm sm:text-base px-4 py-2 rounded-full ${
                    activeSection === item ? 'nav-link-active' : 'text-gray-300'
                  }`}
                  onClick={() => setActiveSection(item)}
                  href={`#${item}`}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={fadeIn}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="animated-gradient-border"
          >
            <img
              src="https://avatars.githubusercontent.com/monishkumardvs"
              alt="Monish Kumar"
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover transform hover:rotate-3 transition-transform duration-300 profile-image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Hi, I’m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
                Monish Kumar
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              CSE student specializing in Data Science, passionate about building innovative solutions
              and tackling complex challenges with cutting-edge tech, including 3D game development.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.button
                onClick={handleGitHubClick}
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="social-button flex items-center gap-2 text-white"
              >
                <Github className="w-6 h-6" /> GitHub
              </motion.button>
              <motion.button
                onClick={handleLinkedInClick}
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="social-button flex items-center gap-2 text-white"
              >
                <Linkedin className="w-6 h-6" /> LinkedIn
              </motion.button>
              <motion.button
                onClick={handleEmailClick}
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="social-button flex items-center gap-2 text-white"
              >
                <Mail className="w-6 h-6" /> Email
              </motion.button>
              <motion.button
                onClick={handleCallClick}
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="social-button flex items-center gap-2 text-white"
              >
                <Phone className="w-6 h-6" /> Call
              </motion.button>
            </div>
          </motion.div>
        </div>
        <canvas id="particleCanvas" className="absolute inset-0 w-full h-full pointer-events-none" />
      </motion.section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 section-title"
          >
            Experience
          </motion.h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-teal-400/20 hover:border-teal-400/40 text-gray-200 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">{exp.title}</h3>
                <p className="text-lg text-gray-300 mb-2">{exp.role}</p>
                <p className="text-gray-400 mb-6">{exp.date}</p>
                <ul className="list-disc list-inside space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-200">{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/70">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 section-title"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="project-card p-6 rounded-2xl bg-gray-800/50 backdrop-blur-md border border-teal-400/20 hover:border-teal-400/40 transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">{project.title}</h3>
                <p className="text-gray-300 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <motion.button
                      onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}
                      whileTap={{ scale: 0.95 }}
                      className="social-button flex items-center gap-2 text-white"
                    >
                      <Github className="w-5 h-5" /> Code
                    </motion.button>
                  )}
                  {project.demo && (
                    <motion.button
                      onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}
                      whileTap={{ scale: 0.95 }}
                      className="social-button flex items-center gap-2 text-white"
                    >
                      <ExternalLink className="w-5 h-5" /> Demo
                    </motion.button>
                  )}
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-lg font-semibold text-teal-400 cursor-pointer"
                    onClick={() => window.open(project.demo || '', '_blank', 'noopener,noreferrer')}
                  >
                    Links
                  </motion.h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/70 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 section-title"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-teal-400/20 hover:border-teal-400/40 text-gray-200 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <GraduationCap className="w-10 h-10 text-teal-400 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">{education.school}</h3>
                <p className="text-gray-400 mb-2">{education.location}</p>
                <p className="text-xl text-teal-400 mb-2">{education.degree}</p>
                <p className="text-gray-200 mb-2">GPA: {education.gpa}</p>
                <p className="text-gray-400 mb-4">{education.date}</p>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-teal-400">Key Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course, index) => (
                      <span key={index} className="tech-tag text-sm">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/70">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 section-title"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="skill-card p-6 rounded-2xl bg-gray-800/50 backdrop-blur-md border border-teal-400/20 hover:border-teal-400/40 text-gray-200 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-teal-400">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30 hover:bg-teal-900/30 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {typeof skill.icon === 'string' ? (
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                      ) : (
                        skill.icon
                      )}
                      <span className="text-sm text-gray-200">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 section-title"
          >
            Coding Profiles
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {codingProfiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-teal-400/20 hover:border-teal-400/40 text-gray-200 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-teal-400">{profile.platform}</h3>
                <p className="text-gray-300 mb-4">{profile.stats}</p>
                {profile.link && (
                  <motion.button
                    onClick={() => window.open(profile.link, '_blank', 'noopener,noreferrer')}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-teal-400 underline"
                  >
                    Visit Profile
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/70">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 section-title"
          >
            Achievements
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-teal-400/20 hover:border-teal-400/40 text-gray-200 transition-all duration-300 flex items-center gap-4"
              >
                <Trophy className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <p className="text-gray-200">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/70 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 section-title"
          >
            Certifications
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-teal-400/20 hover:border-teal-400/40 text-gray-200 transition-all duration-300 flex items-center gap-4"
              >
                <Certificate className="w-8 h-8 text-teal-400 flex-shrink-0" />
                <p className="text-gray-200">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/70">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 section-title"
          >
            Get in Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="contact-form-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="contact-form-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="contact-form-input w-full"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-8 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-semibold transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-gray-900/80 text-gray-400">
        <p>© {new Date().getFullYear()} Monish Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;