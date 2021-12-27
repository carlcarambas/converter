import type { NextPage } from 'next'
import React from 'react'
import styles from '../styles/Home.module.css'
import MainLayout from '@components/layouts/main'

import CssBaseline from '@mui/material/CssBaseline'
import { Paper } from '@mui/material'
import Container from '@mui/material/Container'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Paper className={styles.mainContainer}>
          <MainLayout />
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default Home
