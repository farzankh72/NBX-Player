import { useVideoContext } from '../VideoProvider'

import Box from '@mui/material/Box'
import Pause from '@mui/icons-material/Pause'
import IconButton from '@mui/material/IconButton'
import PlayArrow from '@mui/icons-material/PlayArrow'

const PlayButton = () => {
  const { play, videoTagRef } = useVideoContext()
  return (
    <Box alignSelf={'center'}>
      <IconButton
        size={'small'}
        onClick={play}
        sx={{ backgroundColor: '#371d6660', color: 'white' }}
      >
        {videoTagRef?.paused ? <PlayArrow fontSize={'small'} /> : <Pause fontSize={'small'} />}
      </IconButton>
    </Box>
  )
}

export default PlayButton
