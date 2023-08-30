import { Slider, styled } from '@mui/material'

import { useVideoContext } from '../VideoProvider'

const NobitexSlider = styled(Slider)({
  height: 6,
  padding: 0,
  color: '#371D66',
  transition: 'all 50ms ease-in',
  boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.2)',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    width: 12,
    height: 12,
    backgroundColor: '#FFA726',
    transition: 'all 200ms ease-in',
    '&:hover': {
      width: 20,
      height: 20,
      backgroundColor: '#FFA726',
      border: '5px solid currentColor',
    },
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    width: 32,
    height: 32,
    padding: 0,
    fontSize: 12,
    lineHeight: 1.2,
    background: 'unset',
    backgroundColor: '#FFA726',
    borderRadius: '50% 50% 50% 0',
    transformOrigin: 'bottom left',
    '&:before': { display: 'none' },
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
})

const SeekBar = () => {
  const { currentTime, duration, seek } = useVideoContext()

  const handleChangeSeekBar = (event, newValue) => {
    seek(newValue)
  }

  const valueTextTopSeekBar = (value: number) => {
    if (value > 60) {
      const min = Math.round(value / 60)
      const sec = value % 60
      return `${min}:${sec}`
    } else {
      return `${value}`
    }
  }

  return (
    <NobitexSlider
      min={0}
      max={duration || 100}
      valueLabelDisplay='auto'
      aria-label='Temperature'
      onChange={handleChangeSeekBar}
      value={Math.round(currentTime)}
      valueLabelFormat={valueTextTopSeekBar}
    />
  )
}

export default SeekBar
