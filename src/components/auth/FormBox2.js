import styled from "styled-components";


const Container = styled.div`
  
  
  form {
    padding-left:30px;
    height:550px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    border: 4px dotted green;
  }
`;

function FormBox2({ children }) {
  return <Container>{children}</Container>;
}
export default FormBox2;