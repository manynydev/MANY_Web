import styled from 'styled-components';

const MainContainer = styled.div`
{
  z-index: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  position: fixed;
}
`

export default MainContainer;
