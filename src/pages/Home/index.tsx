import {
  Container,
  PostsCardsContainer,
  SearchBar,
  SearchBarContainer,
  SearchBarHeader,
} from './styles'

import { ProfileCard } from '../../components/ProfileCard'
import { PostCard } from '../../components/PostCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

interface UserProps {
  avatar_url: string
  html_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

export interface IssueProps {
  title: string
  created_at: string
  body: string
  number: number
}

export function Home() {
  const [user, setUser] = useState<UserProps>({
    avatar_url: '',
    html_url: '',
    name: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  })

  const [issues, setIssues] = useState<IssueProps[]>([])

  async function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const search = event.target.value

    const response = await axios.get(
      `https://api.github.com/search/issues?q=${search}%20repo:gponte7/desafio03`,
    )

    console.log(response.data.items)
    setIssues(response.data.items)
  }

  async function loadUser() {
    const response = await axios.get('https://api.github.com/users/gponte7')
    setUser(response.data)
  }

  async function loadIssues() {
    const response = await axios.get(
      'https://api.github.com/repos/gponte7/desafio03/issues',
    )
    setIssues(response.data)
  }

  useEffect(() => {
    loadUser()
    loadIssues()
  }, [])

  return (
    <Container>
      <ProfileCard
        avatarUrl={user.avatar_url}
        htmlUrl={user.html_url}
        name={user.name}
        bio={user.bio}
        username={user.login}
        company={user.company}
        followers={user.followers}
      />

      <SearchBarContainer>
        <SearchBarHeader>
          <h3>Publicações</h3>
          <span>{issues.length} publicações</span>
        </SearchBarHeader>
        <SearchBar placeholder="Buscar conteúdo" onChange={handleSearch} />
      </SearchBarContainer>

      <PostsCardsContainer>
        {issues.map((issue) => (
          <NavLink
            to={`${issue.number}`}
            key={issue.number}
            style={{ all: 'unset' }}
          >
            <PostCard
              title={issue.title}
              createdAt={issue.created_at}
              body={issue.body}
            />
          </NavLink>
        ))}
      </PostsCardsContainer>
    </Container>
  )
}
