import * as React from 'react';

import { ExpoOverflowViewIssueViewProps } from './ExpoOverflowViewIssue.types';

export default function ExpoOverflowViewIssueView(props: ExpoOverflowViewIssueViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
