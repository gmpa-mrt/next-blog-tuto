import {readFile} from "node:fs/promises";
import {marked} from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
    const source = await readFile(`content/posts/${slug}.md`, 'utf-8')
    const {data: {title, date}, content} = matter(source)
    const html = marked(content)
    return {date, title, content: html}
}
