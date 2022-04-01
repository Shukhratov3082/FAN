import styled from 'styled-components';
import React from 'react';
import img1 from '../images/fanImg1.jpg'
import img2 from '../images/fanImg2.jpg'
import img3 from '../images/fanImg3.jpg'
import img4 from '../images/fanImg4.jpg'
// import img5 from '../images/fanImg5.jpg'
const Scrool = () => {

    return (
        <Wrapper>

            <div class="slider">

                <input type="radio" name="slider" id="slide-1" checked />
                <input type="radio" name="slider" id="slide-2" checked />
                <input type="radio" name="slider" id="slide-3" checked />
                <input type="radio" name="slider" id="slide-4"  checkedh/>

                <div class="image">
                    <div><img src={img1} alt="" /></div>
                    <div><img src={img2} alt="" /></div>
                    <div><img src={img3} alt="" /></div>
                    <div><img src={img4} alt="" /></div>


                </div>

                <div class="arrows arrow-left">
                    <label for="slide-4"></label>
                    <label for="slide-1"></label>
                    <label for="slide-2"></label>
                    <label for="slide-3"></label>
                </div>
                <div class="arrows arrow-right">
                    <label for="slide-2"></label>
                    <label for="slide-3"></label>
                    <label for="slide-4"></label>
                    <label for="slide-1"></label>
                </div>

                <div class="dots">
                    <label for="slide-1"></label>
                    <label for="slide-2"></label>
                    <label for="slide-3"></label>
                    <label for="slide-4"></label>
                </div>

            </div>
        </Wrapper>
    );
}

export default Scrool;
const Wrapper = styled.div`
img{
    width: 100%;
    height: 100%;
}
html {
  text-align: center;
}


.slider label {
  transition: all 0.2s ease-out 0.1s;
}

body,
.slider {
  margin: 2em;
}

.slider {
  box-shadow: 0 0 0 0.5em #fff, 0 0 1em 0 #000;
  height: 213px;
  margin: 2em auto;
  min-height: 213px;
  min-width: 320px;
  overflow: hidden;
  position: relative;
  resize: both;
  width: 320px;
}

.slider label {
  cursor: pointer;
}

.slider input,
.slider .image div,
.slider .arrows label {
  display: none;
}

.slider .image,
.slider .image div {
  height: 100%;
  width: 100%;
}

.slider .image div {
  background: url("http://lorempixel.com/320/213/people/1/Slide Number 1") no-repeat scroll 50% 50%;
  background-size: cover;
}

.slider .image div:nth-child(2) {
  background-image: url("http://lorempixel.com/320/213/people/2/Slide Number 2");
}

.slider .image div:nth-child(3) {
  background-image: url("http://lorempixel.com/320/213/people/3/Slide Number 3");
}
.slider .image div:nth-child(4) {
  background-image: url("http://lorempixel.com/320/213/people/3/Slide Number 4");
}

.slider input:nth-child(1):checked ~ .image div:nth-child(1),
.slider input:nth-child(2):checked ~ .image div:nth-child(2),
.slider input:nth-child(3):checked ~ .image div:nth-child(3),
.slider input:nth-child(4):checked ~ .image div:nth-child(4) {
  display: block;
}

.slider .arrows {
  bottom: 0;
  color: #eee;
  display: table;
  font-size: 4em;
  height: 100%;
  position: absolute;
  text-align: left;
  text-shadow: 0px 0px 10px #000, 0px 0px 10px #000;
  top: 0;
  width: 50%;
}

.slider .arrow-right {
  left: 50%;
  text-align: right;
}

.slider .arrows:hover {
  color: #000;
  text-shadow: 0px 0px 10px #fff, 0px 0px 10px #fff;
}

.slider .arrows label {
  padding: 0 10%;
  vertical-align: middle;
}

.slider .arrow-left label:before {
  content: "‹";
}

.slider .arrow-right label:before {
  content: "›";
}

.slider input:nth-child(1):checked ~ .arrows label:nth-child(1),
.slider input:nth-child(2):checked ~ .arrows label:nth-child(2),
.slider input:nth-child(3):checked ~ .arrows label:nth-child(3),
.slider input:nth-child(4):checked ~ .arrows label:nth-child(4) {
  display: table-cell;
}

.slider .dots {
  height: 30px;
  margin-top: -30px;
  position: absolute;
  text-align: center;
  width: 100%;
}

.slider .dots label {
  background: #eee;
  border-radius: 1em;
  border: 2px solid #000;
  display: inline-block;
  margin: 0 0.75em;
  height: 0.75em;
  width: 0.75em;
}

.slider .dots label:hover {
  background: #000;
}

.slider input:nth-child(1):checked ~ .dots label:nth-child(1),
.slider input:nth-child(2):checked ~ .dots label:nth-child(2),
.slider input:nth-child(3):checked ~ .dots label:nth-child(3),
.slider input:nth-child(4):checked ~ .dots label:nth-child(4) {
  background: #000;
  border: 2px solid #fff;
}
`