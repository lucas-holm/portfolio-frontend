import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { IntroContainer } from "../elements/ContainerElements"
import Section from "./Section"
import Container from "./Container"
import {
  Safari,
  DotsWrapper,
  Dot,
  LeftColumn,
  RightColumn,
} from "../elements/IntroElements"

const query = graphql`
  {
    file(relativePath: { eq: "portraitcopy.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Intro = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Section color="#eaeaea">
      <Container>
        <IntroContainer>
          <Safari area="nav-wrapper">
            <DotsWrapper>
              <Dot color="#fc6058" />
              <Dot color="#f3c02f" />
              <Dot color="#2aca3e" />
            </DotsWrapper>
          </Safari>
          <LeftColumn area="left-column">
            <Image
              style={{ width: "200px", height: "200px", margin: "0 auto" }}
              fluid={fluid}
            />
          </LeftColumn>
          <RightColumn area="right-column">
            <h1>Hi, I'm Lucas</h1>
          </RightColumn>
        </IntroContainer>
      </Container>
    </Section>
  )
}

export default Intro
