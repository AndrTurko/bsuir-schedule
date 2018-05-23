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
      load: false,
      error: true
    };
  }

  componentDidMount() {
    this.setState({
      error: false
    })
    fetch(`https://students.bsuir.by/api/v1/studentGroup/schedule?studentGroup=${this.props.groupNumber}`)
      .then(response => response.json())
      .then(d => {
        console.log(d)
        this.setState({
          data: [...d.schedules],
          currentWeekNumber: d.currentWeekNumber,
          load: true
        });
      })
      .catch(()=> {
        this.setState({
          error: true
        });
    })
  }

  render() {
    return (
      <CardListWrapper>
        {this.state.load ? this.state.data.map((el, i) => {
          return <Card key={i} data={el} currentWeekNumber={this.state.currentWeekNumber} />
        }) : this.state.error ? "Группа не найдена" : <CircularProgress size={50} />}
      </CardListWrapper>
    );
  }
}

export default CardList;
