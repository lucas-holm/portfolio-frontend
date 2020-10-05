import React from "react"
import { MainContainer } from "../elements/ContainerElements"

const Container = ({ children, display }) => {
  return <MainContainer display={display}>{children}</MainContainer>
}

export default Container
