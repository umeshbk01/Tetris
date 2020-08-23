import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOES } from '../tetrominoes';


const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOES[type].color}>
    {console.log('rerender cell')}
  </StyledCell>
);

export default React.memo(Cell);