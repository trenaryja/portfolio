import { Container, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { ProjectCard, SectionHeader } from '.'
import projects, { ProjectCardProps } from '../data/projects'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      display: 'grid',
      gap: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
      },
    },
  }),
)

export const ProjectList = () => {
  const classes = useStyles()

  return (
    <Container>
      <SectionHeader id="projects" text="Projects" />
      <div className={classes.grid}>
        {projects.map((x: ProjectCardProps) => (
          <ProjectCard key={x.title} {...x} />
        ))}
      </div>
    </Container>
  )
}
