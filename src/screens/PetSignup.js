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
                    <Sinfo>??????????????????</Sinfo>
                    <SInput
                        {...register("petname", {
                        required: "??????????????? ????????? ??????????????????",
                            },
                        )}
                        name="petname"
                        type="text"
                        hasError={Boolean(errors?.petname?.message)}
                    />
                    <FormError message={errors?.petname?.message} />
                    <Sinfo>?????? ????????????????</Sinfo>
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
                                <MenuItem value={'?????????'}>?????????</MenuItem>
                                <MenuItem value={'?????????'}>?????????</MenuItem>
                                <MenuItem value={'?????????'}>?????????</MenuItem>
                                <MenuItem value={'??????'}>??????</MenuItem>
                                <MenuItem value={'????????????'}>????????????</MenuItem>
                                <MenuItem value={'?????????'}>?????????</MenuItem>
                                <MenuItem value={'????????????'}>????????????</MenuItem>
                                <MenuItem value={'??????'}>??????</MenuItem>
                                <MenuItem value={'??????'}>??????</MenuItem>
                                </Select>
                        </FormControl>
                    </Box>
                    

           
                    <Sinfo>????????? ????????????????</Sinfo>
                    <SInput
                        {...register("petvarious", {
                        required: "??????????????? ????????? ??????????????????",
                            },
                        )}
                        name="petvarious"
                        type="text"
                        hasError={Boolean(errors?.petvarious?.message)}
                    />
                    <FormError message={errors?.petvarious?.message} />
                    
                    <Sinfo>?????? ??????????</Sinfo>
                    <SInput
                        {...register("petkage", {
                        required: "??????????????? ????????? ??????????????????",
                            },
                        )}
                        name="petkage"
                        type="text"
                        hasError={Boolean(errors?.petage?.message)}
                    />
                    <FormError message={errors?.petage?.message} />
                    
                    <Sinfo>????????? ????????????????</Sinfo>
                    <Gender>
                        <FormControlLabel control={<Checkbox/>} label="??????" />
                        <FormControlLabel control={<Checkbox/>} label="??????" />
                        <FormControlLabel control={<Checkbox/>} label="???????????????" />
                    </Gender>
                                       
                    
                    <Sinfo>??????????????? ????????? ??????????????????(??????)</Sinfo>
                    <Last>
                        <Petavatar>
                            {imageSrc && <Petimg src={imageSrc} alt="preview-img" />}
                        </Petavatar>
                        <File type="file" onChange={(e) => { encodeFileToBase64(e.target.files[0]);}} />
                        
                    </Last>                    
                    
                    <SButton type="submit" value="???????????? ????????????" disabled={!isValid }/> 
                    </form>
                </FormBox3>
                    
                </Square>
            
                <Sdog src={dog} alt='Dog' />
        </Container>
            
    
    );
  }
  export default PetSignup;