import Header from "../components/Header";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import routes from "../routes";
import logo from '../img/Logo.png';

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Square = styled.div`
    width: 896px;
    height: 570px;
    background: #EDEDED;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Notice = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
`

const SImg = styled.img`
    width: 96px;
    height: 24px;
`;


function Login() {

    const { register, handleSubmit, formState: { errors, isValid },} = useForm({mode: "onChange",});
    const onSubmitValid = (data) => {
     
    };
    return (
        <Container>
            <SImg src={logo} className='Logo' alt='Logo' />

            <Square>
                <FormBox>
                    
                    <Notice>지금 바로 Petmory와 함께하세요!</Notice>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input
                        {...register("email", {
                        required: "Email is required.",
                        pattern: {
                            value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                            message: "올바른이메일형식이 아닙니다",
                            },
                        })}
                        name="email"
                        type="email"
                        placeholder="이메일"
                        hasError={Boolean(errors?.email?.message)}
                    />
                    <FormError message={errors?.email?.message} />
                    <Input
                        {...register("password", {
                        required: "Password is required.",
                        minLength: {
                            value: 8,
                            message: "Your password is too short.",
                            },
                        })}
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                        hasError={Boolean(errors?.password?.message)}
                    />
                    <FormError message={errors?.password?.message} />
                    <Button type="submit" value="로그인" disabled={!isValid} />
                    </form>
                </FormBox>
                <BottomBox
                cta="아직 회원이 아니신가요?"
                linkText="회원가입하러 가기"
                link={routes.signUp}/>
            </Square>

        </Container>

    
    );
  }
  export default Login;