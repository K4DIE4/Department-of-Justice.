import React from 'react';
import Layout from '@theme/Layout';

export default function Kompendium() {
  return (
    <Layout title="Kompendium" description="Moje kompendium">
      <main style={{ maxWidth: 900, margin: '2rem auto', padding: '1rem', backgroundColor: '#121212', color: '#eee', fontFamily: "'Times New Roman', serif", lineHeight: 1.6 }}>
        <h1>Kompendium</h1>
        <p>Pełne kompendium znajduje się <a href="https://docs.google.com/document/d/1ezpZinJMPyR2MkDlx184JCqy4QpEi5zL24KlTiYu73A/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: '#f0a500'}}>tutaj</a>.</p>
      </main>
    </Layout>
  );
}
