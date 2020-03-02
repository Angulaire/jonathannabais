import React from 'react'
import Router from 'next/router'
import { Row, Col, Button } from 'antd';
import styled from 'styled-components'
import { ReactiveBase, DataSearch, ReactiveList, MultiDropdownList } from '@appbaseio/reactivesearch';

const HeroSearchGroup = styled.div`
  position: relative;
`

const ImageCard = styled.div`
  background: url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 400px;
  border-radius: 12px;
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
  padding: 20px;
  margin-top: -50px;
  position: absolute;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  left: 5%;
  width: 90%;

  @media (min-width: 768px) { 
    left: 20%;
    width: 60%;
  }

  .block {
    width: 100%;
  }
`

class HeroSearch extends React.Component{

  state = {
    search: "",
    location: []
  };

  handleSubmit() {
    Router.push({
      pathname: '/jobs', 
      query: { search: this.state.search, location: this.state.location }
    })
  }

  render() {
    return (
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} md={24}>
          <HeroSearchGroup>
            <ReactiveBase
              app={process.env.APPBASE_APP_ID}
              credentials={process.env.APPBASE_API_KEY}
            >
              <SearchGroup>
                <DataSearch
                  componentId="search"
                  dataField={["title"]}
                  queryFormat="and"
                  placeholder="Intitulé ou mots-clés..."
                  className="block"
                  showIcon={false}
                  showClear
                  autosuggest={false}
                  onValueChange={(value) => {
                    this.setState({
                      search: value
                    });
                  }}
                  onValueSelected={this.handleSubmit.bind(this)} 
                />
                <MultiDropdownList
                  componentId="locationSubadministrativeArea"
                  dataField="location_subadministrativearea.keyword"
                  placeholder="Lieu"
                  showSearch
                  searchPlaceholder="Région ou ville..."
                  className="block"
                  onValueChange={(value) => {
                    this.setState({
                      location: value
                    });
                  }}
                />
                <Button type="primary" size="large" onClick={this.handleSubmit.bind(this)} style={{marginLeft: "12px"}}>Rechercher</Button>
              </SearchGroup>
            </ReactiveBase>
            <ImageCard />
          </HeroSearchGroup>
        </Col>
      </Row>
    )
  }
}

export default HeroSearch