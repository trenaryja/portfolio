import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import { BackToTop, Footer, Header } from '.'
import theme from '../styles/theme'

const useStyles = makeStyles(() =>
  createStyles({
    layout: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      display: 'grid',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    particles: { opacity: 0.2, zIndex: -1 },
  }),
)

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.layout}>
      <Header />
      <main className={classes.main}>{children}</main>
      <BackToTop />
      <Footer />
    </Box>
  )
}
