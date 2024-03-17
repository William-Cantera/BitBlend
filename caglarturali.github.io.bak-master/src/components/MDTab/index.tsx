/**
 * MDTab component.
 */
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Container from '../Container';
import { createUseStyles } from 'react-jss';
import styles from './styles';

import { content as markdownContent } from '../../data/tabs/skills.md';

const useStyles = createUseStyles(styles);

export interface MDTabProps {
  fileName: string;
}

const MDTab: React.FC<MDTabProps> = ({ fileName }) => {
  const [contents, setContents] = useState<string>(markdownContent);
  const classes = useStyles();

  // No need for useEffect or fetching the file

  return (
    <Container seo={{ title: fileName }}>
      <ReactMarkdown className={classes.mdpage} source={contents} />
    </Container>
  );
};

export default MDTab;
