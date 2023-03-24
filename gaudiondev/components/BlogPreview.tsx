import { Blog } from "@/lib/blogHelper";
import { dateTimeString, timeSince } from "@/lib/dateHelper";

import Link from 'next/link'
import BlogPreviewDate from "./BlogPreviewDate";


interface BlogPreviewComponentParams{
    blog : Blog
}

export default function BlogPreviewComponent(params: BlogPreviewComponentParams){
    const blog = params.blog;

    return (
        <Link href={'/blog/' + blog.slug} passHref key={blog.slug}>
            <div className='py-2 flex-col flex md:flex-row justify-between align-middle gap-1 md:gap-2'>
                <div>
                    <h3 className="text-xl font-bold line-clamp-2 md:line-clamp-1">{blog.meta.title || "No Title"}</h3>
                    <p className="text-base text-gray-200 line-clamp-2 md:text-gray-400">{blog.meta.description || "No Description"}</p>
                </div>
                <div className="text-sm md:text-base my-auto text-gray-400 whitespace-nowrap">
                    <BlogPreviewDate dateNum={blog?.meta?.date?.getTime()} />
                </div>
            </div>
        </Link>
    )
}