import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const PrettyLink = styled(Link)`
  padding: 10px;
`;

export default () => (
  <div>
    <PrettyLink to="/">All</PrettyLink>
    <PrettyLink to="/active">Active</PrettyLink>
    <PrettyLink to="/completed">Completed</PrettyLink>
  </div>
);
