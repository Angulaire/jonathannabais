import { Row, Col } from 'antd'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PageLayout from '../../layouts/Page'
import Query from "../../components/global/Query";  
import JOB_QUERY from '../../apollo/queries/job/job'

const JobGroup = styled.div`
  p {
    text-align: justify;
  }
`

const Job = () => {

  const router = useRouter()

  return (
    <Query query={ JOB_QUERY } id={router.query.id}>
      {({ data: { jobs } }) => {
        const job = jobs[0]
        return (
          <PageLayout title={job.title}>
            <Row type="flex" justify="center" align="top">
              <Col xs={24} md={6}>
                <Link href={'/jobs/[id]/postuler'} as={`/jobs/${job.key_id}/postuler`}>
                  <a>Button</a>
                </Link>
              </Col>
              <Col xs={24} md={12}>
                <JobGroup>
                  <h2>À propos</h2>
                  <p>{job.company_description}</p>
                  <h2>Descriptif du poste</h2>
                  <p>{job.description}</p>
                </JobGroup>
              </Col>
              <Col xs={0} md={6}/>
            </Row>
          </PageLayout>
        );
      }}
    </Query>
  )
}

export default Job