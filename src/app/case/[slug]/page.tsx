import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';


interface PostProps {
  frontmatter: Record<string, string | undefined>,
  content: string
}

async function getData(slug: string): Promise<PostProps|null>
{
  try {
    const file = path.join(process.cwd(), 'public/posts', `${slug}.md`);
    const fileName = fs.readFileSync(file, 'utf-8');

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
  
  const { frontmatter, content } = (await getData(params.slug))!;

  return (
    <div className="prose mx-auto mt-8">
      <Link href="/" className='hover:bg-purple-900 mb-2 inline-block'>&lt; Voltar</Link>
      {!!frontmatter?.headImage && !!frontmatter?.title &&
      <img className='post-headimage' src={frontmatter.headImage} alt={frontmatter.title} />
      }
      <h1>{ frontmatter.title }</h1>
      {!!frontmatter.headImage ?
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} /> :
      <p className='align-center text-gray-300 text-3xl text-center'>EM BREVE</p>
      }
    </div>
  );
}
