import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  position: relative;
  height: var(--height);
  width: ${(props) => `${props.width}px`};
  color: ${COLORS.gray700};
  font-weight: 700;

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: var(--icon-size);
  width: var(--icon-size);
  margin: auto;
`;

const Input = styled.input`
  margin: auto;
  color: inherit;
  width: 100%;
  height: 100%;
  appearance: none;
  padding: var(--padding-y) 0;
  padding-left: var(--padding-left);
  border: none;
  border-bottom: var(--border-size) solid black;
  font-size: var(--font-size);
  font-weight: inherit;
  font-family: "Roboto", sans-serif;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: inherit;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const SIZES = {
  small: {
    "--height": "24px",
    "--padding-left": "24px",
    "--padding-y": "4px",
    "--icon-size": "16px",
    "--font-size": "0.875rem",
    "--border-size": "1px",
  },
  large: {
    "--height": "36px",
    "--padding-left": "36px",
    "--padding-y": "8px",
    "--icon-size": "24px",
    "--font-size": "1rem",
    "--border-size": "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let styles;
  let iconProps;
  switch (size) {
    case "large":
      styles = SIZES[size];
      iconProps = { size: 24, strokeWidth: 2 };
      break;
    case "small":
      styles = SIZES[size];
      iconProps = { size: 16, strokeWidth: 1 };
      break;
    default:
      throw new Error(`Unsupported IconInput size: ${size}`);
  }

  if (styles === undefined || iconProps === undefined) {
    throw new Error("Unexpected undefined value");
  }

  return (
    <Wrapper width={width} style={{ ...styles }}>
      <IconWrapper>
        <Icon id={icon} {...iconProps} />
      </IconWrapper>
      <Input type="text" placeholder={placeholder} id="icon-input" />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
