import { dateFormatter } from '../../utils/dateFormatter'
import { Container, Header } from './styles'

interface PostProps {
  title: string
  createdAt: string
  body: string
}

export function PostCard({ title, createdAt, body }: PostProps) {
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
        <span>{dateFormatter(createdAt)}</span>
      </Header>
      <p>{body}</p>
    </Container>
  )
}
