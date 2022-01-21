import React from 'react';
import { Link } from 'react-router-dom';
import css from './About.css';
// import greg from '../../../public/photos/greg.jpeg';
// import joseph from '../../../public/photos/joseph.png';
// import madden from '../../../public/photos/madden.jpg';

export default function AboutComponent() {
  return (
    <div>
      <div className={css.joseph}>
        {/* <img src="../../../public/photos/joseph.png" /> */}
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLVJ9foZGxxjhG-wOyLkCRbOvV2tLKvlvSoW_hZwAFCZntYZ5ejKldjabwBcBtOU_jgT3jcLtHkHj6ltAu_yzYjPRYeuRwtioSo4dQj2O055Rr8UyqVC9lZ3lftyk1EXDWkfqBm1tMTOvHh6tWS-ogM=w2399-h1799-no?authuser=2" />
        <p>Here is some text about Joseph.</p>
      </div>
      {/* </section> */}
      {/* <section> */}
      <div className="Madden">
        <img src="../../../public/photos/madden.jpg" />
        Here is some text about Madden.
      </div>
      {/* </section> */}
      {/* <section> */}
      <div className="Greg">
        <img src="../../../public/photos/greg.jpeg" />
        <p>Here is some text about Greg</p>
      </div>
    </div>
  );
}
