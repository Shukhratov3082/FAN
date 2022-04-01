import React from 'react';
import styled from 'styled-components';
import img1 from '../images/fanImg1.jpg'
import img2 from '../images/fanImg2.jpg'
import img3 from '../images/fanImg3.jpg'

const Kurslar = () => {
    return (
        <Wrapper>
            <header>
                <h2>Kurslar</h2>
            </header>
            <div>
                <ol>
                    <li>1 - Buxgalteriya </li>
                    <li>2 - IT / Kompyuter saboqlari</li>
                    <li>3 - Ingliz Tili / IELTS </li>
                    <li>4 - Rus Tili</li>
                    <li>5 - Arab Tili </li>
                    <li>6 - Xitoy Tili</li>
                </ol>
                <div id="slideshow">
                    <div class="slide-wrapper">
                        <div class="slide"><img width='' height='' src={img1} alt="" /></div>
                        <div class="slide"><img width='' height='' src={img2} alt="" /></div>
                        <div class="slide"><img width='' height='' src={img3} alt="" /></div>
                    </div>
                </div>
            </div>

        </Wrapper>
    );
}

export default Kurslar;
const Wrapper = styled.div`
width: 100%;
height: 1000px;
/* background: linear-gradient(180deg,rgb(202 202 202 / 74%) 0%,rgb(5 74 53 / 82%) 81.25%,#1A8668 100%); */
background-color: white;
    header{
        width: 100%;
        height: 80px;
        background-color: #298B67;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
       padding:8px 0 0;
        h2{
            font-size: 63px;
            font-weight: bold;
            text-align: center;
            color: white;
            font-family: 'Petrona', serif;        
        }
    }
    div{    
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 74px 110px;
        ol{
         color: black;  
         list-style: none;
         font-size: 45px;      
         font-weight: bold;
         line-height:75px;
        li{
            font-family: ui-monospace;
            font-weight: 500;
        }

        }
        #slideshow {
        overflow: hidden;
        border-radius: 20px;
        border:4px solid #6671d0;
        box-shadow: 0px 0px 20px 9px #0100006b;
        height: 500px;
        margin-top: 40px;
        background-color: red;
        width: 500px;
        img{
            width: 500px;
            height: 500px;
        }
      
     
    }

    .slide-wrapper {
        width: 2912px;
        animation: slide 18s ease infinite;
      
    }

    .slide {        
        height: 600px;
        width: 500px;
      
    }
    /* @keyframes slide {
        20% { margin-left: 0px}
        30% { margin-left: -880px}
        50% {margin-left: -880px}
        60% {margin-left: -880px}
        70% {margin-left: -1400px}
        79% {margin-left: -1400px}
        80% {margin-left: -1400px}
        90% {margin-left: -2500px}
    } */
    @keyframes slide {
    
        0% { margin-left: -330px}
        20% { margin-left: -330px}
        30% { margin-left: -330px}
        50% {margin-left: -880px}
        60% {margin-left: -880px}
        70% {margin-left: -1430px}
        80% {margin-left: -1430px}
        90% {margin-left: -1430px}
        100% {margin-left: -330px}
    }

    }
    


`
