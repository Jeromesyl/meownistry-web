import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { connect, styled } from "frontity";
import catpaw from '../../assets/cat-paw.png'
import catbody from '../../assets/cat-body.png'
import cateye from '../../assets/cat-eye.png'

type Point = {
    x: number;
    y: number;
}

function angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}

function calcPointB(hyp: number, angle: number, pointA: Point) {
    const deg = angle > 90 ? 180 - angle : angle;
    const rad = deg * Math.PI/180;
    const opp = hyp * Math.sin(rad);
    const adj = angle > 90? hyp * Math.cos(rad) * -1 : hyp * Math.cos(rad);
    
    const pointB: Point = {
        x: pointA.x + adj,
        y: pointA.y + opp
    }
    return pointB
}


function PawCursor () {
    const [mousePos, _setMousePos] = useState({x: 0, y: 0})
    const [pawAnchor, setPawAnchor] = useState({x: 0, y: 0})
    const mousePosRef = useRef(mousePos)

    const setMousePos = (data: Point) => {
        mousePosRef.current = data;
        _setMousePos(data)
    } 
    
    const mouseTracker = (e: { clientX: number; clientY: number; }) => {
        const mouseX = e.clientX
        const mouseY = e.clientY
        if (mouseX && mouseY) {
            setMousePos({x: mouseX, y: mouseY});
        }
        
    }


    const getPawAnchor = () => {
        const anchor = document.getElementById('paw-anchor')
        if (anchor) {
            const rekt = anchor.getBoundingClientRect();
            const pawAnchorX = rekt.left + rekt.width / 2;
            const pawAnchorY = rekt.top + rekt.height;
            setPawAnchor({x: pawAnchorX, y:pawAnchorY})
        }
    }
    

    const rotatePaw = () => {
        let angleDeg = 0;
        angleDeg = angle(mousePos.x, mousePos.y, pawAnchor.x, pawAnchor.y);
        const paw = document.getElementById('cat-paw')
        if (paw) {
            paw.style.transform = `rotate(${-90 + angleDeg}deg)`;
        }
    }

    const clickPaw = () => {
        const paw = document.getElementById('cat-paw');
        if (paw) {
            const rekt = paw.getBoundingClientRect();
            const angleDeg = angle(mousePos.x, mousePos.y, pawAnchor.x, pawAnchor.y);
            
            const pointB = calcPointB(rekt.height, angleDeg, mousePos)
            paw.style.transform = `translate(${(pointB.x) - pawAnchor.x}px, ${(pointB.y) - pawAnchor.y}px) 
                                    rotate(${-90 + angleDeg}deg)`;
            paw.style.transition = `transform 0.1s ease`;
        }
    }

    const rotateEye = () => {
        let angleDeg = 0;
        let eyeAnchorX = 0;
        let eyeAnchorY = 0;
        const eyeAnchor = document.getElementById('eye-anchor')
        if (eyeAnchor) {
            const rekt = eyeAnchor.getBoundingClientRect();
            eyeAnchorX = rekt.left + rekt.width / 2;
            eyeAnchorY = rekt.top + rekt.height / 2;
        }
        angleDeg = angle(mousePos.x, mousePos.y, eyeAnchorX, eyeAnchorY);
        const eyes = document.querySelectorAll('.cat-eye')
        eyes.forEach(eye => {
            const eyeElement = eye as HTMLElement;
            eyeElement.style.transform = `rotate(${-160 + angleDeg}deg)`;
        })
    }

    useEffect(() => {
        getPawAnchor()
        document.addEventListener('mousemove', mouseTracker)
        rotatePaw()
        rotateEye()
        document.addEventListener('mousedown', clickPaw)

        return () => {
            document.removeEventListener('mousemove', mouseTracker);
            document.removeEventListener('mousedown', clickPaw);
        };
        
    }, [mousePos])

    


    return (
    <>
        <PawContainer id="paw-anchor">
            <img id="cat-paw" className='cat-paw' src={catpaw}></img>
        </PawContainer>
        <BodyContainer src={catbody}/>
        <EyesContainer id='eye-anchor'>
            <img className='cat-eye' src={cateye}></img>
            <img className='cat-eye' src={cateye}></img>
        </EyesContainer>                
    </>
  )
}

export default PawCursor;

const PawContainer = styled.div`
position: fixed;
height:auto;
width: 100px;
bottom: -50px;
left: 250px;
z-index: 9999;

.cat-paw {
    width: 100%;
    transform-origin: 50% 100%;
}
`
const BodyContainer = styled.img`
position: fixed;
height:auto;
width: 400px;
bottom: 0px;
left: 10px;
z-index: 9998;
`

const EyesContainer = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
height: 65px;
width: 177px;
bottom: 85px;
left: 95px;
z-index: 9997;
`


