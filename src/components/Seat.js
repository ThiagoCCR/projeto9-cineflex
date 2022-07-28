export default function Seat({isAvailable, name}){

    if (isAvailable === true){
        return(
            <div className="seat available">{name}</div>
        )
    }
    if (isAvailable === false){
        return(
            <div className="seat unavailable">{name}</div>
        )
    }
    
}