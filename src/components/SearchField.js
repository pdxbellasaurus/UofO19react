import React from 'react';
import { Form, Divider, Segment } from 'semantic-ui-react';

function SearchField(props) {
  return (
    <Segment>
      <Form>
        <Form.Group>
          <Form.Input
            label='Search Employee'
            value={props.value}
            name='search'
            type='text'
            placeholder='Search by first name'
            id='search'
            onChange={props.handleInputChange}
          />
        </Form.Group>
      </Form>
      <Divider horizontal fitted />
    </Segment>
  );
}

export default SearchField;