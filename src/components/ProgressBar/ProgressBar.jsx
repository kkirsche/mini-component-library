/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLORS } from "../../constants";


const STYLES = {
  "small": {
    "--height": "8px",
    "--inner-border-radius": "4px",
    "--outer-border-radius": "4px",
    "--padding": "0",
  },
  "medium": {
    "--height": "12px",
    "--inner-border-radius": "4px",
    "--outer-border-radius": "4px",
    "--padding": "0",
  },
  "large": {
    "--height": "24px",
    "--inner-border-radius": "4px",
    "--outer-border-radius": "8px",
    "--padding": "4px",
  }
}

const NativeProgress = styled.progress`
  appearance: none;
  height: var(--height);
    width: 100%;

  &::-webkit-progress-bar {
    background: ${COLORS.transparentGray15};
    border-radius: var(--outer-border-radius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-bottom-left-radius: var(--inner-border-radius);
    border-bottom-right-radius: ${(props) => props.value >= 100 ? 'var(--inner-border-radius)' : props.value >= 99 ? 'calc(var(--inner-border-radius) / 2)' : 0};
    border-top-left-radius: var(--inner-border-radius);
    border-top-right-radius: ${(props) => props.value >= 100 ? 'var(--inner-border-radius)' : props.value >= 99 ? 'calc(var(--inner-border-radius) / 2)' : 0};
  }
`;

const ProgressWrapper = styled.div`
    background: ${COLORS.transparentGray15};
    border-radius: var(--outer-border-radius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    height: var(--height);
    overflow: hidden;
    padding: var(--padding);
    width: 100%;
    // match native progress
    display: inline-block;
`;

const Trimmer = styled.div`
  border-radius: var(--inner-border-radius);
  height: 100%;
  // for trimming the border radius when the ProgressValue approaches 100%
  overflow: hidden;
`

const ProgressValue = styled.div`
    background-color: ${COLORS.primary};
    height: 100%;
    width: ${(props) => props.value}%;
`;

/**
 * @typedef {object} ProgressBarProps
 * @property {"small" | "medium" | "large"} size - The progress bar size.
 * @property {number} size - The value (0–100, inclusive) of the progress bar.
 * @property {boolean} native - Use the native <progress> element.
 */

/**
 * A progress bar.
 * @param {ProgressBarProps} props The progress bar props.
 * @returns {JSX.Element} A React element displaying the progress bar.
 */
const ProgressBar = ({ value, size, native = false}) => {
  return native ? (
    <NativeProgress max="100" value={value} style={{...STYLES[size]}}>
      {value}%
    </NativeProgress>
  ) : (
    <ProgressWrapper style={{...STYLES[size]}} role="progressbar" aria-label="Progress Bar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <Trimmer style={{...STYLES[size]}}>
        <ProgressValue style={{...STYLES[size]}} value={value} />
      </Trimmer>
    </ProgressWrapper>
  );
};

export default ProgressBar;
