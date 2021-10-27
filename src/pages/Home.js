import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Video from "../components/Video";
import { facingVideos } from '../features/asyncAction';
import { controlAside } from '../features/controlSlice';
import { Container } from '../styled/container.styles';
function Home() {
   
    const dispatch = useDispatch()
    const homevideos = useSelector((state)=>state.videos.videos.items);
   
        useEffect(() => {
            dispatch(facingVideos())
            dispatch(controlAside(true))
        }, [dispatch]);


    return (
          <Container>
            <div className="home">
            {
            homevideos&&homevideos.map((item,index)=>{
                return   <Video  key={index} item={item} />
            })
            } 

            </div>
         </Container>
    )
}

export default Home
