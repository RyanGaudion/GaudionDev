//import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from './page.module.css'

//const inter = Inter({ subsets: ['latin'] })

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Image from 'next/image'

import Link from 'next/link'

export default function Home() {

  //Static by default
  const blogDir = "blogs"

  const files = fs.readdirSync(path.join(blogDir))
  const blogs = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      meta: frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return (
    <main className="">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      {blogs.map((blog, index) => (
        <Link href={'/blog/' + blog.slug} passHref key={index}>
          <h5 className="card-title">{blog.meta.title}</h5>
          <p className="card-text">{blog.meta.description}</p>
        </Link>
      ))}

    </main>
  )
}
