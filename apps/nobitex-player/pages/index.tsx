import VideoProvider from '../../../libs/nbxplayer/src/lib/VideoProvider'
import {Container, Divider} from "@mui/material";

export function Index() {
  <Container>
    <VideoProvider
      poster={'https://nobitex.ir/academy/api/file/download/ZtdNUgGvuyfuBoGuwEvi'}
      videoData={'https://nobitex.ir/academy/api/file/download/UjYJHOZYPKnuzopPluZe'}
    />
    <Divider/>
    <VideoProvider
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
}

export default Index;
