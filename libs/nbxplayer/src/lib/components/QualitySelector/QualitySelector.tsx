import ButtonSelector from './ButtonSelector'

import { useVideoContext } from '../../VideoProvider'

const QualitySelector = () => {
  const { props } = useVideoContext()

  if (typeof props?.videoData === 'string') {
    return null
  } else if (Array.isArray(props?.videoData)) {
    return <ButtonSelector />
  } else {
    return null
  }
}

export default QualitySelector
