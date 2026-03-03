/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLORS } from "../../constants";

/**
 * @typedef {object} ProgressBarProps
 * @property {"small" | "medium" | "large"} size - The progress bar size.
 * @property {number} size - The value (0–100, inclusive) of the progress bar.
 */

const STYLES = {
  "small": {
    "--height": "8px",
    "--outer-border-radius": "4px",
    "--inner-border-radius": "4px",
    "--padding": "0",
  },
  "medium": {
    "--height": "12px",
    "--outer-border-radius": "4px",
    "--inner-border-radius": "4px",
    "--padding": "0",
  },
  "large": {
    "--height": "24px",
    "--outer-border-radius": "8px",
    "--inner-border-radius": "4px",
    "--padding": "4px",
  }
}

const Progress = styled.progress`
  appearance: none;
  height: var(--height);

  &::-webkit-progress-bar {
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
    border-radius: var(--outer-border-radius);
  }

  /* 4. Kill Chrome's default blue gradient */
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-top-left-radius: var(--inner-border-radius);
    border-bottom-left-radius: var(--inner-border-radius);
    border-top-right-radius: ${(props) => props.value >= 100 ? 'var(--inner-border-radius)' : props.value >= 99 ? 'calc(var(--inner-border-radius) / 2)' : 0};
    border-bottom-right-radius: ${(props) => props.value >= 100 ? 'var(--inner-border-radius)' : props.value >= 99 ? 'calc(var(--inner-border-radius) / 2)' : 0};
  }
`;

/**
 * A progress bar.
 * @param {ProgressBarProps} props The progress bar props.
 * @returns {JSX.Element} A React element displaying the progress bar.
 */
const ProgressBar = ({ value, size }) => {
  return (
    <label>
    <Progress max="100" value={value} style={{...STYLES[size]}}>
      {value}%
    </Progress></label>
  );
};

export default ProgressBar;
