import React, { useState } from 'react'
import './Card.css'
import { FaBeer,FaUserCircle,FaHeart, FaRegHeart } from 'react-icons/fa';

const Card = () => {

    const [likeCount,setLikeCount] = useState(0)
    let element = document.getElementById("doubleLike")

    const manageLike = ()=> {
        if(likeCount === 0){
            setLikeCount(1)
        }else {
            setLikeCount(0)
        }
    }

    const clickToLike = ()=> {
        
        element.classList.remove("hide")
        setLikeCount(1)
        setTimeout(()=> {
            element.classList.add("hide")
        },1000)
    }

  return (
    <div className='cardContainer'>
        <div className='contTop'>
            <h1 className='cardTitle'>Instagram Card</h1>
            <p className='cardPara'>Like Count: <span>{likeCount}</span></p>
        </div>
        <div className='card'>
            <div className='cardTop'>
                <FaUserCircle/> <div style={{paddingLeft: '10px'}}>Tommy</div>
            </div>
            <div className='imageContainer' onDoubleClick={clickToLike}>
                <img className='mainImg' src='cat.png' alt='Tommy'/>
                <FaHeart id='doubleLike' className='double-like-ic hide red'/>
            </div>
            <div className='cardBottom'>
                <div>{likeCount===0? <FaRegHeart onClick={manageLike} className='like-ic'/> : <FaHeart onClick={manageLike} className='like-ic red'/>}</div>
            </div>
        </div>
    </div>
  )
}

export default Card
