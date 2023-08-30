import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Fullscreen from '@mui/icons-material/Fullscreen'

import { useVideoContext } from '../VideoProvider'

const FullScreenButton = () => {
  const { videoTagRef, containerRef } = useVideoContext()

  const toggleFullScreen = () => {
    const videoContainer = containerRef.current

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
        videoTagRef.style.height = '300px'
      }
    }
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
