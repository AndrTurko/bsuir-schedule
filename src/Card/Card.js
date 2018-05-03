import React, { Component } from "react";
import { Table, Icon, Divider } from "antd";

const columns = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    render: text => <a href="javascript:;">{text}</a>
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


let i = 0;

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pagination: false,
      size: "default",
      showHeader: false,
      title: () => '',
      data: []
    }
  }

  changeTitle(text) {
    this.setState({title: ()=>text})
  }

  componentDidMount() {
    fetch('https://students.bsuir.by/api/v1/studentGroup/schedule?studentGroup=620601')
    .then(response => response.json())
    .then(d => {
      console.log(d)
      this.changeTitle(`Сегодня ${d.todayDate}`)
      this.setState({
        data: [...this.state.data,{
          key: i,
          time: d.todaySchedules[i].lessonTime,
          subject: d.todaySchedules[i].subject,
          teacher: d.todaySchedules[i].employee[0].fio,
          room: d.todaySchedules[i].auditory
        }]
      })
      console.log(this.state.data)
    });
    
  }

  render() {
    const state = this.state;
    return (
      <Table
        {...this.state}
        style={{ 
          maxWidth: "600px"
        }}
        columns={columns}
        dataSource={this.state.data}
      />
    );
  }
}

export default Card;
