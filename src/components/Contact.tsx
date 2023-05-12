import { Box, Button, Container, Paper, TextField, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { FormEvent, useState } from 'react'
import { SectionHeader, Toast } from '.'
import { getFormData, sendEmail } from '../utils/utils'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerFields: {
      display: 'grid',
      gap: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
      },
    },
    form: {
      display: 'grid',
      gridAutoFlow: 'row',
      gap: theme.spacing(3),
      padding: theme.spacing(3),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  }),
)

export const Contact = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const classes = useStyles()

  const validateForm = (e: FormEvent) => {
    const formData = getFormData(e)
    return formData.message.length > 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm(e)) {
      setError(true)
      return
    }
    setError(false)
    setLoading(true)
    setOpen(true)
    await sendEmail(e)
    setLoading(false)
  }

  return (
    <Container>
      <SectionHeader id="contact" text="Contact" />
      <Paper>
        <form id="contactForm" noValidate className={classes.form} onSubmit={handleSubmit}>
          <Box className={classes.headerFields}>
            <TextField fullWidth name="firstName" label="First Name" />
            <TextField fullWidth name="lastName" label="Last Name" />
            <TextField fullWidth name="email" label="Email Address" />
            <TextField fullWidth name="phoneNumber" label="Phone Number" />
          </Box>
          <Box>
            <TextField
              name="message"
              label="Message"
              multiline={true}
              minRows={5}
              fullWidth
              required
              error={error}
              helperText={error && 'Message is Required'}
            />
          </Box>
          <Box className={classes.buttons}>
            <Button type="submit" variant="outlined">
              Send
            </Button>
          </Box>
        </form>
      </Paper>
      <Toast
        loading={loading}
        open={open}
        onClose={() => setOpen(false)}
        loadingText="Sending Email..."
        successText="Email Sent!"
      />
    </Container>
  )
}
