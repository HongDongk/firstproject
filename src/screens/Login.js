import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";


const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  
  const { register, handleSubmit, formState: { errors, isValid },} = useForm({mode: "onChange"});
  const onSubmitValid = (data) => {
  
  };
  
  return (
    
    <AuthLayout>

        <PageTitle title1="Login" />
        <FormBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          
          <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("username",{
              required: "Username is required",
              minLength: {
                value: 5,
                message: "Username should be longer than 5 chars.",
              },
            })}
            type="text"
            placeholder="Username"
          />
          <FormError message={errors?.username?.message} />
          <Input
            {...register("password",{
              required: "Password is required.",
            })}
            type="password"
            placeholder="Password"
          />
            <FormError message={errors?.password?.message} />
            <Button type="submit" value="Log in" disabled={!isValid} />
          </form>
          
          <Separator />
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
        </FormBox>
        <BottomBox
          cta="Don't have an account?"
          linkText="Sign up"
          link={routes.signUp}
        />
    
    </AuthLayout>
  );
}
  

export default Login;