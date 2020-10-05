import styled from "styled-components"

export const BlogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 20px;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 50px;
`

export const BlogCard = styled.article`
  -webkit-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 30px -4px rgba(0, 0, 0, 0.75);
  padding: 15px;
  transition: all 0.3s linear;
  border-radius: 0.25rem;
  background-color: #fff;
  height: 90%;
`

export const BlogContent = styled.div``

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Category = styled.p`
  text-transform: uppercase;
  background-color: #6272a4;
  padding: 0.4rem;
  margin: 1rem 0.3rem;
  border-radius: 0.25rem;
  color: #fff;
`
