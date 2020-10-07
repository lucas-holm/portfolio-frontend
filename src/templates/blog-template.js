import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Section from "../components/Section"
import Container from "../components/Container"
import { BlogArticle } from "../elements/BlogElements"

const ComponentName = ({ data }) => {
  const { content } = data.blog

  return (
    <Layout>
      <Section>
        <Container>
          <BlogArticle>
            <ReactMarkdown source={content} />
          </BlogArticle>
          <Link to="/blog">Blog</Link>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
