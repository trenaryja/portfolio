import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Tag,
  TagLeftIcon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import projects from '../data/projects'

export const ProjectList = () => {
  const templateColumns = useBreakpointValue({ base: '1fr', md: '1fr 1fr' })
  return (
    <Grid gap={5} templateColumns={templateColumns}>
      {projects.map((project, i) => {
        return (
          <Card overflow="hidden" variant="outline" bg="blackAlpha.500" key={i}>
            <Image src={project.links.img} />
            <CardBody>
              <Grid gap={3}>
                <Heading size="lg">{project.title}</Heading>
                <Text>{project.description}</Text>
                <Flex flexWrap={'wrap'} gap={2}>
                  {project.technologies?.map((technology, i) => (
                    <Tag key={i} variant="outline">
                      <TagLeftIcon as={technology.icon} />
                      {technology.name}
                    </Tag>
                  ))}
                </Flex>
              </Grid>
            </CardBody>
            <CardFooter justify="space-around">
              <Link as={NextLink} href={project.links.visit}>
                Visit
              </Link>
              <Link as={NextLink} href={project.links.source}>
                Source
              </Link>
            </CardFooter>
          </Card>
        )
      })}
    </Grid>
  )
}
