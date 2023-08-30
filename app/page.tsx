import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import dev from '../public/potfolio.jpg'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/mob1.png'
import web2 from '../public/mob2.png'
import web3 from '../public/mob3.png'
import web4 from '../public/web4.png'

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
     <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl'>devBlacc</h1>
      <ul className='flex items-center'>
        <li>
          <BsFillMoonStarsFill className='cursor-pointer'/>
        </li>
        <li>
          <a className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='https://github.com/KhobbyBlacc'>My Repo</a>
          </li>
      </ul>
      </nav>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-500 font-medium'>Armah Amihere Clinton</h2>
        <h3 className='text-2xl py-2'>Software Developer</h3>
        <h6 className='text-sm'>klingtonw@gmail.com</h6>
        <p className='text-md py-7 leading-8 text-grey-800'>
        As a highly professional and skilled Freelance Mobile and Web Developer managing multiple projects for 5+ years, I feel that I can be a strong match for your requirement of a Freelance Mobile and Web Developer. I have gained extensive knowledge of Dart, Flutter, Python, Typescript, Nextjs,and Nestjs.
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <AiFillLinkedin />
        <AiFillInstagram />
        <AiFillTwitterCircle />
      </div>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-72 h-80 mt-20 overflow-hidden md:w-96'>
      <Image src={dev} objectFit='fill' alt='picture'/>
      </div>
     </section>

     <section>
     <div>
     <h3 className='text-3xl py-10'>Services I offer</h3>
     <p className='text-md py-1 leading-8 text-grey-800'>
      I offer <span className='text-teal-500'>remote</span> jobs,<span className='text-teal-500'>part-time</span>, and <span className='text-teal-500'>full-time</span> mobile and web development jobs. I am available for travels
     </p>
     <p className='text-md py-2 leading-8 text-grey-800'>
    I teach and assist young developers or people with zero knowledge in programming to help build their carrers
     </p>
     <div className='lg:flex gap-10'>
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={design} alt='' width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>User Interfaces </h3>
        <p>
          Buidling user interfaces for both <span className='text-teal-500'>IOS</span> and  <span className='text-teal-500'>Android</span> and websites
        </p>
        <h4 className='py-4 text-teal-600'>Tools I use</h4>
        <p className='text-gray-800 py-1'>Flutter</p>
        <p className='text-gray-800 py-1'>Dart</p>
      </div>

      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={code} alt='' width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Code </h3>
        <p>
          Buidling user interfaces for both <span className='text-teal-500'>IOS</span> and  <span className='text-teal-500'>Android</span> and websites
        </p>
        <h4 className='py-4 text-teal-600'>Tools I use</h4>
        <p className='text-gray-800 py-1'>Vscode</p>
        <p className='text-gray-800 py-1'>Google Play services</p>
        <p className='text-gray-800 py-1'>AppStoreConnect</p>
      </div>

      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={consulting} alt='' width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Consulting </h3>
        <p>
          Buidling user interfaces for both <span className='text-teal-500'>IOS</span> and  <span className='text-teal-500'>Android</span> and websites
        </p>
        <h4 className='py-4 text-teal-600'>Tools I use</h4>
        <p className='text-gray-800 py-1'>Flutter</p>
        <p className='text-gray-800 py-1'>Dart</p>
        <p className='text-gray-800 py-1'>Xcode</p>
      </div>
     </div>
     </div>
     </section>

     <section>
     <div>
     <h3 className='text-3xl py-1'>Portfolio</h3>
      <p className='text-md py-5 leading-8 text-grey-800'>
        As a highly professional and skilled Freelance Mobile and Web Developer managing multiple projects for 5+ years, I feel that I can be a strong match for your requirement of a Freelance Mobile and Web Developer. I have gained extensive knowledge of Dart, Flutter, Python, Typescript, Nextjs,and Nestjs.
        </p>
     </div>

     <div className='flex float-col gap-10 lg:flex-wrap'>
      <div className='basis-96 flex-1'>
        <Image src={web1} alt='' className='rounded-lg object-cover' width={100} height={100} layout='responsive'/>
      </div>
      <div className='basis-96 flex-1'>
        <Image src={web2} alt='' className='rounded-lg object-cover' width={100} height={100} layout='responsive'/>
      </div>
      <div className='basis-96 flex-1'>
        <Image src={web3} alt='' className='rounded-lg object-cover' width={100} height={100} layout='responsive'/>
      </div>
      <div className='basis-96 flex-1'>
        <Image src={web4} alt='' className='rounded-lg object-cover' width={100} height={100} layout='responsive'/>
      </div>
     </div>
     </section>
    </main>
  )
}
