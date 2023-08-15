import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoOverflowViewIssue.web.ts
// and on native platforms to ExpoOverflowViewIssue.ts
import ExpoOverflowViewIssueModule from './ExpoOverflowViewIssueModule';
import ExpoOverflowViewIssueView from './ExpoOverflowViewIssueView';
import { ChangeEventPayload, ExpoOverflowViewIssueViewProps } from './ExpoOverflowViewIssue.types';

// Get the native constant value.
export const PI = ExpoOverflowViewIssueModule.PI;

export function hello(): string {
  return ExpoOverflowViewIssueModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoOverflowViewIssueModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoOverflowViewIssueModule ?? NativeModulesProxy.ExpoOverflowViewIssue);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoOverflowViewIssueView, ExpoOverflowViewIssueViewProps, ChangeEventPayload };
