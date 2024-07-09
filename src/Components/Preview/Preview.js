// components/Preview.js
import React, { useEffect, useRef } from 'react';

const Preview = ({ html, css, js }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const document = iframeRef.current.contentDocument;
    document.open();
    document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
      </html>
    `);
    document.close();
  }, [html, css, js]);

  return <iframe ref={iframeRef} style={{ width: '100%', height: '100%' }} />;
};

export default Preview;
