import {readdir,readFile} from "node:fs/promises";
import {marked} from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
    const source = await readFile(`content/posts/${slug}.md`, 'utf-8')
    const {data: {title, date}, content} = matter(source)
    const html = marked(content)
    return {date, title, content: html}
}

export async function getPosts() {
    const slugs = await getSlugs()
    const posts = []
    for (const slug of slugs) {
        const post = await getPost(slug)
        posts.push({slug, ...post})
    }
    return posts
}

export async function getSlugs() {
    const suffix = '.md'
    const files = await readdir(`content/posts`)
    return files.filter((file) => file.endsWith(suffix))
        .map((file) => file.slice(0, -suffix.length));
}
