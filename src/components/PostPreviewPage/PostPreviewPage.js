import PostPreview from '../PostPreview/PostPreview';
import { Link } from 'react-router-dom';
import './PostPreviewPage.css';

function PostPreviewPage({posts, users}) {
    if (posts.length > 0) {
        posts = posts.map((post) => {
            let user = {};
            if (users.length > 0) {
                user = users.find((user) => 'id' in user && 'userId' in post && user.id.toString() === post.userId.toString());
                if ('name' in user) {
                    post.user = user.name;
                }
            }
            return post;
        });
    }

    return (
        <div className='post-preview-page'>
            <h3>Post Preview Page</h3>
            {posts && posts.map((post, key) => 
                <Link key={key} to={`/posts/${post.id}`}><PostPreview key={key} post_id={post.id} title={post.title} user={post.user}></PostPreview></Link>
            )}
        </div>
    );
}

export default PostPreviewPage;