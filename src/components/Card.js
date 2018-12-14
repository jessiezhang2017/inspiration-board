import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  // constructor(props){
  //   super(props);
  //
  // }


  render() {
    name=JSON.stringify(emojiName);
    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{emoji.getUnicode("heart_eyes")}</p>
        </section>
      </div>
    );
  }
}

Card.propTypes = {
   text: PropTypes.string.isRequired,
   emoji1: PropTypes.string,
}

export default Card;
