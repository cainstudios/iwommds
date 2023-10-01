import React from 'react';

import styles from './Image.scss';

export interface ImageProps {
  prop?: string;
}

export function Image({prop = 'default value'}: ImageProps) {
  return <div className={styles.Image}>Image {prop}</div>;
}
