import PostsList from './components/PostsList';
import {PostItemProps} from './components/PostItem';

async function getDogImage(): Promise<string[]> {
  const response = await fetch('https://dog.ceo/api/breed/hound/images/random/5');
  const data = await response.json();
  console.log(data)
  return data.message;
}

const images: string[] = await getDogImage();

const postsData: PostItemProps[] = [
  {
    title: 'post1',
    slug: 'post1',
    imageUrl: images[0],
    publishDate: '2023-01-01',
    yearOfOccurrence: 2023
  },{
    title: 'Post 2',
    slug: 'post2',
    imageUrl: images[1],
    publishDate: '2023-01-01',
    yearOfOccurrence: 2023
  },{
    title: 'Post 3',
    slug: 'post3',
    imageUrl: images[2],
    publishDate: '2023-01-01',
    yearOfOccurrence: 2023
  },{
    title: 'Post 4',
    slug: 'post4',
    imageUrl: images[3],
    publishDate: '2023-01-01',
    yearOfOccurrence: 2023
  },{
    title: 'Post 5',
    slug: 'post5',
    imageUrl: images[4],
    publishDate: '2023-01-01',
    yearOfOccurrence: 2023
  },
  // ... more posts
];

export default function HomePage() {
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
