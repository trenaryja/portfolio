import { Button, Heading, HeadingProps } from '@chakra-ui/react'
import { scrollTo } from '../utils'

export const HashHeading = ({ id, ...props }: HeadingProps) => (
	<Button variant='link' onClick={() => scrollTo(id)} w='fit-content'>
		<Heading
			id={id}
			py={3}
			sx={{
				'&:hover::after': {
					content: `" #"`,
					textDecoration: 'none',
				},
			}}
			{...props}
		/>
	</Button>
)
