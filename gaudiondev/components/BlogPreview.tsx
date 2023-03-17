import { Blog } from "@/lib/blogHelper";
import { dateTimeString, timeSince } from "@/lib/dataHelper";

import Link from 'next/link'


interface BlogPreviewComponentParams{
    blog : Blog
}

export default function BlogPreviewComponent(params: BlogPreviewComponentParams){
    const blog = params.blog;

    return (
        <Link href={'/blog/' + blog.slug} passHref key={blog.slug}>
            <div className='py-2 px-4 flex justify-between align-middle'>
                <div>
                    <h5 className="text-lg font-bold">{blog.meta.title || "No Title"}</h5>
                    <p className="text-base">{blog.meta.description || "No Description"}</p>
                </div>
                <div className="my-auto text-slate-300">
                    <p title={dateTimeString(blog.meta.date)}>{timeSince(blog.meta.date)} ago</p>
                </div>
            </div>
        </Link>
    )
}