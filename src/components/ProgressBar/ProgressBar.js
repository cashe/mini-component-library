/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  "small": "8px",
  "medium": "12px",
  "large": "24px"
};

const ProgressBar = ({ value, size }) => {
  return <Wrapper max="100" size={size} height={sizes[size]} value={value}>{value}%</Wrapper>
};

const Wrapper = styled.progress`


  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;
  height: ${p => p.height};
  width: 370px;

  /* TODO: Make cross-browser */

  &::-webkit-progress-bar {
    box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
    border-radius: 8px;
    padding: ${p => p.size === "large" ? "4px" : "" } ;
    background-color: ${COLORS.transparentGray15};
  }

   &::-webkit-progress-value {
    background-color: ${COLORS.primary};

    /* only the right edges should be rounded, and only as the value approaches 100% */
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: ${p => linearConvert(p.value, 99, 100, 0, 4, 0)}px; 
    border-bottom-right-radius: ${p => linearConvert(p.value, 99, 100, 0, 4, 0)}px;
   }

` 

// apply linear conversion of progress (98-100) to border radius (0-4px)
// Source: https://stackoverflow.com/a/929107
function linearConvert(val, oldMin, oldMax, newMin, newMax, def = 0) {

  if(val < oldMin || val > oldMax) {
    return def;
  }
 
  let oldRange = (oldMax - oldMin)  
  let newRange = (newMax - newMin)  
  return (((val - oldMin) * newRange) / oldRange) + newMin
}

export default ProgressBar;
