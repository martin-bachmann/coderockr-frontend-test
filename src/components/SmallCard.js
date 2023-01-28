import React from 'react';
import PropTypes from 'prop-types';
import './SmallCard.css';

function SmallCard({ post }) {
  const { author, content, image, title } = post;
  return (
    <div className="small-card">
      <img src={ image } alt={ title } />
      <div className="content-inner">
        <h2>{ author.name }</h2>
        <h1>{ title }</h1>
        <p>{ content }</p>
      </div>
    </div>
  );
}

SmallCard.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
}.isRequired;

export default SmallCard;
