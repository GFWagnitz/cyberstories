import {PostItem, PostItemProps} from './PostItem';

function PostsList(props: { posts: PostItemProps[] }) {
    return (
      <div className=''>
        {props.posts.map((post: PostItemProps, index: number) => (
          <PostItem key={index} {...post} />
        ))}
      </div>
    );
  }
  
  export default PostsList;