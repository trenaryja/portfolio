import { Container, Theme, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { SocialButtons } from '.'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      marginTop: 'auto',
      padding: theme.spacing(5),
      backgroundColor: theme.palette.divider,
    },
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    madeBy: {
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(2),
      },
    },
    emoji: {
      color: 'transparent',
      textShadow: `0 0 0 ${theme.palette.primary.main}`,
    },
  }),
)

export const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Typography className={classes.madeBy}>
          Made with <span className={classes.emoji}>❤️</span> by Justin Trenary
        </Typography>
        <SocialButtons />
      </Container>
    </footer>
  )
}
