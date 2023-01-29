import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import vector from '../images/Vector.svg';
import './VectorButton.css';

function VectorButton({ postIndex }) {
  return (
    <Link to={ `posts/${postIndex}` } className="vector">
      <img src={ vector } alt="Open post page" />
    </Link>
  );
}

VectorButton.propTypes = {
  postIndex: PropTypes.number,
}.isRequired;

export default VectorButton;
