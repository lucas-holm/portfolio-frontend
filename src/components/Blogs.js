import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import Section from "./Section"
import Container from "./Container"
import { BlogsWrapper } from "../elements/BlogElements"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <Section color="#eaeaea">
      <Title title={title} />
      <Container>
        <BlogsWrapper>
          {blogs.map(blog => {
            return <Blog key={blog.id} {...blog} />
          })}
        </BlogsWrapper>
      </Container>
      {showLink ? <Link to="/blog">Blog</Link> : ""}
    </Section>
  )
}

export default Blogs
