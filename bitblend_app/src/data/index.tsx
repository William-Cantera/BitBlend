import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink, red, purple } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import university from './json/university.json';
import experiences from './json/experiences.json';
import pkg from '../../package.json';

import { calculateDiplomaProgress } from '../utils';
import ContactForm from '../components/HtmlTab/Contact';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faBriefcase,
  faRandom,
} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope);
library.add(faBriefcase);
library.add(faRandom);

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  {
    name: 'Software Engineering',
    url: '/university',
    icon: 'graduation-cap',
    isInternal: true,
    badge: `${calculateDiplomaProgress(university, 0)}%`,
    comp: () => <Diploma diplomaData={university} />,
  },
  {
    name: 'Experiences',
    url: '/experiences',
    icon: 'random',
    isInternal: true,
    comp: () => <Diploma diplomaData={experiences} />,
  },
];

export const tabs: TabLink[] = [
  {
    name: 'skills.js',
    url: '/skills',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'skills',
  },
  {
    name: 'career.docx',
    url: '/career',
    icon: faBriefcase,
    color: purple,
    mdFileName: 'career',
  },
  {
    name: '.educationrc',
    url: '/education',
    icon: 'university',
    color: midBlue,
    mdFileName: 'education',
  },
  {
    name: 'projects.config',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projects',
  },
  {
    name: 'certificates.sass',
    url: '/certificates',
    icon: ['fab', 'sass'],
    color: pink,
    mdFileName: 'certificates',
  },
  {
    name: 'contact.msg',
    url: '/contact',
    icon: faEnvelope,
    color: red,
    component: ContactForm,
  },
];
