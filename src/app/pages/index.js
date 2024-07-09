"use client"
import React, { useState } from 'react';

import styles from '@/app/';
import Editor from '@/Components/Editor/Editor';
import Preview from '@/Components/Preview/Preview';

export default function Home() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.editors}>
        <Editor/>
        <Preview/>
      </div>
    </div>
  );
}
