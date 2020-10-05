import styled from "styled-components"

export const Safari = styled.div`
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #c1c1c1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  grid-area: ${props => props.area};
`

export const DotsWrapper = styled.div`
  display: flex;
  padding: 10px;
`

export const Dot = styled.div`
  margin: 5px;
  background-color: ${props => props.color};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
`

export const LeftColumn = styled.div`
  grid-area: ${props => props.area};
  padding-top: 50px;
  padding-bottom: 50px;
`
export const RightColumn = styled.div`
  grid-area: ${props => props.area};
  padding-top: 50px;
  padding-bottom: 50px;
`
