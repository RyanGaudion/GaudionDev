import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDir = "blogs"


export interface Blog {
    meta: BlogMeta
    slug: string
    content: string
}

export interface BlogMeta{
    title?: string
    date?: Date
    description?: string
    author?: string
}

export interface BlogItem {
    slug: string
}

const getSlugFromFileName = (filename: string) => filename.replace('.mdx', ''); 

const getFileNameFromSlug = (slug: string) => slug + '.mdx'


const getBlogFiles = () => fs.readdirSync(path.join(blogDir))

const readBlogFile = (filename : string) => fs.readFileSync(path.join(blogDir, filename), 'utf-8')

const getBlogFromFile = (filename : string) : Blog => {
    const { data, content } = matter(readBlogFile(filename)) 
    const slug = getSlugFromFileName(filename)

    const meta = cleanMetaFromMatter(data)

    return ({ meta, slug, content} )
}

const cleanMetaFromMatter = (meta : {[key: string]: any }) : BlogMeta => {
    return {
        ...meta,
        author: meta.author ?? "Ryan Gaudion",
        date: new Date(meta.date) ?? null
    }
}


const getBlogItemFromFile = (filename : string) : BlogItem => {
    return {
        slug: getSlugFromFileName(filename)
    }
}


export function getAllBlogs(){
    const files = getBlogFiles();

    const blogs = files.map(filename => {
        return getBlogFromFile(filename)
      })

    return blogs;
}

export function getAllBlogsInfo(){
    const files = getBlogFiles();

    return files.map(filename => getBlogItemFromFile(filename))
}

export function getBlog(slug : string) : Blog{
    const filename = getFileNameFromSlug(slug)

    return getBlogFromFile(filename)
}