import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Fullscreen from '@mui/icons-material/Fullscreen'

import { useVideoContext } from '../VideoProvider'

const FullScreenButton = () => {
  const { videoTagRef, containerRef, props } = useVideoContext()

  const checkFullScreenMode = () => {
    const videoContainer = containerRef.current
    const width = props?.width || '320'
    if (videoTagRef) {
      if (!document.fullscreenElement) {
        if (videoContainer.requestFullscreen) {
          videoContainer.requestFullscreen()
        }
        videoTagRef.style.width = '100%'
        videoTagRef.style.height = '100%'
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
        videoTagRef.style.width = width
        videoTagRef.style.height = (+width / 1.7).toString()
      }
    }
  }
  const toggleFullScreen = () => {
    checkFullScreenMode()
  }

  return (
    <Box alignSelf={'center'}>
      <IconButton
        size={'small'}
        onClick={toggleFullScreen}
        sx={{ backgroundColor: '#371d6660', color: 'white' }}
      >
        <Fullscreen fontSize={'small'} />
      </IconButton>
    </Box>
  )
}

export default FullScreenButton
