import { Alert, Paper, Snackbar, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    snackbar: {
      [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(8),
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(10),
      },
    },
  }),
)

export type ToastProps = {
  loading: boolean
  open: boolean
  onClose: () => void
  loadingText: string
  successText: string
}

export const Toast = ({ open, loading, onClose, loadingText, successText }: ToastProps) => {
  const classes = useStyles()

  return (
    <Snackbar
      className={classes.snackbar}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      open={open}
      onClose={() => !loading && onClose()}
    >
      <Paper sx={{ width: '100%' }}>
        <Alert
          onClose={loading ? undefined : () => onClose()}
          sx={{ width: '100%' }}
          variant="outlined"
          severity={loading ? 'info' : 'success'}
        >
          {loading ? loadingText : successText}
        </Alert>
      </Paper>
    </Snackbar>
  )
}
