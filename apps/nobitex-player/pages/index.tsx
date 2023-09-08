import { useMemo, useState } from 'react'

import { Container, Divider } from '@mui/material'

import VideoProvider from '../../../libs/nbxplayer/src/lib/VideoProvider'

export const Index = () => {
  const [exit, setExit] = useState<boolean>(true)
  const temp = useMemo(() => {
    return (
      <div style={{ width: '40%', height: '40%', backgroundColor: 'black' }}>
        <button onClick={() => setExit(false)}>999</button>
      </div>
    )
  }, [])

  return (
    <Container>
      <VideoProvider
        width={'320'}
        questionnaire={{ template: temp, onClose: exit, timeToDisplay: 0 }}
        poster={'https://nobitex.ir/academy/api/file/download/ZtdNUgGvuyfuBoGuwEvi'}
        videoData={'https://nobitex.ir/academy/api/file/download/UjYJHOZYPKnuzopPluZe'}
      />
      <Divider />
      <VideoProvider
        width={'500'}
        questionnaire={{ template: temp, onClose: exit, timeToDisplay: 0 }}
        poster={'https://nobitex.ir/academy/api/file/download/ZtdNUgGvuyfuBoGuwEvi'}
        videoData={'https://nobitex.ir/academy/api/file/download/UjYJHOZYPKnuzopPluZe'}
      />
      <Divider />
      <VideoProvider
        width={'700'}
        questionnaire={{ template: temp, onClose: exit, timeToDisplay: 0 }}
        poster={'https://nobitex.ir/academy/api/file/download/ZtdNUgGvuyfuBoGuwEvi'}
        videoData={[
          {
            url: 'https://nobitex.ir/academy/api/file/download/UjYJHOZYPKnuzopPluZe',
            quality: 'SD',
          },
          {
            url: 'https://nobitex.ir/academy/api/file/download/YvTqNcoLiydduRCwHizM',
            quality: 'HD',
          },
          {
            url: 'https://nobitex.ir/academy/api/file/download/SDyKdGLPYwuJZLFDYBoD',
            quality: 'FHD',
          },
        ]}
      />
    </Container>
  )
}

export default Index
