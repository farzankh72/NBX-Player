import Box from '@mui/material/Box'
import { useVideoContext } from '../VideoProvider'
import { DownloadingRounded, PlayArrow } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

const PlayOnMainScreen = () => {
  const { play, device, videoTagRef, loading } = useVideoContext()
  return (
    <Box
      onClick={play}
      style={{
        zIndex: 1,
        top: '50%',
        left: '50%',
        width: '95%',
        borderRadius: '8px',
        position: 'absolute',
        backgroundColor: '#ffffff01',
        height: device === 'MOBILE' ? '65%' : device === ' TABLET' ? '75%' : '85%',
        transform:
          device === 'MOBILE'
            ? 'translate(-50%,-70%)'
            : device === ' TABLET'
            ? 'translate(-50%,-60%)'
            : 'translate(-50%,-55%)',
      }}
    >
      {loading && (
        <IconButton
          sx={{
            backgroundColor: '#ffffff50',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform:
              device === 'MOBILE'
                ? 'translate(-50%,-70%)'
                : device === ' TABLET'
                ? 'translate(-50%,-60%)'
                : 'translate(-50%,-55%)',
            '& :hover': {
              color: '#ffffff50',
            },
          }}
        >
          <DownloadingRounded sx={{ color: '#371d66' }} fontSize={'large'} width={34} height={34} />
        </IconButton>
      )}

      {videoTagRef?.paused && !loading && (
        <IconButton
          sx={{
            backgroundColor: '#ffffff50',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform:
              device === 'MOBILE'
                ? 'translate(-50%,-70%)'
                : device === ' TABLET'
                ? 'translate(-50%,-60%)'
                : 'translate(-50%,-55%)',
            '& :hover': {
              color: '#ffffff50',
            },
          }}
        >
          <PlayArrow sx={{ color: '#371d66' }} fontSize={'large'} width={34} height={34} />
        </IconButton>
      )}
    </Box>
  )
}

export default PlayOnMainScreen
