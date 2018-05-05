import React, { Component } from "react";
import { Table, Spin } from "antd";

const columns = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject"
  },
  {
    title: "Teacher",
    dataIndex: "teacher",
    key: "teacher"
  },
  {
    title: "Room",
    dataIndex: "room",
    key: "room"
  }
];

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pagination: false,
      size: "default",
      showHeader: false,
      title: () => '',
      data: [],
      load: false
    }
  }

  changeTitle(text) {
    this.setState({title: ()=>text})
  }

  componentDidMount() {
    fetch('https://students.bsuir.by/api/v1/studentGroup/schedule?studentGroup=620601')
    .then(response => response.json())
    .then(d => {
      this.changeTitle(`Сегодня ${d.todayDate}`)
      const data = d.todaySchedules.map((el, i)=>{
        return {
          key: i,
          time: el.lessonTime,
          subject: el.subject,
          teacher: el.employee[0].fio,
          room: el.auditory
        }
      });
      this.setState({
        load: true
      })
      this.setState({
        data
      })
    });
    
  }

  render() {
    return (
      <div>
      {this.state.load ? <Table
        {...this.state}
        style={{ 
          maxWidth: "600px"
        }}
        columns={columns}
        dataSource={this.state.data}
      /> : <Spin style={{display: 'block', margin: '0 auto'}}/>}
      </div>
    );
  }
}

export default Card;
