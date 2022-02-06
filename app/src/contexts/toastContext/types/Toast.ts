export type ToastProps = {
  message: string
  severity?: 'success' | 'info' | 'warning' | 'error'
  action?: () => void
}

export interface Toast extends ToastProps {
  id: string
  open: boolean
}
