import styled from 'styled-components';

const TextBaseManySans = styled.text`
{
  font-size: ${props => props.fontSize ? props.fontSize : '24px'};
  font-weight: normal;
  text-transform: initial;
  text-decoration: ${props => props.underline? 'underline' : 'none'};
  font-family: ManySans, sans-serif;
  color: ${props => props.color ? props.color : '#151515'};
  justify-content: center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
`

export default TextBaseManySans
