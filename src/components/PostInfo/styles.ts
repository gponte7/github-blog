import { styled } from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5.5rem;
`

export const PostInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderButton = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.1s;
  color: ${(props) => props.theme.blue};

  span {
    font-size: 0.75rem;
    line-height: 160%;
    font-weight: bold;
    text-transform: uppercase;
  }

  &:hover {
    border-bottom-color: ${(props) => props.theme.blue};
  }
`

export const PostInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`
