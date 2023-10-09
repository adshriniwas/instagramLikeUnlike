import React, { useState } from 'react'
import './Card.css'
import { FaBeer,FaUserCircle,FaHeart, FaRegHeart } from 'react-icons/fa';

const cardData = [
    {
        name: "Tom",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
        likeCount: 0
    },
    {
        name: "Ema",
        image: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
        likeCount: 0
    },
    {
        name: "John",
        image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
        likeCount: 0
    },
    {
        name: "Rahul",
        image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        likeCount: 0
    },
    {
        name: "Latika",
        image: "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=",
        likeCount: 0
    },
    {
        name: "Divya",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU",
        likeCount: 0
    },
    {
        name: "Bharati",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwnHoSNf3LepxYD5_Y4DDHlchMV90TACo_Q&usqp=CAU",
        likeCount: 0
    },
    {
        name: "Sonali",
        image: "https://image.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg",
        likeCount: 0
    }
]

const Card = () => {

    
    const [cardDataState, setCardDataState] = useState(cardData)
    
    const manageLike = (ind)=> {
        if(cardDataState[ind].likeCount === 0){
            
            setCardDataState(()=>{
                return cardDataState.map((crd,i)=>{
                    if(ind===i){
                        crd.likeCount = 1
                    }
                    return crd
                })
            })
        }else {
            
            setCardDataState(()=>{
                return cardDataState.map((crd,i)=>{
                    if(ind===i){
                        crd.likeCount = 0
                    }
                    return crd
                })
            })
        }
    }

    const clickToLike = (ind)=> {
        let element = document.getElementById(`doubleLike${ind}`)

        

        setCardDataState(()=>{
            return cardDataState.map((crd,i)=>{
                if(ind===i){
                    

                    element.classList.remove("hide")
                    crd.likeCount = 1
                    setTimeout(()=> {
                        element.classList.add("hide")
                    },1000)
                }
                return crd
            })
        })
    }

  return (
    <div className='cardContainer'>
        <div className='contTop'>
            <h1 className='cardTitle'>Instagram Card</h1>
            
        </div>
        <div className='cards'>
        {
            cardDataState.map((cardVal, index)=>{
                return(
                    <div key={index} className='card'>
                        <div className='cardTop'>
                            <div style={{display: "flex",alignItems: "center"}} ><FaUserCircle/> <span style={{paddingLeft: '10px', fontWeight: "600"}}>{cardVal.name}</span></div>
                            <p className='cardPara'>Likes: <span>{cardVal.likeCount}</span></p>
                        </div>
                        <div className='imageContainer' onDoubleClick={()=>clickToLike(index)}>
                            <img className='mainImg' src={cardVal.image} alt='Tommy'/>
                            <FaHeart id={`doubleLike${index}`} className='double-like-ic hide red'/>
                        </div>
                        <div className='cardBottom'>
                            <div>{cardVal.likeCount===0? <FaRegHeart onClick={()=>manageLike(index)} className='like-ic'/> : <FaHeart onClick={()=>manageLike(index)} className='like-ic red'/>}</div>
                        </div>
                    </div>
                )
            })
        }
        </div>
        
    </div>
  )
}

export default Card
