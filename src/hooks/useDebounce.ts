import { useEffect, useState } from 'react'

export function useDebounce(initialValue: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedValue(initialValue),
      delay || 500
    )

    return () => {
      clearTimeout(timer)
    }
  }, [initialValue, delay])

  return debouncedValue
}
