import { content as certificatesMd } from './tabs/certificates.md';
import { content as educationMd } from './tabs/education.md';
import { content as projectsMd } from './tabs/projects.md';
import { content as skillsMd } from './tabs/skills.md';
import { content as careerMd } from './tabs/career.md';

interface MarkdownFiles {
  [key: string]: string;
}

export const markdownFiles: MarkdownFiles = {
  'certificates.md': certificatesMd,
  'education.md': educationMd,
  'projects.md': projectsMd,
  'skills.md': skillsMd,
  'career.md': careerMd,
};
