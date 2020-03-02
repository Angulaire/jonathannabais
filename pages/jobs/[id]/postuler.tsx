import {Row, Col } from 'antd'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import PageLayout from '../../../layouts/Page'
import ApplyForm from '../../../components/data-entry/ApplyForm'
import Query from "../../../components/global/Query";  
import JOB_QUERY from '../../../apollo/queries/job/job'


const Apply = () => {

  const router = useRouter()

  return (
    <Query query={ JOB_QUERY } id={router.query.id}>
      {({ data: { jobs } }) => {
        const job = jobs[0]
        return (
          <PageLayout title={job.title}>
            <Row type="flex" justify="center" align="top">
              <Col xs={24} md={12}>
                <ApplyForm />
              </Col>
            </Row>
          </PageLayout>
        );
      }}
    </Query>
  )
}
  
export default Apply