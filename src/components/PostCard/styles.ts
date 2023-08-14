import { styled } from 'styled-components'

export const Container = styled.div`
  height: 16.25rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  gap: 1.25rem;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.2s;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-size: 1.25rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`
