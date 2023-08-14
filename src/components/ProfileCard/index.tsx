import {
  ArrowSquareUpRight,
  GithubLogo,
  Buildings,
  UsersThree,
} from 'phosphor-react'
import {
  BioAndInfoContainer,
  BioContainer,
  GithubLinkContainer,
  NameAndLinkContainer,
  ProfileContainer,
  ProfileInfoContainer,
} from './styles'

interface ProfileCardProps {
  avatarUrl: string
  htmlUrl: string
  name: string
  bio: string
  username: string
  company: string
  followers: number
}

export function ProfileCard({
  avatarUrl,
  htmlUrl,
  name,
  bio,
  company,
  followers,
  username,
}: ProfileCardProps) {
  return (
    <ProfileContainer>
      <div>
        <img src={avatarUrl} alt="" />
      </div>

      <BioContainer>
        <NameAndLinkContainer>
          <div>
            <h1>{name}</h1>
          </div>
          <GithubLinkContainer href={htmlUrl} target="_blank">
            <h3>GITHUB</h3>
            <ArrowSquareUpRight />
          </GithubLinkContainer>
        </NameAndLinkContainer>
        <BioAndInfoContainer>
          <div>
            <p>{bio}</p>
          </div>

          <ProfileInfoContainer>
            <span>
              <GithubLogo />
              {username}
            </span>
            <span>
              <Buildings />
              {company}
            </span>
            <span>
              <UsersThree />
              {followers} seguidores
            </span>
          </ProfileInfoContainer>
        </BioAndInfoContainer>
      </BioContainer>
    </ProfileContainer>
  )
}
