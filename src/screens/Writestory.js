import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    widht:100vw;
    height: 100vh;
    background: #F5F5F5;
    z-index:1;
`;
const Frontsquare = styled.div`
    display: flex;
    height: 40%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
    z-index:4;
`;
const Input = styled.input`
    margin-bottom:57px;
    margin-right:25vw;
    width: 653px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 3px;  
    border:none;
    &::placeholder {
        font-weight: 900;
        font-size: 30px;
        line-height: 45px;
        color: #C7C7C7;
    }  
`;
const Bottomsquare = styled.div`
    margin-top:5px;
    display:flex;
    justify-content: center;
    width:100%;   
    height:59%;
    z-index:3;
`;
const Input2 = styled.textarea`
    width:50%;
    margin-left:15%;
`;
const Rbox = styled.div`  
    margin-left:19px;
    margin-top:10px;
    width: 300px;
`;
const Dateselector = styled.div`
    width: 220px;
    display:flex;
    flex-wrap: wrap;
    height: 210px;
    background: #FFFFFF;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);  
    padding:12px 22px;
`;
const Sp = styled.p`  
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #000000;
`;
const Private = styled(Dateselector)`
    width:100%;
    height: 97px;
    margin-top:20px;
`;
const Bottom = styled.div`
    display:flex;
    width:300px;   
`;





function Writestory() {
    
    
    const [text, setText] = useState('');
    const onSearch = (e) => {
      setText(e.target.value);
    };
    const [text2, setText2] = useState('');
    const onSearch2 = (e) => {
      setText2(e.target.value);
    };

    const [year, setyear] = React.useState('');

    const handleChange = (event) => {
    setyear(event.target.value);
    };

    const [month, setmonth] = React.useState('');

    const handleChange1 = (event) => {
    setmonth(event.target.value);
    };

    const [date, setdate] = React.useState('');

    const handleChange2 = (event) => {
    setdate(event.target.value);
    };

    return (
        
        <Container>
            <PageTitle title1="Writestory" />
            <Frontsquare>
                <Header/>
                <Input onChange={onSearch} value={text} placeholder={"제목을 입력하세요"}/>
            </Frontsquare>
            <Bottomsquare>
                <Input2 onChange={onSearch2} value={text2} placeholder={"내용을 입력하세요"}/>
                <Rbox>
                    <Dateselector>
                        <Sp>날짜 선택</Sp>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">년</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={year}
                                label="Year"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={2022}>2022</MenuItem>
                                <MenuItem value={2023}>2023</MenuItem>
                                <MenuItem value={2024}>2024</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">월</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={month}
                                label="Month"
                                onChange={handleChange1}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>1월</MenuItem>
                                <MenuItem value={2}>2월</MenuItem>
                                <MenuItem value={3}>3월</MenuItem>
                                <MenuItem value={4}>4월</MenuItem>
                                <MenuItem value={5}>5월</MenuItem>
                                <MenuItem value={6}>6월</MenuItem>
                                <MenuItem value={7}>7월</MenuItem>
                                <MenuItem value={8}>8월</MenuItem>
                                <MenuItem value={9}>9월</MenuItem>
                                <MenuItem value={10}>10월</MenuItem>
                                <MenuItem value={11}>11월</MenuItem>
                                <MenuItem value={12}>12월</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">일</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={date}
                                label="Date"
                                onChange={handleChange2}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={13}>13</MenuItem>
                                <MenuItem value={14}>14</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                                <MenuItem value={16}>16</MenuItem>
                                <MenuItem value={17}>17</MenuItem>
                                <MenuItem value={18}>18</MenuItem>
                                <MenuItem value={19}>19</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={21}>21</MenuItem>
                                <MenuItem value={22}>22</MenuItem>
                                <MenuItem value={23}>23</MenuItem>
                                <MenuItem value={24}>24</MenuItem>
                                <MenuItem value={25}>25</MenuItem>
                                <MenuItem value={26}>26</MenuItem>
                                <MenuItem value={27}>27</MenuItem>
                                <MenuItem value={28}>28</MenuItem>
                                <MenuItem value={29}>29</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                                <MenuItem value={31}>31</MenuItem>
                            </Select>
                        </FormControl>
                    </Dateselector>
                    <Private>
                        <Sp>공개설정</Sp>
                        <Bottom>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="전체공개" />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox/>} label="나만보기" />
                            </FormGroup>
                        </Bottom>
                        
                    </Private>
                </Rbox>          
            </Bottomsquare>        
        </Container>
            
    
    );
  }
  
  export default Writestory;