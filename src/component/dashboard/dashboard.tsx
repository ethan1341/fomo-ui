import React, {useState} from "react";
import SetSelector from "../set-selector";
import {CardDisplay} from "../card-display";

export const Dashboard: React.FC = () => {
    const [selectedSet, setGroupFromChild] = useState(0);
    const selectSet = (e: any) => {
        console.log(e.target.value, 'hello')
        setGroupFromChild(e.target.value)
    }
    return (
        <>
            <SetSelector onClick={selectSet}></SetSelector>
            <CardDisplay selectedSet={selectedSet} ></CardDisplay>
        </>
    )
}


export default Dashboard