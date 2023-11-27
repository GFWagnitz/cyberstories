import fs from 'fs';
import matter from 'gray-matter';
import PostsList from './components/PostsList';
import {PostItemProps} from './components/PostItem';

async function getPosts(): Promise<PostItemProps[]> {
  try {
    const files = fs.readdirSync('public/posts');

    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`public/posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        title: frontmatter.title as string, 
        thumbnail: frontmatter.thumbnail as string,
        headImage: frontmatter.headImage as string,
        publishDate: frontmatter.publishDate as string,
        yearOfOccurrence: frontmatter.yearOfOccurrence as number,
        ...frontmatter
      };  
    }); 

    return posts;  

  } catch (error) {
    console.error(error);

    return [];  
  }
};

const postsData = await getPosts();

export default function HomePage() {
  getPosts();
  return (
    <div>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-200 sm:text-[5rem]">
          CyberStories
        </h1>
        <div className="text-gray-200 text-base">
          <PostsList posts={postsData}/>
        </div>
      </div>
  );
}
