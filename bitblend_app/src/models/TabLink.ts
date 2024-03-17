import { TabSpec } from './TabSpec';

export interface TabLink extends TabSpec {
  mdFileName?: string;
  component?: React.ComponentType;
}
