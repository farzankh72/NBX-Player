import { Speed } from '@mui/icons-material'
import { Box, styled, Typography } from '@mui/material'

import { useVideoContext } from '../../VideoProvider'

const Wrapper = styled(Box)`
  .Btn {
    width: 30px;
    border: none;
    height: 30px;
    display: flex;
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    align-items: center;
    background: #371d6660;
    justify-content: center;
    transition-duration: 0.4s;
  }

  .svgIcon {
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .text {
    opacity: 0;
    width: 120px;
    font-weight: 600;
    position: absolute;
    color: rgb(255, 255, 255);
    transition-duration: 0.4s;
  }

  .Btn:hover {
    width: 130px;
    padding: 0 10px;
    border-radius: 30px;
    transition-duration: 0.4s;
  }

  .Btn:hover .text {
    opacity: 1;
    transition-duration: 0.4s;
  }

  .Btn:hover .svgIcon {
    opacity: 0;
    transition-duration: 0.3s;
  }

  .typo {
    font-size: 10px;

    :hover {
      color: #ffa726;
      filter: blur(0.5px);
    }
  }
`

const ButtonSelector = () => {
  const { speed, speedLvl } = useVideoContext()
  const speedArray = [0.5, 0.75, 1, 1.25, 1.5]
  return (
    <Wrapper alignSelf={'center'}>
      <button className='Btn'>
        <Speed fontSize={'small'} className='svgIcon' />
        <span className='text'>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            {speedArray.map((item, index) => {
              return (
                <Typography
                  sx={{ color: speedLvl === item ? '#ffa726' : 'white' }}
                  key={index}
                  className={'typo'}
                  onClick={() => speed(item)}
                >
                  {item === 1 ? 'N' : item}
                </Typography>
              )
            })}
          </Box>
        </span>
      </button>
    </Wrapper>
  )
}

export default ButtonSelector
