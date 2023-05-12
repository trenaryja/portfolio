import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Theme,
  Typography,
} from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { ProjectCardProps } from '../data/projects'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    actions: {
      marginTop: 'auto',
      alignSelf: 'center',
      paddingBottom: theme.spacing(2),
    },
    chipbox: {
      textAlign: 'center',
    },
    chip: {
      padding: theme.spacing(1),
      margin: theme.spacing(0.5),
      fontSize: theme.typography.fontSize * 1.1,
    },
    image: {
      aspectRatio: '16/9',
      display: 'block',
      width: '100%',
    },
  }),
)

export const ProjectCard = ({ title, links, description, technologies }: ProjectCardProps) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      <CardMedia sx={{ aspectRatio: '16/9' }} src={links?.img}>
        <img className={classes.image} src={links?.img} alt="screenshot of site" />
      </CardMedia>
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardContent>
        <Box className={classes.chipbox}>
          {technologies?.map((x, i) => (
            <Chip key={i} className={classes.chip} variant="outlined" icon={x.icon} label={x.name} />
          ))}
        </Box>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="outlined" href={links?.visit}>
          Visit
        </Button>
        <Button variant="outlined" href={links?.source}>
          Source
        </Button>
      </CardActions>
    </Card>
  )
}
