import { useEffect, useState } from 'react'
import { useSsr } from 'usehooks-ts'

const useUserNetQuality = () => {
  const { isBrowser } = useSsr()
  const [netQuality, setNetQuality] = useState<string>('')

  useEffect(() => {
    if (isBrowser) {
      const { rtt } = ((window?.navigator as any).connection as { rtt: number }) || {}

      if (0 < rtt && rtt <= 70) {
        setNetQuality('FULL_HD')
      } else if (70 < rtt && rtt <= 200) {
        setNetQuality('HD')
      } else {
        setNetQuality('SD')
      }
    }
  }, [isBrowser])

  return netQuality
}

export default useUserNetQuality
