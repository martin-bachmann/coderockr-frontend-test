import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrow from '../images/Arrow.svg';
import './ArrowButton.css';

function ArrowButton({ postIndex }) {
  return (
    <Link to={ `posts/${postIndex}` } className="arrow">
      <img src={ arrow } alt="Open post page" />
    </Link>
  );
}

ArrowButton.propTypes = {
  postIndex: PropTypes.number,
}.isRequired;

export default ArrowButton;
