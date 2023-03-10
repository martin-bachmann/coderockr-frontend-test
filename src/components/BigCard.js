import React from 'react';
import PropTypes from 'prop-types';
import './BigCard.css';
import ArrowButton from './ArrowButton';

function BigCard({ post, cssClass }) {
  const { author, content, image, title, id } = post;
  return (
    <div className={ `big-card ${cssClass}-big-card` }>
      <img src={ image } alt={ title } />
      <div className="content-inner">
        <h2>{ author.name }</h2>
        <h1>{ title }</h1>
        <p>{ content }</p>
      </div>
      <ArrowButton postIndex={ id } />
    </div>
  );
}

BigCard.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
}.isRequired;

export default BigCard;
