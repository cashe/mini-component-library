import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  width: 30px;
  color: ${p => COLORS.gray700};
  background-color: ${p => COLORS.transparentGray15};
  width: fit-content;
  block-size: fit-content;

  &:hover {
    color: ${p => COLORS.black};
  }

`

export default Select;
