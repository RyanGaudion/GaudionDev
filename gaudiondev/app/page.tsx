//import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from './page.module.css'

//const inter = Inter({ subsets: ['latin'] })

import HelloWorld from "../blogs/hello.mdx"

export default function Home() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert ">
        <HelloWorld/>
      </div>

    </main>
  )
}
