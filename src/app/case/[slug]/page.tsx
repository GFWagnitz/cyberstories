import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

interface PostProps {
  frontmatter: {
    [key: string]: any;
  },
  content: string
}

async function getData(slug: string): Promise<PostProps|null>
{
  try {
    const fileName = fs.readFileSync(`public/posts/${slug}.md`, 'utf-8');

    const { data: frontmatter, content } = matter(fileName);

    return {
        frontmatter,
        content
      }; 

  } catch (error) {
    console.error(error);

    return null;  
  }
};


export default async function Page({ params } : { params: { slug: string } }) {
  
  const { frontmatter, content }  = await getData(params.slug) as PostProps;

  return (
    <div className="prose mx-auto mt-8">
      <h1>{ frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
