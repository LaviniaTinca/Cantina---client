import React from 'react'
import Widget from './Widget'
import Chart1 from '../../components/admin/Chart2'
import Chart2 from '../../components/admin/Chart2'
import styled from "styled-components";


const MainDashboard = () => {
  return (
        // <div style={{ margin: '50px 0' }}><h2>Masin Dash</h2>
    <Container>
           <HomeContainer>
          {/* <Navbar/> */}
          <Widgets>
            <Widget type = "user"/>
            <Widget type = "order"/>
            <Widget type = "earning"/>
            <Widget type = "balance"/>
          </Widgets>

          <Charts>
            <Chart2 title="Last 6 Months (Revenue)" aspect={2 / 1}/>
            {/* <Chart1/> */}
          </Charts>

          {/* <ListContainer>
            <ListTitle>Latest Transactions</ListTitle>
            <Table/>
          </ListContainer> */}
          
        </HomeContainer>
    </Container>
 
        // </div>
  )
}
const Container = styled.div`
    display: flex;
`

const HomeContainer = styled.div`
  background-color: #f7f7f7;
`
const Widgets = styled.div`
    display: flex;
    padding: 40px;
    gap: 20px;
`
const Charts = styled.div`
    display: flex;
    padding: 20px 20px;
    gap: 20px;
`
const ListContainer = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    margin: 20px;
`
const ListTitle = styled.div`
    font-weight: 500;
    color: gray;
    margin-bottom: 15px;
`

export default MainDashboard