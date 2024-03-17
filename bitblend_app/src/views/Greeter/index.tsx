/**
 * Greeter component.
 */
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { createUseStyles } from 'react-jss';
import MainButtons, { MainButtonsProps } from './components/MainButtons';
import SEO from '../../components/SEO';
import { Static } from '../../models';
import { randomHello } from '../../utils';
import styles from './styles';
import portrait from '../../images/william_cantera.jpg';

const useStyles = createUseStyles(styles);

export interface GreeterProps extends MainButtonsProps {
  staticData: Static;
}

const Greeter: React.FC<GreeterProps> = ({
  staticData,
  contactData,
  repoUrl,
}) => {
  const classes = useStyles();

  useEffect(() => {
    const options = {
      strings: staticData.typed,
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed('#typed-insert-point', options);

    return () => {
      // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      typed.destroy();
    };
  }, [staticData]);

  const hello = randomHello();

  return (
    <>
      <SEO title={hello} />
      <section className={classes.root}>
        <img
          src={portrait}
          alt="Portrait of myself"
          height="30%"
          width="auto"
          style={{ borderRadius: '20%', marginBottom: '50px' }}
        ></img>
        <h1 className={classes.heading}>{staticData.mainLine}</h1>
        <div className={classes.typedWrap}>
          <span id="typed-insert-point" style={{ whiteSpace: 'pre' }} />
        </div>
        <MainButtons contactData={contactData} repoUrl={repoUrl} />
      </section>
    </>
  );
};

export default Greeter;
