import React from 'react'
import { useRouter } from 'next/router'
import { ReactiveBase, DataSearch, ReactiveList, MultiDropdownList } from '@appbaseio/reactivesearch';
import { Row, Col, Menu, Icon } from 'antd';
import JobCard from '../../components/data-display/JobCard'
import styled from 'styled-components'
import Header from '../../components/navigation/Header';

const Hero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 14rem;
  background: url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80) no-repeat center center;
  background-size: cover;
  text-align: center;

  &::after {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: " ";
  }
`

const HeadingGroup = styled.div`
  position: relative;
  z-index: 2;
  min-width: 0px;
  width: 100%;
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 1.5rem;

  h1 {
    font-size: 24px;
    color: white;
  }

`

const StyledReactiveBase = styled(ReactiveBase)`

  .css-1sk3exe {
    justify-content: center;
    h4 {
      margin-top: 4rem;
    }
  }

  .css-1i2ldnt {
    display: none;
  }

`

const SearchGroup = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  background: white;
  margin-top: -30px;
  position: absolute;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  width: 100%;

  .block {
    width: 100%;
    max-width: 240px;

    input {
      height: 55px;
      border-radius: 8px 0 0 8px;
      background: transparent;
    }

    button {
      border-left: none;
      height: 55px;
    }

    .css-x6igpv {
      top: 55px;
      border-radius: 0 0 8px 8px;
    }

    .last-select {
      border-radius: 0 8px 8px 0;
    }
    
  }

`

const JobsIndex = () => {

  const router = useRouter()

  return (
    <>
    <Header afterScroll defaultTheme="light"/>
    <Hero>
      <HeadingGroup>
        <h1>Jobs</h1>
      </HeadingGroup>
    </Hero>
    <Row type="flex" justify="center" align="top">
      <Col xs={24} md={14}>
        <StyledReactiveBase
          app={process.env.APPBASE_APP_ID}
          credentials={process.env.APPBASE_API_KEY}
        >
          <SearchGroup>
            <DataSearch
              componentId="search"
              dataField={["title"]}
              queryFormat="and"
              showIcon={false}
              autosuggest={false}
              URLParams
              placeholder="Intitulé ou mots-clés..."
              defaultValue={(router.query.search !== undefined) && `${router.query.search}`}
              className="block"
            />
            <MultiDropdownList
              componentId="jobContract"
              dataField="contract.keyword"
              placeholder="Contrat"
              className="block"
            />
            <MultiDropdownList
              componentId="locationSubadministrativeArea"
              dataField="location_subadministrativearea.keyword"
              placeholder="Lieu..."
              className="block"
              defaultValue={router.query.location !== undefined && (
                typeof router.query.location === "object" ? (
                  router.query.location
                ) : (
                  [router.query.location]
                )
              )}
            />
            <MultiDropdownList
              componentId="secteur"
              dataField="secteur_metier_interim.keyword"
              placeholder="Secteur"
              className="block"
              innerClass={{
                select: 'last-select'
              }}
            />
          </SearchGroup>  
          <ReactiveList
            componentId="results"
            dataField="job"
            pagination={true}
            size={30}
            pages={3}
            renderResultStats={function(stats) {
              return (
                <h4>{`${stats.numberOfResults} jobs trouvés en ${stats.time} ms`}</h4>
              )
            }}
            react={{
              and: ['search', 'jobContract', 'locationSubadministrativeArea', 'secteur'],
            }}
            render={({ data }) => (
              <ReactiveList.ResultCardsWrapper>
                {data.map(job => (
                  <JobCard
                    key={job.id}
                    job={job}
                  />
                ))}
              </ReactiveList.ResultCardsWrapper>
            )}
          />
        </StyledReactiveBase>
      </Col>
    </Row>
    </>
  )
  
}

export default JobsIndex