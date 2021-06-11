import React from "react";
import { Segment } from "semantic-ui-react";

function Header() {
  return <Segment inverted color='blue'>
<h1><i className="fa fa-address-book-o" aria-hidden="true"></i> EMPLOYEE DIRECTORY</h1>
<p> Click on the header columns to sort or use the search field to filter by first name.</p>
  </Segment>
}

export default Header;