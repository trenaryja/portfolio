import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Tag,
  TagRightIcon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { Project, projects } from '../data'

const Tags = ({ project }: { project: Project }) => (
  <Flex flexWrap="wrap" gap={2} justify="center">
    {project.tech?.map((tech, i) => (
      <Tag size="sm" borderRadius="full" key={i} variant="outline">
        {tech.name}
        <TagRightIcon as={tech.icon} />
      </Tag>
    ))}
  </Flex>
)

const TitleAndDescription = ({ project }: { project: Project }) => (
  <Accordion allowMultiple>
    <AccordionItem>
      <AccordionButton justifyContent="space-between">
        <Heading size="md">{project.title}</Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <Text>{project.description}</Text>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)

const Buttons = ({ project }: { project: Project }) => (
  <Flex justify="space-around">
    <Link as={NextLink} href={project.links.visit}>
      <Button rightIcon={<MdOutlineOpenInNew />}>Visit</Button>
    </Link>
    <Link as={NextLink} href={project.links.source}>
      <Button rightIcon={<FaGithub />}>Source</Button>
    </Link>
  </Flex>
)

export const ProjectList = () => {
  const templateColumns = useBreakpointValue({ base: '1fr', md: '1fr 1fr' })
  return (
    <Grid gap={5} templateColumns={templateColumns}>
      {projects.map((project, i) => (
        <Card overflow="hidden" variant="outline" bg="blackAlpha.500" key={i}>
          <Image src={project.links.img} alt={project.title} />
          <CardBody>
            <Grid gap={3} templateRows="auto 1fr auto" h="100%">
              <Tags project={project} />
              <TitleAndDescription project={project} />
              <Buttons project={project} />
            </Grid>
          </CardBody>
        </Card>
      ))}
    </Grid>
  )
}
