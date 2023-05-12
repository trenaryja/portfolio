import { Container, Theme, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(5),
    },
  }),
)

export type SectionHeaderProps = {
  id: string
  text: string
}

export const SectionHeader = ({ id, text }: SectionHeaderProps) => {
  const classes = useStyles()

  return (
    <Container id={id} className={classes.container}>
      <Typography variant="h2" align="center" gutterBottom>
        {text}
      </Typography>
    </Container>
  )
}
