import { styled } from '@mui/material'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import Timer from './components/Timer'
import SeekBar from './components/SeekBar'
import PlayButton from './components/PlayButton'
import SoundButton from './components/SoundButton'
import FullScreenButton from './components/FullScreenButton'
import SpeedSelector from './components/SpeedSelector/SpeedSelector'
import QualitySelector from './components/QualitySelector/QualitySelector'

import { Devices } from './api/Models/Devices'
import { VideoModel } from './api/Models/VideoModel'
import useUserNetQuality from './api/hooks/useUserNetQuality'
import useDeviceSizeResponsive from './api/hooks/useDeviceSizeResponsive'

interface VideoDataModel {
  device?: Devices
  play?: () => void
  speedLvl?: number
  duration?: number
  containerRef?: any
  currentTime?: number
  soundOn?: () => void
  qualityLabel?: string
  props?: NbxPlayerProps
  seek?: (time: number) => void
  videoTagRef?: HTMLVideoElement
  speed?: (number: number) => void
  quality?: (url: string, quality: string) => void
}

const VideoContext = createContext<VideoDataModel>({})

const SeekbarWrapper = styled(Grid)`
  bottom: 0;
  position: absolute;
  background-image: linear-gradient(to top, #371d66, #371d6601);
`

export interface NbxPlayerProps {
  width: string
  poster?: string
  videoData: string | Array<VideoModel>
}

const VideoProvider = (props: NbxPlayerProps) => {
  const { device } = useDeviceSizeResponsive(props.width || '320')

  let timer: any
  const [duration, setDuration] = useState<number>(0)
  const [speedLvl, setSpeedLvl] = useState<number>(1)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [videoTagRef, setVideoTagRef] = useState<any>()
  const [sourceTagRef, setSourceTagRef] = useState<any>()
  const [qualityLabel, setQualityLabel] = useState<string>('')

  const [isHovered, setIsHovered] = useState<boolean>(true)
  const [showSeekBar, setShowSeekBar] = useState<boolean>(true)
  const [isMouseMoved, setIsMouseMoved] = useState<boolean>(true)

  const netQuality = useUserNetQuality()

  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoContainerRef = useRef<HTMLDivElement | null>(null)
  const seekerContainerRef = useRef<HTMLDivElement | null>(null)

  const onMouseHoverEnter = () => {
    setIsHovered(true)
  }

  const onMouseHoverLeave = () => {
    if (!videoTagRef.paused) {
      timer = setTimeout(() => {
        setIsHovered(false)
        setIsMouseMoved(false)
        setShowSeekBar(false)
      }, 3500)
    }

    clearTimeout(timer)
  }

  const onMouseMove = () => {
    setShowSeekBar(true)
    setIsMouseMoved(true)
    clearTimeout(timer)
    if (!videoTagRef.paused) {
      timer = setTimeout(() => {
        setShowSeekBar(false)
        setIsMouseMoved(false)
      }, 5500)
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    setVideoTagRef(document?.createElement('video'))
    setSourceTagRef(document?.createElement('source'))
  }, [props.videoData])

  const seek = (time: number) => {
    setCurrentTime(time)
    videoTagRef.currentTime = time
  }

  const quality = (url: string, quality: string) => {
    sourceTagRef.src = url
    setQualityLabel(quality)
    sourceCreator()
  }

  const speed = (speed: number) => {
    setSpeedLvl(speed)
    videoTagRef.playbackRate = speed
  }

  const play = () => {
    if (videoTagRef.paused) {
      videoTagRef.play()
    } else {
      videoTagRef.pause()
    }
  }

  const soundOn = () => {
    if (videoTagRef.volume === 0) {
      videoTagRef.volume = 1
    } else {
      videoTagRef.volume = 0
    }
  }

  const sourceCreator = () => {
    videoTagRef.width = props.width || '320'
    videoTagRef.height = +props.width / 1.7
    videoTagRef.ontimeupdate = () => {
      setCurrentTime(videoTagRef.currentTime)
    }
    videoTagRef.oncanplay = () => {
      setDuration(videoTagRef.duration)
    }
    videoTagRef.appendChild(sourceTagRef)
    // @ts-ignore
    if (videoContainerRef?.current?.innerHTML) {
      // @ts-ignore
      videoContainerRef.current.innerHTML = ''
    }
    videoTagRef.poster = props.poster || ''

    videoTagRef.load()
    // @ts-ignore
    videoContainerRef?.current?.appendChild(videoTagRef)
    setDuration(videoTagRef.duration)
  }

  useEffect(() => {
    if (videoTagRef) {
      if (typeof props.videoData === 'string') {
        sourceTagRef.src = props.videoData
      } else if (Array.isArray(props.videoData)) {
        props.videoData.map((item) => {
          if (item.quality === netQuality) {
            setQualityLabel(item.quality)
            sourceTagRef.src = item.url
          }
        })
      }
      sourceCreator()
    }
  }, [videoTagRef])

  return (
    <VideoContext.Provider
      value={{
        seek,
        play,
        speed,
        props,
        device,
        quality,
        soundOn,
        speedLvl,
        duration,
        currentTime,
        videoTagRef,
        qualityLabel,
        containerRef,
      }}
    >
      <Grid container ref={containerRef}>
        <Grid
          item
          display={'flex'}
          position={'relative'}
          onMouseEnter={() => onMouseHoverEnter()}
          onMouseLeave={() => onMouseHoverLeave()}
          onMouseMove={() => onMouseMove()}
        >
          <Box ref={videoContainerRef} />
          <div
            style={{
              width: '95%',
              height: device === 'MOBILE' ? '65%' : device === ' TABLET' ? '75%' : '85%',
              backgroundColor: 'blue',
              position: 'absolute',
              zIndex: 1,
              left: '50%',
              top: '50%',
              transform:
                device === 'MOBILE'
                  ? 'translate(-50%,-70%)'
                  : device === ' TABLET'
                  ? 'translate(-50%,-60%)'
                  : 'translate(-50%,-55%)',
            }}
          />
          <SeekbarWrapper
            pr={2}
            pl={2}
            container
            ref={seekerContainerRef}
            sx={{
              transition: 'all 5000ms ease-out',
              display: !showSeekBar ? 'none' : 'inherit',
            }}
          >
            <Grid item xs={12}>
              <SeekBar />
            </Grid>
            <Grid pb={1} item xs={9} alignSelf={'center'}>
              <Stack direction={'row'} spacing={1}>
                <PlayButton />
                <Timer />
                <QualitySelector />
              </Stack>
            </Grid>
            <Grid pb={1} item xs={3} alignSelf={'center'}>
              <Stack direction={'row'} spacing={1} justifyContent={'end'}>
                <SpeedSelector />
                <FullScreenButton />
                <SoundButton />
              </Stack>
            </Grid>
          </SeekbarWrapper>
        </Grid>
      </Grid>
    </VideoContext.Provider>
  )
}

export function useVideoContext() {
  return useContext(VideoContext)
}

export default VideoProvider
