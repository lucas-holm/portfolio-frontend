import styled from "styled-components"

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  padding: 0.8rem;
  border: none;
  margin: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  background-color: ${props => props.background};
  transition: all 0.3s linear;
  color: ${props => props.color};
  outline: none;
  cursor: pointer;

  :hover {
    background-color: #6272a4;
    color: #fff;
  }
`

export const JobsWrapper = styled.article`
  padding: 15px;
  transition: all 0.3s linear;
  border-radius: 0.25rem;
  background-color: #fff;
  min-width: 60%;
  margin-bottom: 3rem;

  @media only screen and (max-width: 768px) {
  }
`
