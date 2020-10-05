import styled from "styled-components"

export const NavWrapper = styled.nav`
  min-height: 15vh;
  background-color: #eaeaea;

  ul {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
  }
  li {
    padding: 2rem;
  }

  a {
    font-size: 1.5rem;
    color: black;
    transition: all 0.3s linear;

    :hover {
      color: #e4abfe;
    }
  }
`
