import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Link } from "react-router-dom";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import FormBox3 from "../components/auth/FormBox3";
import routes from "../routes";
import logo from '../img/logobig.png';
import dog from '../img/dog2.png';
import {useState} from 'react'

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
    width: 410px;
    height: 40px;  
`;

const SInput2 = styled.input`
   
 `;

 const Sdiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-between; 
    width:250px;
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
        { value: "강아지", label: "강아지" },
        { value: "고양이", label: "고양이" },
        { value: "햄스터", label: "햄스터" },
        { value: "토끼", label: "토끼" },
        { value: "고슴도치", label: "고슴도치" },
        { value: "거북이", label: "거북이" },
        { value: "기니피그", label: "기니피그" },
        { value: "조류", label: "조류" },
        { value: "패릿", label: "패릿" }  
      ];
    
    const onSubmitValid = (data) => {
        
    };
    
    
    return (
        
        <Container>           
            <PageTitle title1="PetSignUp" />
            <SImg src={logo} alt='Logo' />
                
                <Square>
                <FormBox3>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Sinfo>반려동물이름</Sinfo>
                    <SInput
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
                        {...register("petkinds", {
                            required: "반려동물의 종류를입력해주세요",
                                },
                        )}
                        name="petkinds"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Select options={selectOptions} {...field}  label="Text field" />
                        )}
                    />

           
                    <Sinfo>품종은 무엇인가요?</Sinfo>
                    <SInput
                        {...register("petvarious", {
                        required: "반려동물의 품종을 입력해주세요",
                            },
                        )}
                        name="petvarious"
                        type="text"
                        hasError={Boolean(errors?.petvarious?.message)}
                    />
                    <FormError message={errors?.petvarious?.message} />
                    
                    <Sinfo>몇살 인가요?</Sinfo>
                    <SInput
                        {...register("petkage", {
                        required: "반려동물의 나이를 입력해주세요",
                            },
                        )}
                        name="petkage"
                        type="text"
                        hasError={Boolean(errors?.petage?.message)}
                    />
                    <FormError message={errors?.petage?.message} />
                    
                    <Sinfo>성별이 무엇인가요?</Sinfo>
                    <Sdiv>
                        <label><SInput2 {...register("gender", { required: true })} type="radio" value="male" />남자</label>
                        <label><SInput2 {...register("gender", { required: true })} type="radio" value="female" />여자</label>
                        <label><SInput2 {...register("gender", { required: true })} type="radio" value="none" />모르겠어요</label>    
                    </Sdiv>
                            
                    
                    <Sinfo>반려동물의 사진을 입력해주세요(선택)</Sinfo>
                    <SInput2 name="petimg" type="file"/>
                    
                    <SButton type="submit" value="등록하고 완료하기" disabled={!isValid }/> 
                    </form>
                </FormBox3>
                    
                </Square>
            
                <Sdog src={dog} alt='Dog' />
        </Container>
            
    
    );
  }
  export default PetSignup;