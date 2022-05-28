import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import FormBox3 from "../components/auth/FormBox3";
import routes from "../routes";
import logo from '../img/logobig.png';
import dog from '../img/dog2.png';
import {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as React from 'react';


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
    width: 550px;
    height: 40px;  
`;
const Gender = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between; 
    width:300px;
 `;
 const Petavatar = styled.div` 
    width:50px;
    height:50px;  
 `;
 const Last = styled.div`
    display: flex;
    margin-top:30px;  
    height:100px;
 `;
 const File = styled.input`
    margin-left:150px;
    margin-top:50px;
 `;
const SButton= styled(Button)`
    width: 550px;
    height: 45px;
    margin-top:80px;
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
const Petimg = styled.img`
    width: 150px;
    height: 150px;  
    border-radius:50%;
    margin-left:10px;
`;





function PetSignup() {

    const { register, handleSubmit, formState: { errors, isValid }} = useForm({mode: "onChange",});

    const [Kind, setKind] = React.useState('');

    const handleChange = (event) => {
      setKind(event.target.value);
    };
    
    const [imageSrc, setImageSrc] = useState('');
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
      };


    
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
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="Kind"></InputLabel>
                                <Select
                                labelId="Kind"
                                id="Kind"
                                value={Kind}
                                label="Kind"
                                onChange={handleChange}
                                >
                                <MenuItem value={'강아지'}>강아지</MenuItem>
                                <MenuItem value={'고양이'}>고양이</MenuItem>
                                <MenuItem value={'햄스터'}>햄스터</MenuItem>
                                <MenuItem value={'토끼'}>토끼</MenuItem>
                                <MenuItem value={'고슴도치'}>고슴도치</MenuItem>
                                <MenuItem value={'거북이'}>거북이</MenuItem>
                                <MenuItem value={'기니피그'}>기니피그</MenuItem>
                                <MenuItem value={'조류'}>조류</MenuItem>
                                <MenuItem value={'패릿'}>패릿</MenuItem>
                                </Select>
                        </FormControl>
                    </Box>
                    

           
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
                    <Gender>
                        <FormControlLabel control={<Checkbox/>} label="남자" />
                        <FormControlLabel control={<Checkbox/>} label="여자" />
                        <FormControlLabel control={<Checkbox/>} label="모르겠어요" />
                    </Gender>
                                       
                    
                    <Sinfo>반려동물의 사진을 입력해주세요(선택)</Sinfo>
                    <Last>
                        <Petavatar>
                            {imageSrc && <Petimg src={imageSrc} alt="preview-img" />}
                        </Petavatar>
                        <File type="file" onChange={(e) => { encodeFileToBase64(e.target.files[0]);}} />
                        
                    </Last>                    
                    
                    <SButton type="submit" value="등록하고 완료하기" disabled={!isValid }/> 
                    </form>
                </FormBox3>
                    
                </Square>
            
                <Sdog src={dog} alt='Dog' />
        </Container>
            
    
    );
  }
  export default PetSignup;