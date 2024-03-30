'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Test } from '@/src/components';

interface Props {
  styles?: ClassNameValue;
}

export function HomePage({ styles, }: Props) {
  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        <Test />
      </div>
    </>
  );
}
