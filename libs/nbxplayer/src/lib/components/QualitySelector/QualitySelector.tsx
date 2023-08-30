import ButtonSelector from './ButtonSelector'

import { useVideoContext } from '../../VideoProvider'

const QualitySelector = () => {
  const { props } = useVideoContext()

  if (typeof props?.videoData === 'string') {
    return <></>
  } else if (Array.isArray(props?.videoData)) {
    return <ButtonSelector />
  }
}

export default QualitySelector
