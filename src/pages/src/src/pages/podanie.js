import React from 'react';
import Layout from '@theme/Layout';

export default function Podanie() {
  return (
    <Layout title="Podanie" description="Formularz podania">
      <main style={{ maxWidth: 900, margin: '2rem auto', padding: '1rem' }}>
        <h1>Podanie</h1>
        <p>Wypełnij formularz poniżej:</p>
        <iframe
          src="https://docs.google.com/forms/d/e/19LCSMzdpoy9y7Wvxz61n17cNdoC_nbLKol6RrhL-9ck/viewform?embedded=true"
          width="100%"
          height="1000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Formularz podania"
          style={{ border: 'none', minHeight: '800px' }}
        >
          Ładuję…
        </iframe>
      </main>
    </Layout>
  );
}
