import {
  ArrowSquareUpRight,
  Calendar,
  CaretLeft,
  ChatsCircle,
  GithubLogo,
} from 'phosphor-react'
import {
  HeaderButton,
  PostInfoContainer,
  PostInfoContent,
  PostInfoHeader,
} from './styles'
import { ProfileInfoContainer } from '../ProfileCard/styles'
import { NavLink } from 'react-router-dom'
import { dateFormatter } from '../../utils/dateFormatter'

interface PostInfoProps {
  link: string
  title: string
  login: string
  createdAt: string
  comments: number
}

export function PostInfo({
  link,
  title,
  login,
  createdAt,
  comments,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <NavLink to="/" style={{ all: 'unset' }}>
          <HeaderButton>
            <CaretLeft size={12} />
            <span>Voltar</span>
          </HeaderButton>
        </NavLink>
        <HeaderButton href={link} target="_blank">
          <span>Ver no github</span>
          <ArrowSquareUpRight size={12} />
        </HeaderButton>
      </PostInfoHeader>

      <PostInfoContent>
        <h1>{title}</h1>
        <ProfileInfoContainer>
          <span>
            <GithubLogo size={18} />
            {login}
          </span>
          <span>
            <Calendar size={18} />
            {dateFormatter(createdAt)}
          </span>
          <span>
            <ChatsCircle size={18} />
            {comments === 0 && 'nenhum comentário'}
            {comments === 1 && `${comments} comentário`}
            {comments > 1 && `${comments} comentários`}
          </span>
        </ProfileInfoContainer>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
