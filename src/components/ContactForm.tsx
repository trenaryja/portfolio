import { Button, Card, CardBody, FormControl, Grid, Input, Textarea, useToast } from '@chakra-ui/react'
import { FormEvent } from 'react'
import { MdSend } from 'react-icons/md'
import { sendEmail } from '../utils'

export const ContactForm = () => {
  const toast = useToast()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await sendEmail(e)
      toast({
        title: 'Email Sent!',
        description: 'I will get back to you as soon as possible.',
        status: 'success',
      })
    } catch (error) {
      console.error(error)
      toast({
        title: 'An error occurred.',
        description: 'Unable to send email. Please try again later.',
        status: 'error',
      })
    }
  }

  return (
    <Card bg="blackAlpha.500">
      <CardBody>
        <FormControl>
          <Grid
            templateAreas={{
              base: "'firstName' 'lastName' 'email' 'phoneNumber' 'message' 'submit'",
              md: "'firstName lastName' 'email phoneNumber' 'message message' 'submit submit'",
            }}
            as="form"
            id="contactForm"
            onSubmit={handleSubmit}
            gap={5}
          >
            <Input required name="firstName" gridArea="firstName" placeholder="First Name" />
            <Input required name="lastName" gridArea="lastName" placeholder="Last Name" />
            <Input required name="email" gridArea="email" placeholder="Email" />
            <Input name="phoneNumber" gridArea="phoneNumber" placeholder="Phone Number" />
            <Textarea required name="message" gridArea="message" placeholder="Message" />
            <Button w="fit-content" m="auto" gridArea="submit" type="submit" rightIcon={<MdSend />}>
              Send
            </Button>
          </Grid>
        </FormControl>
      </CardBody>
    </Card>
  )
}
