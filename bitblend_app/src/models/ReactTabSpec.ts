import React from 'react';

export interface ReactTabSpec {
  name: string;
  url: string;
  icon: string | [string, string];
  color: string;
  component: React.FC;
}
