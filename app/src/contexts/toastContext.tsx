import { createContext, useCallback, useContext, useState } from 'react'

const ToastContext = createContext((toast: string) => {})

export function ToastContextProvider({ children }) {
  const [toasts, setToasts] = useState<string[]>([])

  const addToast = useCallback(function (toast: string) {
    setToasts((oldValue) => [...oldValue, toast])
  }, [])

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div>
        {toasts.map((toast) => (
          <div key={toast}>{toast}</div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  return useContext(ToastContext)
}
