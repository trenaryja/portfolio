import { Box, Button, chakra, shouldForwardProp, useBreakpointValue } from '@chakra-ui/react'
import { isValidMotionProp, motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { scrollToTop } from '../utils'

const MotionBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false)
	const toggleVisibility = () => setIsVisible(window.pageYOffset > 500)
	const { scrollYProgress } = useScroll()
	const offset = useBreakpointValue({ base: 1, md: 10 })

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	if (isVisible)
		return (
			<Box position='fixed' zIndex='toast' bottom={offset} right={offset} transition='all 500ms ease-in-out'>
				<Button variant='outline' onClick={scrollToTop}>
					<MotionBox
						position='absolute'
						zIndex={-1}
						borderRadius='inherit'
						inset={0}
						bg='whiteAlpha.100'
						style={{ scale: scrollYProgress }}
					></MotionBox>
					<FaArrowUp />
				</Button>
			</Box>
		)
	else return null
}
