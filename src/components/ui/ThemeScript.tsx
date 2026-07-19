import React from "react";

export const ThemeScript: React.FC = () => {
  const code = `
    (function() {
      try {
        var theme = localStorage.getItem('metawie_theme');
        var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (theme === 'dark' || (!theme && darkQuery.matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })()
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
};
