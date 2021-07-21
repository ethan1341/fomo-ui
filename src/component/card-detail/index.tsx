import {useEffect} from "react";
import {useLocation} from 'react-router'

export const CardDetail = ()=>{
    const location = useLocation()
    useEffect(()=>{
        // @ts-ignore
        console.log(location.state.card.cleanName,'hello')
    })
    return (
        <h2>hello</h2>
    )
}

export default CardDetail