import BlogPreviewComponent from '@/components/BlogPreview';
import CustomLink from '@/components/mdx/CustomLink';
import { getAllBlogs } from '@/lib/blogHelper';

import Link from "next/link"

import { SiYoutube, SiGithub, SiTwitter } from "react-icons/si";


export default function Home() {

  //Static by default
  const blogs = getAllBlogs();

  return (
    <main className="wrapper">
      <h1 className="text-4xl font-bold">
        Ryan Gaudion
      </h1>

      <section className='py-5 px-2 md:px-4'>
        <ul className='py-4 flex flex-col gap-4 list-inside'>
          <li className='flex items-center gap-4 group cursor-pointer'>
            <SiYoutube className='h-5 w-5 md:group-hover:h-6 group-hover:w-6'/>
            <CustomLink className='md:group-hover:font-medium text-lg' href="https://www.youtube.com/@RyanGaudion">YouTube</CustomLink>
          </li>
          <li className='flex items-center gap-4 group cursor-pointer'>
            <SiTwitter className='h-5 w-5 md:group-hover:h-6 group-hover:w-6'/>
            <CustomLink className='md:group-hover:font-medium text-lg' href="https://twitter.com/Ryan_Gaudion">Twitter</CustomLink>
          </li>
          <li className='flex items-center gap-4 group cursor-pointer'>
            <SiGithub className='h-5 w-5 md:group-hover:h-6 group-hover:w-6'/>
            <CustomLink className='md:group-hover:font-medium text-lg' href="https://github.com/RyanGaudion/">GitHub</CustomLink>
          </li>
        </ul>
      </section>


      <section className='py-5'>
        <h2 className='text-3xl font-bold'>
          Latest Blogs
        </h2>

        <div className='py-4 flex flex-col gap-4 px-2 md:px-4'>
          {blogs.map((blog, index) => (
            blog && <BlogPreviewComponent key={index} blog={blog}/>
          ))}
        </div>
      </section>

      

    </main>
  )
}
