import React from 'react';
import styled from 'styled-components';
import bg from '../images/head-bg.png'
import logo from '../images/Logo.svg'
import headImages from '../images/head-arab.png'
const Asosiy = () => {
    return (
        <Wrapper>
            <header>
                <div className='left'>
                    <img src={logo} alt="" />
                    <div className='fan'>
                        <p>F  -<span> faol</span> </p>
                        <p>A -<span> amaliyot</span> </p>
                        <p>N -<span> natija</span> </p>
                    </div>
                </div>
                <div className='right'>
                    <button>Asosiy</button>
                    <button>Kurslar</button>
                    <button>Galereya</button>
                </div>
            </header>
            <div>
                <h1>FAN O’QUV <br />
                    MARKAZIGA <br />
                    HUSH KELIBSIZ</h1>
                <img className='arab' src={headImages} alt="" />
            </div>
        </Wrapper>
    );
}

export default Asosiy;
const Wrapper = styled.div`
width: 100%;
height: 800px;
background-image:url(${bg});
background-position: center;
background-size: cover;
padding:10px 110px 94px 110px;
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 125px;
    .left{
        display: flex;
        align-items: center;
        gap: 10px;
            .fan{  
                display: block;
                color: white;
                font-size: 30px;
                font-weight: bold;
                span{
                    font-weight: 600;
                }
                p:first-child{
                    margin-left: 3px;
                }
            }
            img{
                width: 170px;
                height: 170px;
                
            }
     }
   .right{
       display: flex;
       gap: 50px;
        button{
            width: 200px;
            height: 65px;
            border-radius: 40px;
            background-color: white;
            color: #1FA5DE;
            font-size: 30px;
            font-weight: bold;
            border: none;
            -webkit-transition: 0.3s ease-in;
            transition: 0.3s ease-in;
            &:hover{
                background-color: #1FA5DE;
                color: white;
            }
        }
   }
}
div{
    display: flex;
    justify-content: space-between;
    align-items: center;
        h1{
            font-size: 60px;
            color: #1B2C34;
            font-family: 'Patua One', cursive;
        }
        .arab{
            width: 525px;
            height: 425px;
            box-shadow: 6px 6px 20px 0px #1b2c34;
            border-radius: 111px;
        }
}
`
