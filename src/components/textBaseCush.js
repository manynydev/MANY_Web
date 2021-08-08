import styled from 'styled-components';

const TextBaseCush = styled.text`
{
  position: absolute;
  font-size: ${props => props.fontSize ? props.fontSize : '22px' };
  text-transform: initial;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'bold'};
  font-family: 'CushingStdBook', serif;
  color:  ${props => props.color ? props.color : '#151515' };
  justify-content: center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
`

export default TextBaseCush
