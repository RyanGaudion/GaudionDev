import BlogPreviewComponent from '@/components/BlogPreview';
import { getAllBlogs } from '@/lib/blogHelper';

export default function Home() {

  //Static by default
  const blogs = getAllBlogs();

  return (
    <main className="wrapper">
      <h1 className="text-4xl font-bold">
        Ryan Gaudion
      </h1>


      <section className='py-10'>
        <h2 className='text-3xl font-bold'>
          Latest Blogs
        </h2>

        <div className='py-4 flex flex-col gap-4'>
          {blogs.map((blog, index) => (
            blog && <BlogPreviewComponent key={index} blog={blog}/>
          ))}
        </div>
          
        
      </section>

      

    </main>
  )
}
