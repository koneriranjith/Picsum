import React, { useEffect, useState } from 'react'
import {View} from 'react-native'
import Carousel from '../components/Carousel/index.js'

import { getImages } from '../services/list'
import { useStore } from "../store";
import { setImages } from "../actions";

const Home = () => {
const [pagination, setPagination] = useState({page: 1, limit: 10});
const [{ images }, dispatch] = useStore();

    useEffect(()=> {
        getImages({limit: pagination.limit, page: pagination.page}).then( (data) => {
            dispatch(setImages(data))
        }) 
    },[])

    const onEndReached = () => {
        let page = (pagination.page + 1)
        getImages({
            limit: pagination.limit,
            page: page
        }).then( (data) => {
            if (images.length) {
            dispatch(setImages(images.concat(data)))
            } else {
            dispatch(setImages(data))
            }
        }) 
        setPagination({...pagination, page})
    }

    return (
        <View style={{marginTop: 30}}>
            <Carousel
                horizontal={true}
                pagingEnabled={true}
                scrollEnabled={true}
                snapToAlignment={'center'}
                onEndReachedThreshold={0.5}
                scrollEventThrottle={16}
                decelerationRate={'fast'}
                showsHorizontalScrollIndicator={true}
                showsHorizontalScrollIndicatorLimit={10}
                data={images} 
                onEndReached={() => { onEndReached() }} />
        </View>
    )
}

export default Home;