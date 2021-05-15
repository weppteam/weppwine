import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>wepp</title>
      </Head>

      <h1>wepp</h1>
      <h1>Estrutura para projetos Next</h1>
      <p>A ReactJS + Next.js structure made by wepp.</p>
    </Container>
  )
}

export default Home
