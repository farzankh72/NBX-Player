import { useMemo } from 'react'

import Box from '@mui/material/Box'

import { useVideoContext } from '../VideoProvider'

const Questionnaire = () => {
  const { device, props, currentTime, videoTagRef } = useVideoContext()
  const displayOn = useMemo(() => {
    const color: string = '#371d66'.concat(props?.questionnaire?.opacity || '90')
    const betweenSec: boolean =
      // @ts-ignore
      props?.questionnaire?.timeToDisplay < currentTime &&
      // @ts-ignore
      currentTime < props?.questionnaire?.timeToDisplay + 1

    if (betweenSec && props?.questionnaire?.onClose) {
      videoTagRef?.pause()
      return (
        props?.questionnaire?.onClose &&
        props?.questionnaire && (
          <Box
            style={{
              zIndex: 2,
              top: '50%',
              left: '50%',
              width: '95%',
              borderRadius: '8px',
              position: 'absolute',
              backgroundColor: color,
              height: device === 'MOBILE' ? '65%' : device === ' TABLET' ? '75%' : '85%',
              transform:
                device === 'MOBILE'
                  ? 'translate(-50%,-70%)'
                  : device === ' TABLET'
                  ? 'translate(-50%,-60%)'
                  : 'translate(-50%,-55%)',
            }}
          >
            {props?.questionnaire?.template}
          </Box>
        )
      )
    }

    if (videoTagRef?.paused && !props?.questionnaire?.onClose && betweenSec) {
      videoTagRef.play().then()
    }
  }, [props?.questionnaire, currentTime])

  return <>{displayOn}</>
}

export default Questionnaire
