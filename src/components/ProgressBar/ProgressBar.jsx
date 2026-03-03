/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLORS } from "../../constants";

/**
 * @typedef {object} ProgressBarProps
 * @property {"small" | "medium" | "large"} size - The progress bar size.
 * @property {number} size - The value (0–100, inclusive) of the progress bar.
 * @property {boolean} native - Use the native <progress> element.
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

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-top-left-radius: var(--inner-border-radius);
    border-bottom-left-radius: var(--inner-border-radius);
    border-top-right-radius: ${(props) => props.value >= 100 ? 'var(--inner-border-radius)' : props.value >= 99 ? 'calc(var(--inner-border-radius) / 2)' : 0};
    border-bottom-right-radius: ${(props) => props.value >= 100 ? 'var(--inner-border-radius)' : props.value >= 99 ? 'calc(var(--inner-border-radius) / 2)' : 0};
  }
`;

const ProgressWrapper = styled.div`
    height: var(--height);
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
    border-radius: var(--outer-border-radius);
    overflow: hidden;
`;

const Trimmer = styled.div`
  border-radius: var(--inner-border-radius);
  overflow: hidden;
  height: 100%;
`

const ProgressValue = styled.div`
    height: 100%;
    width: ${(props) => props.value}%;
    background-color: ${COLORS.primary};
`;

/**
 * A progress bar.
 * @param {ProgressBarProps} props The progress bar props.
 * @returns {JSX.Element} A React element displaying the progress bar.
 */
const ProgressBar = ({ value, size, native = false}) => {
  return native ? (
    <label>
    <Progress max="100" value={value} style={{...STYLES[size]}}>
      {value}%
    </Progress></label>
  ) : (
    <ProgressWrapper style={{...STYLES[size]}} role="progressbar" aria-label="Progress Bar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <Trimmer style={{...STYLES[size]}}>
        <ProgressValue style={{...STYLES[size]}} value={value} />
      </Trimmer>
    </ProgressWrapper>
  );
};

export default ProgressBar;
