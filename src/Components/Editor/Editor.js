// components/Editor.js
import React from 'react';
import styles from './Editor.module.css';

const Editor = ({ language, value, onChange }) => {
  return (
    <div className={styles.editor}>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Write your ${language} code here`}
      />
    </div>
  );
};

export default Editor;
