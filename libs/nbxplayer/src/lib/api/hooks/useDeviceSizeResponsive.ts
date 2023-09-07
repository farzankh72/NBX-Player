import { useMemo } from 'react'
import { Devices } from '../Models/Devices'

const UseDeviceSizeResponsive = (width: string) => {
  const device = useMemo(() => {
    if (+width < 480) {
      return Devices.MOBILE
    } else if (+width < 768) {
      return Devices.TABLET
    } else {
      return Devices.DESKTOP
    }
  }, [width])
  return { device }
}

export default UseDeviceSizeResponsive
