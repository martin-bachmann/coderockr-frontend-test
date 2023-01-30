import React from 'react';
import PropTypes from 'prop-types';
import SmallCard from './SmallCard';
import './ContentRow.css';

function ContentRow({ firstPost, secondPost, cssClass }) {
  return (
    <div className={ `content-row ${cssClass}-row` }>
      <SmallCard post={ firstPost } />
      <SmallCard post={ secondPost } />
    </div>
  );
}

ContentRow.propTypes = {
  firstPost: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
  secondPost: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
}.isRequired;

export default ContentRow;
