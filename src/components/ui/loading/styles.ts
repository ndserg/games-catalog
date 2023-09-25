import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { 
    -webkit-transform: rotate(0deg) scale(0.8); 
    -moz-transform: rotate(0deg) scale(0.8);
  }
  50% { 
    -webkit-transform: rotate(360deg) scale(1.2); 
    -moz-transform: rotate(360deg) scale(1.2);
  }
  100% { 
    -webkit-transform: rotate(720deg) scale(0.8); 
    -moz-transform: rotate(720deg) scale(0.8);
  }
`;

const ball1  = keyframes`
  0% {
    box-shadow: 80px 0 0 #f8b334;
  }
  50% {
    box-shadow: 0 0 0 #f8b334;
    margin-bottom: 0;
    -webkit-transform: translate(30px,30px);
    -moz-transform: translate(30px, 30px);
  }
  100% {
    box-shadow: 80px 0 0 #f8b334;
    margin-bottom: 40px;
  }
`;

const ball2 = keyframes`
  0% {
    box-shadow: 80px 0 0 #97bf0d;
  }
  50% {
    box-shadow: 0 0 0 #97bf0d;
    margin-top: -40px;
    -webkit-transform: translate(30px,30px);
    -moz-transform: translate(30px, 30px);
  }
  100% {
    box-shadow: 80px 0 0 #97bf0d;
    margin-top: 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledLoading = styled.div`
  animation: ${rotate} 3s infinite;
  height: 120px;
  width: 120px;

&:before,
&:after {   
  border-radius: 50%;
  content: '';
  display: block;
  height: 40px;  
  width: 40px;
}

&:before {
  animation: ${ball1} 3s infinite;  
  background-color: #cb2025;
  box-shadow: 80px 0 0 #f8b334;
  margin-bottom: 40px;
}

&:after {
  animation: ${ball2} 3s infinite; 
  background-color: #00a096;
  box-shadow: 80px 0 0 #97bf0d;
}
`;

