import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import routes from "../routes";
import logo from '../img/Logo.png';
import cat from '../img/cat1.png';
import dog from '../img/dog1.png';


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
    height: 570px;
    background: #EDEDED;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:50px;
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
    position: relative;
    bottom:55px;
    
`;
const SImg2 = styled.img`
    width: 70px;
    height: 18px;
    margin-top:64px;
`;
const Sdog = styled.img`
    width: 280.46px;
    height: 174.37px;
    margin-right:50px;
    margin-top:28px;
`;
const Scat = styled.img`
    width: 218.26px;
    height: 199.37px;
    margin-left:50px;
`;
const Imagebox = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    bottom: 110px;
    z-index: 1;
`;
const StyledLink = styled(Link)`
    positon:fixed;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #A9A9A9;
    margin-left:270px;
    margin-top:5px;
`;



function Login() {

    const { register, handleSubmit, formState: { errors, isValid },} = useForm({mode: "onChange",});
    const onSubmitValid = (data) => {
     
    };
    return (
        <Container>
            <PageTitle title1="Login" />
            <SImg src={logo} alt='Logo' />
            <Square>
                <FormBox>
                    
                    <Notice>?????? ?????? Petmory??? ???????????????!</Notice>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input
                        {...register("email", {
                        required: "???????????? ??????????????????",
                        pattern: {
                            value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                            message: "??????????????????????????? ????????????",
                            },
                        })}
                        name="email"
                        type="email"
                        placeholder="?????????"
                        hasError={Boolean(errors?.email?.message)}
                    />
                    <FormError message={errors?.email?.message} />
                    <Input
                        {...register("password", {
                        required: "??????????????? ??????????????????",
                        minLength: {
                            value: 8,
                            message: "???????????????8??????????????????????????????",
                            },
                        })}
                        name="password"
                        type="password"
                        placeholder="????????????"
                        hasError={Boolean(errors?.password?.message)}
                    />
                    <FormError message={errors?.password?.message} />
                    <StyledLink to={routes.find}>??????????????????</StyledLink>
                    <Button type="submit" value="?????????" disabled={!isValid} />
                    </form>
                </FormBox>
                <BottomBox
                cta="?????? ????????? ????????????????"
                linkText="?????????????????? ??????"
                link={routes.signup}/>
                <SImg2 src={logo} alt='Logo' />
            </Square>
            <Imagebox>
                <Sdog src={dog}  alt='dog' />
                <Scat src={cat}  alt='cat' />            
            </Imagebox>
        </Container>
            
    
    );
  }
  export default Login;