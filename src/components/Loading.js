import icon from "../assets/img/Loading_icon.gif";
import styled from "styled-components";

export default function Loading(){

    return (
        <Wrapper>
            <img alt="LoadingIcon" src={icon}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    justify-content:center;
    align-items:center;
`