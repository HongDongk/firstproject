import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Link } from "react-router-dom";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import FormBox2 from "../components/auth/FormBox2";
import routes from "../routes";
import logo from '../img/Logo.png';
import dog from '../img/dog2.png';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: -1;
`;
const Square = styled.div`
    width: 896px;
    height: 1198px;
    background: #EDEDED;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 100px;
`;
const Sinfo = styled.div`
    font-weight: 700;
    font-size: 14px;  
    line-height: 15px;     
`;

const SInput = styled(Input)`
    width: 161px;
    height: 40px;
`;
const SInput2 = styled(Input)`
    width: 410px;
    height: 40px;  
`;

const SButton= styled(Button)`
    width: 410px;
    height: 45px;
`;
const SImg = styled.img`
    width: 274px;
    height: 71px;
    position: relative;
    top: 65px;    
`;
const Sdog = styled.img`
    width: 205.06px;
    height: 261.61px;
    z-index: 1;
    position: relative;
    bottom:130px;
    left:430px;
    
`;
const Box = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;


`;

function PetSignup() {

    const { register, handleSubmit, formState: { errors, isValid }, control} = useForm({mode: "onChange",});
    
    const selectOptions = [
        { value: "student", label: "Student" },
        { value: "developer", label: "Developer" },
        { value: "manager", label: "Manager" }
      ];
    const registerOptions = {
        
        role: { required: "Role is required" }
    };
      const onSubmitValid = (data) => {
        
    };
    return (
        <Container>
            <PageTitle title1="PetSignUp" />
            <SImg src={logo} alt='Logo' />
                <Square>
                <FormBox2>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Sinfo>반려동물이름</Sinfo>
                    <SInput2
                        {...register("petname", {
                        required: "반려동물의 이름을 입력해주세요",
                            },
                        )}
                        name="petname"
                        type="text"
                        hasError={Boolean(errors?.petname?.message)}
                    />
                    <FormError message={errors?.petname?.message} />
                    <Sinfo>어떤 동물인가요?</Sinfo>
                    <Controller
                        name="role"
                        control={control}
                        defaultValue=""
                        rules={registerOptions.role}
                        render={({ field }) => (
                            <Select options={selectOptions} {...field} label="Text field" />
                        )}
                    />

                  
                    <SButton type="submit" value="반려동물 정보 입력하러가기" disabled={!isValid }/> 
                    </form>
                </FormBox2>
                    
                </Square>
            
                <Sdog src={dog} alt='Dog' />
        </Container>
            
    
    );
  }
  export default PetSignup;