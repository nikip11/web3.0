import { Button, Snackbar, IconButton, Alert } from '@mui/material'
import { Toast } from 'contexts/toastContext/types/Toast'
import { useState } from 'react'

type Props = {
  toast: Toast
}

export default function SnackbarToast({ toast }: Props) {
  const [_toasts, setToasts] = useState<Toast[]>([])
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    currentToast: Toast,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    closeToast(currentToast)
  }

  const handleActionClick = (currentToast: Toast) => {
    currentToast.action && currentToast.action()
    closeToast(currentToast)
  }
  const closeToast = (currentToast: Toast) => {
    currentToast.open = false
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== currentToast.id).slice(1))
  }

  return (
    <Snackbar
      open={toast.open}
      autoHideDuration={60000000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      action={
        <>
          <Button color="primary" size="small" onClick={() => handleActionClick(toast)}>
            go to
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={(event: React.SyntheticEvent | Event, reason?: string) =>
              handleClose(event, toast, reason)
            }
          >
            x
          </IconButton>
        </>
      }
      onClose={(event: React.SyntheticEvent | Event, reason?: string) =>
        handleClose(event, toast, reason)
      }
      message={toast.message}
      sx={{
        position: 'relative',
        transform: 'translateX(0)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        marginBottom: '10px'
      }}
    >
      {toast.severity && (
        <Alert
          onClose={(event: React.SyntheticEvent | Event, reason?: string) =>
            handleClose(event, toast, reason)
          }
          severity={toast.severity}
        >
          {toast.message}
        </Alert>
      )}
    </Snackbar>
  )
}
