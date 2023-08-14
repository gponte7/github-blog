import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'
import { Container } from '../Home/styles'
import { Content } from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface IssueProps {
  html_url: string
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
}

export function Post() {
  const [issue, setIssue] = useState<IssueProps>({
    html_url: '',
    title: '',
    user: {
      login: '',
    },
    created_at: '',
    comments: 0,
    body: '',
  })

  const { postNumber } = useParams()

  async function loadIssue() {
    const response = await axios.get(
      `https://api.github.com/repos/gponte7/desafio03/issues/${postNumber}`,
    )
    setIssue(response.data)
  }

  useEffect(() => {
    loadIssue()
  }, [])

  return (
    <Container>
      <PostInfo
        link={issue?.html_url}
        title={issue?.title}
        login={issue?.user.login}
        comments={issue?.comments}
        createdAt={issue?.created_at}
      />
      <Content>
        <p>{issue?.body}</p>
      </Content>
    </Container>
  )
}
