import styled from "styled-components";


const Container = styled.div`
  
  
  form {
    
    height:550px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    
  }
`;

function FormBox2({ children }) {
  return <Container>{children}</Container>;
}
export default FormBox2;