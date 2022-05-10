import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const StyledSVG = styled(SVG)`
  ${(props) => `height: ${props.theme.fontSizes[props.size]}px;`}
  ${(props) => `color: ${props.color}`};
  cursor: pointer;
`;
export default StyledSVG;
