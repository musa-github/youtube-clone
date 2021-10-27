import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Player from '../components/Player';
import RelatedVideos from '../components/RelatedVideos';
import { fatchingRelatedVideos } from '../features/asyncAction';



function VideoPlayer(props) {
    const dispatch = useDispatch()

    const items = useSelector(state => state.videos.videos.items)
    const relatedVideos = useSelector(state => state.videos.relatedVideos.items)
const id =props.match.params.id;

const item = items&&items.filter((data)=>{
    if(data.id === id){
        return data
    }

})

    useEffect(() => {
        dispatch(fatchingRelatedVideos(id))

    }, [id, dispatch])
    

    return (
        <div className="videoPlayer">
            <Player item={item}/>
          <RelatedVideos items = {relatedVideos} />
            
            
        </div>
    )
}

export default VideoPlayer
