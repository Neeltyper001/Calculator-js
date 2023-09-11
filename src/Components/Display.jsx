const Display = (props)=>{    
    return(
        <div className="flex justify-center items-center h-[100px] mb-2 p-2 border-2 bg-black">
            <p className="text-center text-4xl text-green-400">{props.displayVal}</p>
        </div>        
    )
}

export default Display;