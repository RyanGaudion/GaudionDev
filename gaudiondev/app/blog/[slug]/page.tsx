import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'

import Button from '@/mdxComponents/Button'

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('blogs'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))


    return paths
}

function getPost({slug}:any){
    const markdownWithMeta = fs.readFileSync(path.join('blogs',slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)

    return {
        frontMatter,
        slug,
        content
    }
}
  
//Fix Any
export default function Post({ params } :any) {
    const props = getPost(params);

    return (
        <main className="wrapper">
            <div className='prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert '>

                {/* @ts-expect-error Server Component*/}
                <MDXRemote source={props.content} components={{Button}} />
            </div>
        </main>
    )

    /*
            <p>{JSON.stringify(props.slug)}</p>
            <br/>
            <p>{JSON.stringify(props.frontMatter)}</p>
            <br/>*/
}