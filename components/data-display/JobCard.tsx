import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Row, Col } from 'antd';
import styled from 'styled-components'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const CardGroup = styled.div `
  background: ${props => props.theme.bg.matt};
  width: 100%;
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: rgba(0,0,0,.09) 0 10px 20px 0;

  h3, h4 {
    color: ${props => props.theme.text.primary};
  }
`
const CardImage = styled.div`
  img {
    border-radius: 12px 0 0 12px;
    height: 140px; 
    width: 100%; 
    object-fit: cover;
  }
`

const CardContent = styled.div`
  padding: 1.5rem;

  h4 {
    font-size: 0.625rem;
    color: rgb(151, 153, 157);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
  }
`

const DetailsGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75rem;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  color: rgb(151, 153, 157);
  list-style: none;
  padding-inline-start: 0;

  li {
    margin: 0px 0.8125rem 0.3rem 0px;
  }
`

type JobProps = {
  key: number,
  job: {
    _id: number,
    published_at: number,
    updated_at: number,
    reference: string,
    title: string,
    company_name: string,
    agence_id_agence: number,
    company_description: string,
    secteur_metier_interim: string,
    description: string,
    applicant_profile: string,
    function: string,
    industry: string,
    location_administrativearea: string,
    location_subadministrativearea: string,
    location_town: string,
    type: string,
    contract: string,
    application_email: string
  }
}

const JobCard = ({ job }: JobProps) => {

  const router = useRouter()
  const { id } = router.query
  const formatter = buildFormatter(frenchStrings)

  function IndustryImage(props) {
    const industry = props.industry;
    if (industry === "Tertiaire") {
      return <img src="/tertiary.jpg"/>
    } else if (industry === "Industrie") {
      return <img src="/industry.jpg"/>
    }
    return <img src="/building.jpg"/>
  }


  return (
    <Link href={'/jobs/[id]'} as={`/jobs/${job._id}`}>
      <a>
        <CardGroup>
          <Row justify="center" align="top">
            <Col xs={24} md={8}>
              <CardImage>
                <IndustryImage industry={job.secteur_metier_interim} />
              </CardImage>
            </Col>
            <Col xs={24} md={16}>
              <CardContent>
                <h4>{job.company_name}</h4>
                <h3>{job.title}</h3>
                <DetailsGroup>
                  <li>
                    {job.contract}
                  </li>
                  <li>
                    {job.type}
                  </li>
                  <li>
                    {job.location_town}
                  </li>
                  {/* <li>
                    <TimeAgo date={job.published_at} formatter={formatter} />
                  </li> */}
                </DetailsGroup>
              </CardContent>
            </Col>
          </Row>
        </CardGroup> 
      </a>
    </Link>
  )
}

export default JobCard