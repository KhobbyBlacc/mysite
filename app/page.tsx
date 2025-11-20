import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillApple, AiFillAndroid, AiOutlineGlobal} from 'react-icons/ai';
import {FaDesktop, FaExternalLinkAlt} from 'react-icons/fa';
import dev from '../public/potfolio.jpg'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'

interface Project {
  title: string;
  description: string;
  links: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
  category: string;
}

const projects: Project[] = [
  {
    title: 'Telical',
    description: 'A comprehensive health and appointment app for virtual consultations with doctors and specialists. Features real-time tracking of vital signs, AI-powered anomaly detection, medication management, and emergency response system.',
    links: [
      { platform: 'iOS', url: 'https://apps.apple.com/gh/app/telical/id6473790593', icon: <AiFillApple className="text-2xl" /> },
      { platform: 'Android', url: 'https://play.google.com/store/apps/details?id=com.abibiman.telicalhealth', icon: <AiFillAndroid className="text-2xl" /> }
    ],
    category: 'Healthcare'
  },
  {
    title: 'FamiCom',
    description: 'A budget tracker designed for families and individual savings. Features individual and family savings tracking, group chats for financial planning, and comprehensive analysis tools to help manage finances effectively.',
    links: [
      { platform: 'iOS', url: 'https://apps.apple.com/gh/app/famicom/id6747743479', icon: <AiFillApple className="text-2xl" /> }
    ],
    category: 'Finance'
  },
  {
    title: 'Quality Courier Services (QCS Delivery)',
    description: 'A Ghanaian local courier service app that allows users to make orders and get them delivered across cities. Streamlined delivery management for efficient logistics and customer satisfaction.',
    links: [
      { platform: 'iOS', url: 'https://apps.apple.com/gh/app/qcs-delivery/id6477783811', icon: <AiFillApple className="text-2xl" /> }
    ],
    category: 'Logistics'
  },
  {
    title: 'Ivy',
    description: 'A companion app for meeting new people, collaborating with them, and having fun. A modern social media platform designed to connect people and foster meaningful interactions and collaborations.',
    links: [
      { platform: 'iOS Beta', url: 'https://testflight.apple.com/join/U84zaUgg', icon: <AiFillApple className="text-2xl" /> }
    ],
    category: 'Social Media'
  },
  {
    title: 'Churchie',
    description: 'A comprehensive church management app featuring database management and AI-powered quick responses to members about the church. Desktop software with WhatsApp integration for seamless communication.',
    links: [
      { platform: 'Desktop', url: '#', icon: <FaDesktop className="text-2xl" /> }
    ],
    category: 'Management'
  },
  {
    title: 'Givify',
    description: 'A GoFundMe-style app for agencies, churches, and organizations. Enables organizations to raise funds and accept in-kind donations (clothes, blood, etc.). A comprehensive platform for charitable giving and fundraising.',
    links: [
      { platform: 'Web', url: 'https://givify-beige.vercel.app/', icon: <AiOutlineGlobal className="text-2xl" /> }
    ],
    category: 'Charity'
  },
  {
    title: 'Givify Technologies',
    description: 'A comprehensive business website showcasing our technology company. Features services including custom software development, AI & automation solutions, IT consulting, media creation, and digital marketing. Built to transform businesses with cutting-edge digital solutions.',
    links: [
      { platform: 'Web', url: 'https://givify-tech.vercel.app/', icon: <AiOutlineGlobal className="text-2xl" /> }
    ],
    category: 'Business'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className='sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex justify-between items-center'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent'>devBlacc</h1>
          <ul className='flex items-center gap-4'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-xl text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors'/>
            </li>
            <li>
              <a className='text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:text-teal-500 transition-all duration-300 font-medium' 
                 href='https://givify-tech.vercel.app/' target='_blank' rel='noopener noreferrer'>
                Givify Technologies
              </a>
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-lg ml-4 hover:shadow-lg transition-all duration-300 font-medium' 
                 href='https://github.com/KhobbyBlacc' target='_blank' rel='noopener noreferrer'>
                My Repo
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24'>
        <div className='text-center'>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 md:w-80 md:h-80 mt-8 mb-8 overflow-hidden shadow-2xl ring-4 ring-teal-200 dark:ring-teal-800'>
            <Image 
              src={dev} 
              alt='Armah Amihere Clinton' 
              fill 
              className='object-cover' 
              priority 
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
          <h2 className='text-5xl md:text-6xl lg:text-7xl py-4 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent font-bold'>
            Armah Amihere Clinton
          </h2>
          <h3 className='text-2xl md:text-3xl py-3 text-gray-700 dark:text-gray-300 font-medium'>
            Software Developer
          </h3>
          <h6 className='text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6'>
            klingtonw@gmail.com
          </h6>
          <p className='text-lg md:text-xl py-6 leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            I am a dedicated and solution-driven engineer who transforms ideas into practical, user-focused digital products. My work spans mobile app development, system design, and creating smooth user experiences that solve real-world problems. I&apos;m passionate about building tools that make everyday processes easier — from health management platforms to service apps that connect users, providers, and administrators seamlessly.
          </p>
          <p className='text-lg md:text-xl py-4 leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            I pay attention to detail, think through user journeys, and care about a clean, functional UI. I enjoy taking complex challenges and breaking them down into simple, effective solutions. Whether it&apos;s integrating APIs, improving app structure, enhancing performance, or crafting features that genuinely help people, I put in the effort to make things work — and work well.
          </p>
          <p className='text-lg md:text-xl py-4 leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Driven, consistent, and always learning, I&apos;m committed to building products that create real impact. Every project is an opportunity to innovate, refine, and push boundaries.
          </p>
          <div className='text-4xl flex justify-center gap-8 py-6 text-gray-600 dark:text-gray-400'>
            <a href='#' className='hover:text-teal-500 transition-colors' aria-label='LinkedIn'>
              <AiFillLinkedin />
            </a>
            <a href='#' className='hover:text-teal-500 transition-colors' aria-label='Instagram'>
              <AiFillInstagram />
            </a>
            <a href='#' className='hover:text-teal-500 transition-colors' aria-label='Twitter'>
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24'>
        <div className='text-center mb-12'>
          <h3 className='text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200'>Skills & Technologies</h3>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Technologies and tools I use to build innovative solutions
          </p>
        </div>
        <div className='flex flex-wrap justify-center gap-4 mt-12'>
          {['Flutter', 'Dart', 'React Native', 'Next.js', 'React.js', 'FastAPI', 'PostgreSQL', 'Networking', 'Python'].map((skill) => (
            <span
              key={skill}
              className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24'>
        <div className='text-center mb-12'>
          <h3 className='text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200'>Work Arrangements</h3>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
            With 8+ years of experience in mobile and web development, I&apos;m flexible and available for various work arrangements. I&apos;m open to <span className='text-teal-500 font-semibold'>remote</span>, <span className='text-teal-500 font-semibold'>hybrid</span>, <span className='text-teal-500 font-semibold'>full-time</span>, and <span className='text-teal-500 font-semibold'>part-time</span> opportunities. I&apos;m also available for travel when needed.
          </p>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4'>
            Additionally, I offer mentoring and teaching services to help aspiring developers build their careers in programming.
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
          <div className='text-center shadow-xl p-8 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-teal-500'>
            <div className='flex justify-center mb-6'>
              <div className='w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center'>
                <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
            </div>
            <h3 className='text-2xl font-bold pt-4 pb-3 text-gray-800 dark:text-gray-200'>Remote</h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Fully remote work arrangements with flexible hours and seamless collaboration across time zones
            </p>
          </div>

          <div className='text-center shadow-xl p-8 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-teal-500'>
            <div className='flex justify-center mb-6'>
              <div className='w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center'>
                <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
            </div>
            <h3 className='text-2xl font-bold pt-4 pb-3 text-gray-800 dark:text-gray-200'>Hybrid</h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Flexible hybrid arrangements combining remote work with on-site collaboration when needed
            </p>
          </div>

          <div className='text-center shadow-xl p-8 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-teal-500'>
            <div className='flex justify-center mb-6'>
              <div className='w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center'>
                <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
            </div>
            <h3 className='text-2xl font-bold pt-4 pb-3 text-gray-800 dark:text-gray-200'>Full-Time</h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Dedicated full-time positions with commitment to long-term projects and team success
            </p>
          </div>

          <div className='text-center shadow-xl p-8 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-teal-500'>
            <div className='flex justify-center mb-6'>
              <div className='w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center'>
                <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
            </div>
            <h3 className='text-2xl font-bold pt-4 pb-3 text-gray-800 dark:text-gray-200'>Part-Time</h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Part-time engagements perfect for ongoing projects, consultations, or specific feature development
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24'>
        <div className='text-center mb-16'>
          <h3 className='text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200'>My Projects</h3>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
            A collection of innovative applications I&apos;ve developed, spanning healthcare, finance, logistics, social media, and more. Each project showcases my expertise in mobile and web development.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div 
              key={index}
              className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700'
            >
              <div className='flex items-start justify-between mb-4'>
                <div>
                  <span className='inline-block px-3 py-1 text-xs font-semibold rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 mb-3'>
                    {project.category}
                  </span>
                  <h4 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3'>
                    {project.title}
                  </h4>
                </div>
              </div>
              <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700'>
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium group'
                  >
                    <span className='group-hover:scale-110 transition-transform'>{link.icon}</span>
                    <span>{link.platform}</span>
                    <FaExternalLinkAlt className='text-xs opacity-70 group-hover:opacity-100' />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-400 py-8 mt-16'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center'>
          <p className='text-sm'>
            © {new Date().getFullYear()} Armah Amihere Clinton. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
