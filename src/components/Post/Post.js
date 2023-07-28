import { useNavigate, useParams } from "react-router-dom";

import './Post.css';
import backIcon from '../../icons/back-icon.svg';

function Post({ posts, users }) {
    const { id: post_id } = useParams();
    const navigate = useNavigate();

    let post = {};
    if (posts.length > 0) {
        post = posts.find((post) => 'id' in post && post.id.toString() === post_id);
    }
    if (post && 'userId' in post) {
        let user = {};
        if (users.length > 0) {
            user = users.find((user) => 'id' in user && 'userId' in post && user.id.toString() === post.userId.toString());
            if ('name' in user) {
                post.user = user.name;
            }
        }
    }

    return (
        <div className='post' id={post.id}>
            <div className='post-title'>{post.id} - {post.title}</div>
            <div className='post-user'>{post.user}</div>
            <div className='post-body'>{post.body}</div>
            <img src={backIcon} alt='Back Icon' onClick={() => navigate(-1)}></img>
        </div>
    );
}

export default Post;