import React from 'react';
import { Link } from 'react-router-dom';
import css from './About.css';
import greg from '../../../public/photos/greg.jpeg';
import joseph from '../../../public/photos/joseph.jpeg';
import madden from '../../../public/photos/madden.jpeg';

export default function AboutComponent() {
  return (
    <div className={css.about}>
      <div className={css.joseph}>
        {/* <img src={joseph} /> */}
        <p className={css.name}>Joseph he/him</p>
        <p className={css.text}>Here is some text about Joseph.</p>
        <div> Connect 
          <a className={css.connect} href={"https://github.com/Joseph-K-B"}>-Github-|</a>
          <a className={css.connect} href={"https://www.linkedin.com/in/joseph-k-brown/"}>-LinkedIn-</a>
        </div>
      </div>

      <div className={css.madden}>
        {/* <img src={madden} /> */}
        <p className={css.name}>Madden they/them</p>
        <p className={css.text}>Here is some text about Madden.</p>
        <div>
          <a className={css.connect} href={"https://github.com/maddenlockin"}>-Github-|</a>
          <a className={css.connect} href={"https://www.linkedin.com/in/madden-lockin/"}>-LinkedIn-</a>
        </div>
      </div>

      <div className={css.greg}>
        {/* <img src={greg} /> */}
        <p className={css.name}>Greg he/him</p>
        <p className={css.text}>Here is some text about Greg</p>
        <div>
          <a className={css.connect} href={"https://github.com/greg-gilliam"}>-Github-|</a>
          <a className={css.connect} href={"https://www.linkedin.com/in/gregory-gilliam/"}>-LinkedIn-</a>
        </div>
      </div>
    </div>
  );
}
