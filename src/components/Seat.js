import { useState } from "react"


export default function Seat({isAvailable, name}){

    const [selected, setSelected] = useState(false);
    const [state, setState] = useState("")

    function selectSeat(){
        setSelected(!selected);
    }
   
    if(selected){
        return(
            <div className = "seat selected" onClick={selectSeat}>{name}</div>
        )
    }

    else if (isAvailable === true){
        return(
            <div className = "seat available" onClick={selectSeat}>{name}</div>
        )
    }
    else {
        return(
            <div className = "seat unavailable" onClick={selectSeat}>{name}</div>
        )
    }
   
    
}