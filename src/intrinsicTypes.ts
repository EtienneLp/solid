/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  type AnimationSettings,
  type Dimensions,
  type INode,
  type INodeAnimatableProps,
  type INodeWritableProps,
  type ITextNodeWritableProps,
  type NodeFailedPayload,
  type NodeLoadedPayload,
} from '@lightningjs/renderer';
import { type JSX } from 'solid-js';
import { type ElementNode } from './core/node/index.js';
import type { NodeStates } from './core/node/states.js';

export type AnimatableNumberProp = [
  value: number,
  settings: Partial<AnimationSettings>,
];

export interface BorderStyleObject {
  width: number;
  color: number;
}

export type BorderStyle = number | BorderStyleObject;

export interface IntrinsicNodeCommonProps {
  animate?: boolean;
  animationSettings?: Partial<AnimationSettings>;
  autofocus?: boolean;
  forwardStates?: boolean;
  id?: string;
  onBeforeLayout?: (child: ElementNode, dimensions: Dimensions) => void;
  onCreate?: (target: INode, nodeFailedPayload: NodeFailedPayload) => void;
  onFail?: (target: INode, nodeFailedPayload: NodeFailedPayload) => void;
  onLayout?: (child: ElementNode, dimensions: Dimensions) => void;
  onLoad?: (target: INode, nodeLoadedPayload: NodeLoadedPayload) => void;
  ref?: ElementNode | ((node: ElementNode | null) => void) | null | undefined;
  selected?: number;
  states?: NodeStates;
  text?: string;
}

export interface IntrinsicStyleCommonProps {
  alignItems?: 'flexStart' | 'flexEnd' | 'center';
  border?: BorderStyle;
  borderBottom?: BorderStyle;
  borderLeft?: BorderStyle;
  borderRadius?: number;
  borderRight?: BorderStyle;
  borderTop?: BorderStyle;
  display?: 'flex';
  effects?: any; // Should be EffectMap
  flexDirection?: 'row' | 'column';
  gap?: number;
  justifyContent?:
    | 'flexStart'
    | 'flexEnd'
    | 'center'
    | 'spaceBetween'
    | 'spaceEvenly';
  linearGradient?: any; // Should be typeof LinearGradientEffect
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
}

type AddUndefined<T> = {
  [K in keyof T]: T[K] | undefined;
};

export type IntrinsicCommonProps = AddUndefined<
  IntrinsicNodeCommonProps & IntrinsicStyleCommonProps
>;

// TODO: Add this concept back in and come up with a way to properly type it so it works
// internally and externally.
//
// Type that transforms all number typed properties to a tuple
type TransformAnimatableNumberProps<T> = {
  [K in keyof T]?: number extends T[K] ? number | AnimatableNumberProp : T[K];
};

export type TransformableNodeWritableProps = TransformAnimatableNumberProps<
  Omit<INodeAnimatableProps, 'zIndex' | 'zIndexLocked'>
>;

export interface IntrinsicNodeStyleProps
  extends Partial<
      Omit<
        INodeWritableProps,
        'parent' | 'shader' | keyof TransformableNodeWritableProps
      >
    >,
    TransformableNodeWritableProps,
    IntrinsicStyleCommonProps {}

export interface IntrinsicTextNodeStyleProps
  extends Partial<Omit<ITextNodeWritableProps, 'parent' | 'shader'>>,
    IntrinsicStyleCommonProps {}

export interface IntrinsicNodeProps
  extends IntrinsicNodeStyleProps,
    IntrinsicNodeCommonProps {
  style?: IntrinsicNodeStyleProps;
  children?: JSX.Element;
}

export interface IntrinsicTextProps
  extends IntrinsicTextNodeStyleProps,
    IntrinsicNodeCommonProps {
  style?: IntrinsicTextNodeStyleProps;
  children: string | string[];
}

export type NodeStyles = IntrinsicNodeStyleProps;
export type TextStyles = IntrinsicTextNodeStyleProps;
export type NodeProps = IntrinsicNodeProps;
export type TextProps = IntrinsicTextProps;
