import { useEffect, useState } from 'react';
import './App.css';

import PostPreviewPage from './components/PostPreviewPage/PostPreviewPage';
import Post from './components/Post/Post';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    function fetchPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            }).catch(error => console.log(error));
    }

    function fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            }).catch(error => console.log(error));
    }

    useEffect(() => {
        fetchPosts();
        fetchUsers();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PostPreviewPage posts={posts} users={users}></PostPreviewPage>}></Route>
                    <Route path="/posts/:id" element={<Post posts={posts} users={users}></Post>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
