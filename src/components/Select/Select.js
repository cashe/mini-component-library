import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <Wrapper>
          <Value>{displayedValue}</Value>
          <Icon id="chevron-down" strokeWidth="2" />
      </Wrapper>
      <HiddenDropdown value={value} onChange={onChange}>
        {children}
      </HiddenDropdown>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: fit-content;
  padding: 12px;
  vertical-align: middle;
  color: ${p => COLORS.gray700};
  background-color: ${p => COLORS.transparentGray15};
  border-radius: 8px;

  &:hover {
    color: ${p => COLORS.black};
  }
`
/* TODO: Dynamically resize the dropdown to match the size of Wrapper */
const HiddenDropdown = styled.select` 
  padding: 15px 23px;
  opacity: 0%;
`

const Value = styled.p`
  display: inline;
`


export default Select;
