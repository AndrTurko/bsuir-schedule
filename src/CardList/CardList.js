import React, { Component } from "react";
import Card from "../Card/Card";
import { CircularProgress } from 'material-ui/Progress';
import styled from 'styled-components';

const CardListWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    };
  }

  componentDidMount() {
    fetch("https://students.bsuir.by/api/v1/studentGroup/schedule?studentGroup=620601")
      .then(response => response.json())
      .then(d => {
        console.log(d)
        this.setState({
          data: [...d.schedules],
          currentWeekNumber: d.currentWeekNumber
        });
        this.setState({
          load: true
        });
      });
  }

  render() {
    return (
      <CardListWrapper>
        {this.state.load ? this.state.data.map((el, i)=>{
          return <Card key={i} data={el} currentWeekNumber={this.state.currentWeekNumber}/>
        }): <CircularProgress size={50} />}
      </CardListWrapper>
    );
  }
}

export default CardList;
