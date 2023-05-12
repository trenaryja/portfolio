import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { scrollToTop } from '../utils'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(window.pageYOffset > 500)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (isVisible)
    return (
      <Button position="fixed" bottom={10} right={10} variant="outline" onClick={scrollToTop}>
        <FaArrowUp />
      </Button>
    )
  else return null
}
