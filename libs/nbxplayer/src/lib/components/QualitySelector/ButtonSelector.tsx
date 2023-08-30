import Image from 'next/image'

import Box from '@mui/material/Box'
import { styled, Typography } from '@mui/material'

import { useVideoContext } from '../../VideoProvider'
import gear from '../../public/assets/images/gear-quality.png'

const QualityWrapper = styled(Box)`
  .btn {
    color: white;
    cursor: pointer;
    width: 100px;
    text-align: center;
    overflow: hidden;
    border-radius: 8px;
    --btn-color: #371d6660;
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    filter: drop-shadow(0 2px 8px rgba(39, 94, 254, 0.32));
  }

  .btn::before {
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    content: '';
    height: 100%;
    position: absolute;
    background: var(--btn-color);
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .btn span,
  .btn span span {
    display: inline-flex;
    vertical-align: middle;
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .btn span {
    transition-delay: 0.05s;
  }

  .btn span:first-child {
    padding-right: 7px;
  }

  .btn span span {
    margin-left: 8px;
    transition-delay: 0.1s;
  }

  .btn ul {
    left: 0;
    right: 0;
    top: 50%;
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    list-style-type: none;
    transform: translateY(-50%);
  }

  .btn ul li {
    flex: 1;
  }

  .btn ul li a {
    display: inline-flex;
    vertical-align: middle;
    transform: translateY(55px);
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .btn ul li a:hover {
    opacity: 0.5;
  }

  .btn:hover::before {
    transform: scale(1.2);
  }

  .btn:hover span,
  .btn:hover span span {
    transform: translateY(-55px);
  }

  .btn:hover ul li a {
    font-size: 10px;
    transform: translateY(0);
  }

  .btn:hover ul li:nth-child(1) a {
    transition-delay: 0.15s;
  }

  .btn:hover ul li:nth-child(2) a {
    transition-delay: 0.2s;
  }

  .btn:hover ul li:nth-child(3) a {
    transition-delay: 0.25s;
  }
`

const ButtonSelector = () => {
  const { props, quality, qualityLabel } = useVideoContext()

  return (
    <QualityWrapper alignSelf={'center'}>
      <div className={'btn'}>
        <span>
          <Typography variant={'caption'}>{qualityLabel}</Typography>
        </span>
        <span>
          <Image alt={'gear'} src={gear.src} width={24} height={24} />
        </span>
        <ul>
          {props?.videoData &&
            quality != undefined &&
            typeof props?.videoData != 'string' &&
            props?.videoData?.map((item, index) => {
              return (
                <li key={index}>
                  <a onClick={() => quality(item.url, item.quality)}>
                    <Typography
                      sx={{
                        fontSize: '10px',
                        color: qualityLabel === item.quality ? '#FFA726' : 'white',
                      }}
                    >
                      {item.quality}
                    </Typography>
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    </QualityWrapper>
  )
}

export default ButtonSelector
