import React from 'react';
import styled from 'styled-components';
import { COLORS } from "../../constants";
import Icon from "../Icon";

import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  // make sure that it looks like the whole div is interactive, cause it is!
  cursor: pointer;
`;

const  NativeSelect= styled.select`
  // Make the select take up the full size of the div.
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // but make it invisible
  opacity: 0;
  appearance: none;
`;

const PresentedSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: 1rem;
  padding: 12px 16px;
  // make space for the icon
  padding-right: 52px;
  // tell the browser to ignore this for clicks and pass it to the select underneath
  pointer-events: none;

  // we use + & (sibling combinator) because NativeSelect comes before
  // the current presentational element in the DOM.
  ${NativeSelect}:hover + & {
    color: black;
  }

  ${NativeSelect}:focus + & {
    outline: 2px auto -webkit-focus-ring-color;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto;
  width: 12px;
  height: 12px;
`

/**
 * @typedef {object} SelectProps
 * @property {string} label The input label.
 * @property {string} value The select's option value
 * @property {() => void} onChange What the select should do on change.
 * @property {React.ReactElement} children The children elements (<option> tags).
 */

/**
 * A progress bar.
 * @param {SelectProps} props The Select props.
 * @returns {JSX.Element} A React element displaying the select input.
 */
const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);



  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange} id="filter-by">
        {children}
      </NativeSelect>
      { /*
        We put the presentational select second so that click events pass "through"
        to the sibling NativeSelect */
      }
      <PresentedSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size="12" strokeWidth={2} />
        </IconWrapper>
      </PresentedSelect>
    </Wrapper>
  );
};

export default Select;
