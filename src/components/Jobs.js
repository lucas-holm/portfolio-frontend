import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { ButtonWrapper, Button, JobsWrapper } from "../elements/JobElements"
import Container from "./Container"
import Section from "./Section"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { order: ASC, fields: strapiId }) {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  //console.log(company, position, date, desc)
  return (
    <Section color="#eaeaea">
      <Title title="Erfarenhet" />
      <Container display="flex">
        <ButtonWrapper>
          {jobs.map((item, index) => {
            return (
              <Button
                border={`${index === value ? "2px solid black" : ""}`}
                key={index}
                onClick={() => setValue(index)}
              >
                {item.company}
              </Button>
            )
          })}
        </ButtonWrapper>
        <JobsWrapper>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p>{date}</p>
          {desc.map(item => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                key={item.id}
              >
                <FaAngleDoubleRight
                  style={{ marginRight: "1rem", color: "#6272a4" }}
                ></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </JobsWrapper>
      </Container>
      <Link to="/">Mitt CV</Link>
    </Section>
  )
}

export default Jobs
