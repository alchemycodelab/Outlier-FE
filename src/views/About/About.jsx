import React from 'react';
import { Link } from 'react-router-dom';
import css from '../../styles/About.css';
import greg from '../../../public/photos/greg.jpeg';
import joseph from '../../../public/photos/joseph.jpeg';
import madden from '../../../public/photos/madden.jpeg';

export default function About() {
  return (
    <div className={css.about}>
      <div className={css.joseph}>
        <img src={joseph} />
        <p className={css.name}>Joseph he/him</p>
        {/* <p className={css.text}></p> */}
        <div>
          {' '}
          Connect
          <a className={css.connect} href={'https://github.com/Joseph-K-B'}>
            -Github-|
          </a>
          <a
            className={css.connect}
            href={'https://www.linkedin.com/in/joseph-k-brown/'}
          >
            -LinkedIn-
          </a>
        </div>
      </div>

      <div className={css.madden}>
        <img src={madden} />
        <p className={css.name}>Madden they/them</p>
        {/* <p className={css.text}></p> */}
        <div>
          <a className={css.connect} href={'https://github.com/maddenlockin'}>
            -Github-|
          </a>
          <a
            className={css.connect}
            href={'https://www.linkedin.com/in/madden-lockin/'}
          >
            -LinkedIn-
          </a>
        </div>
      </div>

      <div className={css.greg}>
        <img src={greg} />
        <p className={css.name}>Greg he/him</p>
        {/* <p className={css.text}></p> */}
        <div>
          <a className={css.connect} href={'https://github.com/greg-gilliam'}>
            -Github-|
          </a>
          <a
            className={css.connect}
            href={'https://www.linkedin.com/in/gregory-gilliam/'}
          >
            -LinkedIn-
          </a>
        </div>
      </div>

      <div className={css.team}>
        <p>
          Joseph, Madden & Greg all come from strong backgrounds of social
          justice and equality for all people. They have laid down, marched and
          made their voices heard in many ways over the years. After some time
          in software development it became obvious that there was a
          new way for them to express themselves while helping others: Outlier.
          An outlier is a data point that differs significantly from other
          observations, generally encompassing populations such as LGBTQIAA+,
          persons of color (POC), houseless individuals and many others. Once
          development of the app was underway that need became even more
          apparent. Data regarding these groups was scarce, hard to understand
          and not in an open format. As the team continued to work on the
          project it became more than just another project, it became a labor of
          love. A labor of advocacy. We hope you enjoy using Outlier and visit
          our site regularly as we plan to continue development with more
          features and information.
        </p>
      </div>
    </div>
  );
}
