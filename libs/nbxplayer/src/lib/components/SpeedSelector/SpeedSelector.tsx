import ButtonSelector from './ButtonSelector'
import { useVideoContext } from '../../VideoProvider'
import { Devices } from '../../api/Models/Devices'

const SpeedSelector = () => {
  const { device, props } = useVideoContext()
  if (device === Devices.MOBILE && typeof props?.videoData != 'string') {
    return null
  } else {
    return <ButtonSelector />
  }
}

export default SpeedSelector
