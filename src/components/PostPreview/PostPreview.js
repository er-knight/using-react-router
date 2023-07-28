import './PostPreview.css';

function PostPreview(props) {
    return (
        <div className='post-preview' id={props.post_id}>
            <div className='post-preview-title'>{props.post_id} - {props.title}</div>
            <div className='post-preview-user'>{props.user}</div>
        </div>
    );
}

export default PostPreview;