import React from 'react';
import './card.css';

import SubTitle from '../SubTitle/index';
import SubTitleH3 from '../SubTitleH3/index';

const Card = ({ suTitle, suTitleH3, data, info }) => (
  <div>
    <SubTitle texto={suTitle} />
    <SubTitleH3 texto={suTitleH3} />
    <div className="info">
      <span className="highlight"> {data} </span>
    </div>
    <p>{info}</p>
  </div>
);

export default Card;
