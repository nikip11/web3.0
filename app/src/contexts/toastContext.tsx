import { Alert, Snackbar } from '@mui/material'
import { createContext, useCallback, useContext, useState } from 'react'

const ToastContext = createContext((toast: ToastProps) => {
  toast
})

type Props = {
  children: JSX.Element
}

type ToastProps = {
  message: string
  severity: 'success' | 'info' | 'warning' | 'error'
}

interface Toast extends ToastProps {
  id: string
  open: boolean
}

export function ToastContextProvider({ children }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback(function (toast: ToastProps) {
    const newToast: Toast = {
      message: toast.message,
      id: Math.random().toString(),
      open: true,
      severity: toast.severity
    }
    setToasts((oldToasts) => [...oldToasts, newToast])
  }, [])

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    currentToast: Toast,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== currentToast.id))
  }

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div>
        {toasts.map((toast) => (
          <Snackbar
            key={toast.id}
            open={toast.open}
            autoHideDuration={6000}
            onClose={(event: React.SyntheticEvent | Event, reason?: string) =>
              handleClose(event, toast, reason)
            }
          >
            <Alert
              id={toast.id}
              onClose={(event: React.SyntheticEvent | Event, reason?: string) =>
                handleClose(event, toast, reason)
              }
              severity={toast.severity}
              sx={{ width: '100%' }}
            >
              {toast.message}
            </Alert>
          </Snackbar>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  return useContext(ToastContext)
}
