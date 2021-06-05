import React from 'react';
import { Table } from 'semantic-ui-react';
// import React, { useState } from "react";
import _ from 'lodash';

function tableReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      };
    default:
      throw new Error();
  }
}

function TableContainer(props) {
  const [state, dispatch] = React.useReducer(tableReducer, {
    column: null,
    data: props.results,
    direction: null,
  });
  const { column, data, direction } = state;

  return (
    <Table color='blue' sortable striped fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'name' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'phone' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'phone' })}
          >
            Phone
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'email' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'email' })}
          >
            Email
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'age' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'age' })}
          >
            Date of Birth
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.results.map((data) => {
          const age = Date(data.dob.date);

          <Table.Row key={data.email}>
            <Table.Cell>{data.picture.thumbnail}</Table.Cell>
            <Table.Cell>{data.name.first + ' ' + data.name.last}</Table.Cell>
            <Table.Cell>{data.phone}</Table.Cell>
            <Table.Cell>{data.email}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
          </Table.Row>;
        })}
      </Table.Body>
    </Table>
  );
}

export default TableContainer;