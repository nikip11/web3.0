import { useEffect, useState } from 'react'

type Props<T> = {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data: null | T
}

type UseFetchState<T> = {
  state: 'idle' | 'loading' | 'success' | 'error'
  data: null | T
  error: null | Error
}

export default function useFetch<T>({ url, method, data }: Props<T>) {
  const [fetchState, setFetchState] = useState<UseFetchState<T>>({
    state: 'idle',
    data: null,
    error: null
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const json = await response.json()
          console.log(json)
          setFetchState({
            data: json,
            state: 'success',
            error: null
          })
        } else {
          setFetchState({
            state: 'error',
            data: null,
            error: new Error(`HTTP error  ${response.status}`)
          })
        }
      } catch (error) {
        setFetchState({
          data: null,
          state: 'error',
          error: error as Error
        })
      } finally {
        console.log('fetchData')
      }
    }
    fetchData()
  }, [url, method, data])

  return fetchState
}
