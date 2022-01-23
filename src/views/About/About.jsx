import React from 'react';
import css from '../../styles/layout.css';
import text_style from '../../styles/text.css'
import greg from '../../../public/photos/greg.jpeg';
import joseph from '../../../public/photos/joseph.jpeg';
import madden from '../../../public/photos/madden.jpeg';

export default function About() {
  return (
    <div className={css.about}>
      <div className={css.left}>
        <img src={joseph} className={css.joseph}/>
        <div className={css.left_info}>
          <h2 className={css.name}>Joseph he/him</h2>
          <p className={css.text}>
            Software Engineer, Creative Designer, and Musician
          </p>
          <div>
            <a className={css.connect} href={'https://github.com/Joseph-K-B'}>
              -Github- |
            </a>
            <a
              className={css.connect}
              href={'https://www.linkedin.com/in/joseph-k-brown/'}
            >
              {' '}
              -LinkedIn-
            </a>
          </div>
        </div>
      </div>
      <div className={css.right}>
        <div className={css.right_info}>
          <h2 className={css.name}>Madden they/them</h2>
          <p className={css.text}>
            Software Dev, Trans Advocate and Youth Mentor, Organization Nerd
          </p>
          <div>
            <a className={css.connect} href={'https://github.com/maddenlockin'}>
              -Github- |
            </a>
            <a
              className={css.connect}
              href={'https://www.linkedin.com/in/madden-lockin/'}
            >
              -LinkedIn-
            </a>
          </div>
        </div>
        <img src={madden} className={css.madden}/>
      </div>

      <div className={css.left}>
        <img src={greg} className={css.greg}/>
        <div className={css.left_info}>
          <h2 className={css.name}>Greg he/him</h2>
          <p className={css.text}>
            Full Stack Software Developer,  Sci-Fi & Horror Buff, Accuracy Wizard
          </p>
          <div>
            <a className={css.connect} href={'https://github.com/greg-gilliam'}>
              -Github- |
            </a>
            <a
              className={css.connect}
              href={'https://www.linkedin.com/in/gregory-gilliam/'}
            >
              -LinkedIn-
            </a>
          </div>
        </div>
      </div>

      <div className={text_style.team}>
        <p>
          Joseph, Madden & Greg all come from strong backgrounds of social
          justice and equality for all people. They have laid down, marched and
          made their voices heard in many ways over the years. After some time
          in software development it became obvious that there was a new way for
          them to express themselves while helping others: Outlier. An outlier
          is a data point that differs significantly from other observations,
          generally encompassing populations such as LGBTQIAA+, persons of color
          (POC), houseless individuals and many others. Once development of the
          app was underway that need became even more apparent. Data regarding
          these groups was scarce, hard to understand and not in an open format.
          As the team continued to work on the project it became more than just
          another project, it became a labor of love. A labor of advocacy. We
          hope you enjoy using Outlier and visit our site regularly as we plan
          to continue development with more features and information.
        </p>
      </div>
    </div>
  );
}