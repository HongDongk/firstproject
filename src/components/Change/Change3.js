import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../../routes";
import main1 from '../../img/1.png';

const Schange = styled.div`
    
`;
const Sinfo = styled.div`
    position:absolute;
    left:30px;
    top:70px;
    width: 395px;    
`;
const Sp = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #EF5252; 
`;
const Sp2 = styled.p`
    position:relative;
    top:11px;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #000000;
`;
const SImg3 = styled.img`
    width: 662.81px;
    height: 367.04px;
    margin-left:60px;
`;


function Change3() {
    return (
      <Schange>
        <Sinfo>
            <Sp>간편한 게시글 형식으로 반려인들끼리 다양한 정보를 공유할 수 있습니다.</Sp>
            <Sp2>매일매일 반려인들이 적은 투병 일지가 업로드 됩니다.</Sp2>
            <Sp2>이를 통해 반려인들은 서로서로 정보를 공유하고 대화할 수 있습니다.</Sp2>
        </Sinfo>
        <SImg3 src={main1} alt='Main' />.
      </Schange>
    );
  }

export default Change3;