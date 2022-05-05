import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import FormBox2 from "../components/auth/FormBox2";
import routes from "../routes";
import logo from '../img/Logo.png';
import cat from '../img/cat2.png';


const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: -1;
`;
const Square = styled.div`
    width: 896px;
    height: 658px;
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

const Sinfo2 = styled(Sinfo)`
    margin-top:17px;
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
const Scat = styled.img`
    width: 340.35px;
    height: 215.5px;
    z-index: 1;
    position: relative;
    right:400px;
    bottom:30px;
`;
const Box = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;


`;

function Signup() {

    const { register, handleSubmit, formState: { errors, isValid }, setError} = useForm({mode: "onChange",});
    
    const onSubmitValid = (data) => {
        if (data.password !== data.password1) {
            setError(
              "password1",
              { message: "비밀번호가 일치하지않습니다" },
              { shouldFocus: true }
            );
        }
        <link to={routes.Petsignup}></link>

    };
    return (
        <Container>
            <PageTitle title1="SignUp" />
            <SImg src={logo} alt='Logo' />
                <Square>
                <FormBox2>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Sinfo>이메일</Sinfo>
                    <SInput2
                        {...register("email", {
                        required: "이메일을 입력해주세요",
                        pattern: {
                            value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                            message: "올바른이메일형식이 아닙니다",
                            },
                        })}
                        name="email"
                        type="email"
                        hasError={Boolean(errors?.email?.message)}
                    />
                    <FormError message={errors?.email?.message} />
                    <Sinfo>비밀번호</Sinfo>
                    <SInput2
                        {...register("password", {
                            required: "비밀번호를 입력해주세요",
                            minLength: {
                                value: 8,
                                message: "비밀번호는8자리이상이여야합니다",
                                },
                        })}
                        name="password"
                        type="password"
                        hasError={Boolean(errors?.password?.message)}
                    />
                    <FormError message={errors?.password?.message} />
                    <Sinfo>비밀번호재확인</Sinfo>
                    <SInput2
                        {...register("password1", {
                            required: "비밀번호를 재입력해주세요",
                            minLength: {
                                value: 8,
                                message: "비밀번호는8자리이상이여야합니다",
                                },
                        })}
                        name="password1"
                        type="password"
                        hasError={Boolean(errors?.password1?.message)}
                    />
                    <FormError message={errors?.password1?.message} />
                    <Box>
                    <Sinfo2>성</Sinfo2>
                    <SInput
                        {...register("gender", {
                        required: "성을 입력해주세요",
                        })}
                        name="gender"
                        type="text"
                        hasError={Boolean(errors?.gender?.message)}
                    />
                    <FormError message={errors?.gender?.message} />
                    <Sinfo2>이름</Sinfo2>
                    <SInput
                        {...register("name", {
                        required: "이름을 입력해주세요",
                        })}
                        name="name"
                        type="text"
                        hasError={Boolean(errors?.name?.message)}
                    />
                    <FormError message={errors?.name?.message} />
                    </Box>
                    <SButton type="submit" value="반려동물 정보 입력하러가기" disabled={!isValid }/> 
                    </form>
                </FormBox2>
                    
                </Square>
            
                <Scat src={cat} alt='Cat' />
        </Container>
            
    
    );
  }
  export default Signup;