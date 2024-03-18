/**
 * Diploma component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import Container from '../../components/Container';
import Semester from './components/Semester';
import { DiplomaTypes } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface DiplomaProps {
  diplomaData: DiplomaTypes.Curriculum;
}

const Diploma: React.FC<DiplomaProps> = ({ diplomaData }) => {
  const classes = useStyles();
  const {
    semesters,
    metadata: { title, subtitle, info, button },
  } = diplomaData;

  const downloadTranscript = () => {
    if (button && button.url) {
      // Create an anchor element
      const anchor = document.createElement('a');

      // Set the href and download attributes
      anchor.href = button.url;
      anchor.download = button.url.split('/').pop() || 'cantera_transcript.pdf';

      // Programmatically click the anchor element to trigger the download
      anchor.click();
    }
  };

  return (
    <Container seo={{ title: subtitle ? `${title}, ${subtitle}` : title }}>
      <div
        data-tip={info || title}
        data-class={classes.tip}
        className={classes.title}
      >
        <h2>{title}</h2>
        <FontAwesomeIcon icon="question-circle" />
        {subtitle && <p>{subtitle}</p>}
      </div>
      <br></br>
      {button && (
        <button className={classes.button} onClick={downloadTranscript}>
          {button.text}
        </button>
      )}
      <div className={classes.contents}>
        {semesters.map((s) => (
          <Semester semesterData={s} key={s.name} />
        ))}
      </div>
      <ReactTooltip />
    </Container>
  );
};

export default Diploma;
