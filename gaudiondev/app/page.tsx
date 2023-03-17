import { getAllBlogs } from '@/lib/blogHelper';

import Image from 'next/image'

import Link from 'next/link'

export default function Home() {

  //Static by default
  const blogs = getAllBlogs();

  return (
    <main className="wrapper">
      <h1 className="text-3xl font-bold">
        Ryan Gaudion
      </h1>


      <section className='py-10'>
        <h2 className='text-2xl font-bold'>
          Latest Blogs
        </h2>

        <div className='py-2'>
          {blogs.map((blog, index) => (
            <Link href={'/blog/' + blog.slug} passHref key={index}>
              <div className='py-2 pl-4'>
                <h5 className="text-lg font-bold">{blog.meta.title || "No Title"}</h5>
                <p className="text-base">{blog.meta.description || "No Description"}</p>
              </div>
            </Link>
          ))}
        </div>
          
        
      </section>

      

    </main>
  )
}
