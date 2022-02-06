import { createContext, useCallback, useContext, useState } from 'react'
import { Toast, ToastProps } from 'contexts/toastContext/types/Toast'
import SnackbarToast from 'contexts/toastContext/components/SnackbarToast'
import { TransitionGroup } from 'react-transition-group'
import { Box } from '@mui/material'

const ToastContext = createContext((toast: ToastProps) => {
  toast
})

type Props = {
  children: JSX.Element
}

export function ToastContextProvider({ children }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback(function (toast: ToastProps) {
    const newToast: Toast = {
      message: toast.message,
      id: Math.random().toString(),
      open: true,
      severity: toast.severity,
      action: toast.action
    }
    setToasts((oldToasts) => [...oldToasts, newToast])
  }, [])

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <Box
        sx={{
          width: '100vw',
          position: 'fixed',
          bottom: 0,
          left: 0
        }}
      >
        <TransitionGroup>
          {toasts.map((toast) => (
            <SnackbarToast toast={toast} key={toast.id} />
          ))}
        </TransitionGroup>
      </Box>
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  return useContext(ToastContext)
}
