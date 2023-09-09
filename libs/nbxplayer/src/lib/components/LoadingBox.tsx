import { styled } from '@mui/material'

const LoadingAnimation = styled('div')`
  width: 70px;
  height: 35px;
  overflow: hidden;
  position: relative;

  :before {
    top: 0;
    left: 0l;
    content: '';
    width: 70px;
    height: 70px;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid #0000;
    transform: rotate(-200deg);
    border-color: #ffa726 #ffa726 #371d66 #371d66;
    animation: rotate_5131 3s ease-in-out infinite;
  }

  @keyframes rotate_5131 {
    0% {
      border-width: 10px;
    }

    25% {
      border-width: 3px;
    }

    50% {
      border-width: 10px;
      transform: rotate(115deg);
    }

    75% {
      border-width: 3px;
    }

    100% {
      border-width: 10px;
    }
  }
`
const LoadingBox = () => {
  return <LoadingAnimation />
}

export default LoadingBox
