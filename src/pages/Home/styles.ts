import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 18rem 5rem 18rem;
`
export const SearchBarContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const SearchBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SearchBar = styled.input`
  height: 3.125rem;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  outline: none;
  border-radius: 6px;

  line-height: 160%;
  color: ${(props) => props.theme['base-label']};
  transition: 0.1s;

  &:focus {
    border-color: ${(props) => props.theme.blue};
  }
`
export const PostsCardsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
