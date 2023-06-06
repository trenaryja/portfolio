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
import { motion } from 'framer-motion'
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

const TitleAccordion = ({ project }: { project: Project }) => (
  <Accordion allowMultiple>
    <AccordionItem border="none">
      <AccordionButton gap={3} justifyContent="center">
        <Heading size="md">{project.title}</Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel display="grid" gap={5}>
        <Text>{project.description}</Text>
        <Tags project={project} />
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)

const Buttons = ({ project }: { project: Project }) => (
  <Flex justify="center" gap={5}>
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
    <Grid overflow="hidden" gap={10} templateColumns={templateColumns} transition="all 1s ease-in-out">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card h="fit-content" overflow="hidden" variant="outline" bg="blackAlpha.500">
            <Image src={project.links.img} alt={project.title} />
            <CardBody>
              <Grid gap={5}>
                <TitleAccordion project={project} />
                <Buttons project={project} />
              </Grid>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </Grid>
  )
}
