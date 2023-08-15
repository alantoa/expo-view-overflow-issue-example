import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoOverflowViewIssueViewProps } from './ExpoOverflowViewIssue.types';

const NativeView: React.ComponentType<ExpoOverflowViewIssueViewProps> =
  requireNativeViewManager('ExpoOverflowViewIssue');

export default function ExpoOverflowViewIssueView(props: ExpoOverflowViewIssueViewProps) {
  return <NativeView {...props} />;
}
