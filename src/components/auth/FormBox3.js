import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  

  form {
    height:900px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
  }
`;

function FormBox3({ children }) {
  return <Container>{children}</Container>;
}
export default FormBox3;