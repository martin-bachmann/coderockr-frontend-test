import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  }, [id]);

  const formatDate = (dateStr) => {
    const REMOVE_INDEX = -1;
    const date = new Date(dateStr.slice(0, REMOVE_INDEX));
    const formatedDate = date.toDateString().split(' ').slice(1).join(' ');
    return formatedDate;
  };

  return (
    <div>
      <div className="post-content">
        <div className="content-header">
          <img src={ post.image } alt={ post.title } />
          <div className="content-details">
            <h3>{ formatDate(post.createdAt) }</h3>
            <h2>{ post.author.name }</h2>
            <h1>{ post.title }</h1>
          </div>
        </div>
        <p>{ post.content }</p>
      </div>
      <div className="transparent-div" />
    </div>
  );
}

export default CompletePost;
