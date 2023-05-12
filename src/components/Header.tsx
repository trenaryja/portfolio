import { AppBar, Button, Toolbar } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { scrollTo } from '../utils/utils'

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  }),
)

export const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Button onClick={() => scrollTo('about')}>About</Button>
        <Button onClick={() => scrollTo('projects')}>Projects</Button>
        <Button onClick={() => scrollTo('contact')}>Contact</Button>
      </Toolbar>
    </AppBar>
  )
}
