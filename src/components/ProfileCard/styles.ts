import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  width: inherit;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -5.5rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`
export const BioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const NameAndLinkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const GithubLinkContainer = styled.a`
  all: unset;
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};
  transition: 0.1s;

  h3 {
    font-size: 0.75rem;
    line-height: 160%;
  }

  &:hover {
    border-bottom-color: ${(props) => props.theme.blue};
  }
`

export const BioAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    line-height: 160%;
  }
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
