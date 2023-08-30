import { useVideoContext } from '../VideoProvider'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import VolumeUp from '@mui/icons-material/VolumeUp'
import VolumeMute from '@mui/icons-material/VolumeMute'

const SoundButton = () => {
  const { soundOn, videoTagRef } = useVideoContext()
  return (
    <Box alignSelf={'center'}>
      <IconButton
        size={'small'}
        onClick={soundOn}
        sx={{ backgroundColor: '#371d6660', color: 'white' }}
      >
        {videoTagRef?.volume === 1 ? (
          <VolumeUp color={'inherit'} fontSize={'small'} />
        ) : (
          <VolumeMute color={'inherit'} fontSize={'small'} />
        )}
      </IconButton>
    </Box>
  )
}
export default SoundButton
