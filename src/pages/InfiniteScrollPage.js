import React, { useCallback, useEffect, useRef, useState } from 'react';
import BigCard from '../components/BigCard';
import ContentRow from '../components/ContentRow';
import Header from '../components/Header';
import { fetchApi, GET_POSTS_URL } from '../services/fetchApi';
import './InfiniteScrollPage.css';

const PAGE_SIZE = 6;

const CARDS_INTERVAL = 3;

/* eslint-disable sonarjs/cognitive-complexity */
function InfiniteScrollPage() {
  const [posts, setPosts] = useState([]);
  const [cards, setCards] = useState([]);
  const [currentSize, setCurrentSize] = useState(0);
  const loader = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetchApi(GET_POSTS_URL);
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setCurrentSize((prev) => prev + PAGE_SIZE);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    if (posts.length > 0) {
      const cardsArray = [];
      let isLeft = true;
      for (let i = 1; i < currentSize && i < posts.length; i += 1) {
        if ((i + 1) % CARDS_INTERVAL === 0) {
          isLeft = !isLeft;
          cardsArray.push(<BigCard
            post={ posts[i] }
            cssClass={ isLeft ? 'left' : 'right' }
            key={ i }
          />);
          i += 1;
          console.log(isLeft);
        } else {
          cardsArray.push(
            <ContentRow
              firstPost={ posts[i - 1] }
              secondPost={ posts[i] }
              cssClass={ isLeft ? 'left' : 'right' }
              key={ i }
            />,
          );
        }
      }

      setCards(cardsArray);
    }
  }, [currentSize, posts]);

  return (
    <div className="background">
      <Header />
      <div className="posts">
        {
          cards.length > 0 ? cards.map((item) => item) : <div />
        }
      </div>
      <div ref={ loader } />
    </div>
  );
}

export default InfiniteScrollPage;
