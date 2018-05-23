import React from 'react';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import {Paper, Avatar} from 'material-ui';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 400px;
  height: 300px;
  background: lightgray;
  margin: 5px;
`;
const Fragment = React.Fragment;
const Card = ({data, currentWeekNumber}) => (
  <CardWrapper>
    <Paper>
      <Table>
        <TableBody>
          {data.schedule.map((el, i) => {
            return (
              <Fragment key={i}>
              { 
                el.weekNumber.includes(currentWeekNumber) ?
              <TableRow key={i}>
                <TableCell>{el.lessonTime}</TableCell>
                <TableCell>{el.subject}</TableCell>
                <TableCell><Avatar src={el.employee && el.employee[0] && el.employee[0].photoLink ? el.employee[0].photoLink : undefined}/></TableCell>
              </TableRow>
              : null
              }
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </CardWrapper>
)

export default Card;