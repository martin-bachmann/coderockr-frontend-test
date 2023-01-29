import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { fetchApi, GET_POSTS_URL } from '../services/fetchApi';
import './CompletePost.css';

function CompletePost() {
  const { id } = useParams();
  const [post, setPost] = useState({
    author: { name: '' },
    content: '',
    createdAt: '',
    image: '',
    title: '',
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPost = await fetchApi(`${GET_POSTS_URL}/${id}`);
      setPost(fetchedPost);
    };
    fetchPosts();
  }, []);

  console.log(post);

  return (
    <div className="background">
      <Header />
      <div className="post-content">
        <div className="content-header">
          <img src={ post.image } alt={ post.title } />
          <div className="content-details">
            <h3>{ post.createdAt }</h3>
            <h2>{ post.author.name }</h2>
            <h1>{ post.title }</h1>
          </div>
        </div>
        <p>{ post.content }</p>
      </div>
    </div>
  );
}

export default CompletePost;
