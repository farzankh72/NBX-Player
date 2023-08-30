import { useMemo } from 'react'

import { useVideoContext } from '../VideoProvider'

import { Box, Typography } from '@mui/material'

const Timer = () => {
  const { currentTime, duration } = useVideoContext()

  const videoTime = useMemo(() => {
    if (duration > 59) {
      const min = Math.round(duration / 60)
      const sec = Math.round(duration % 60)
      return ` ${min}:${sec}`
    } else {
      return ` ${duration}`
    }
  }, [duration])

  const videoCurrentTime = useMemo(() => {
    if (currentTime > 59) {
      const min = Math.round(currentTime / 60)
      const sec = Math.round(currentTime % 60)
      if (sec < 10) {
        return `${min}:0${sec} `
      } else {
        return `${min}:${sec} `
      }
    } else {
      if (currentTime < 10) {
        return `0:0${Math.round(currentTime)} `
      } else {
        return `0:${Math.round(currentTime)} `
      }
    }
  }, [currentTime])

  if (!duration) {
    return (
      <Box alignSelf={'center'}>
        <Typography color={'white'} variant={'caption'}>
          0:00
        </Typography>
      </Box>
    )
  } else {
    return (
      <Box alignSelf={'center'}>
        <Typography color={'white'} variant={'caption'}>
          {videoCurrentTime} / {videoTime}
        </Typography>
      </Box>
    )
  }
}
export default Timer
