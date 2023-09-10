const Button = (props)=>{
    return(<button onClick={(event)=>{
        console.log(event.currentTarget.value)        
        props.btnFired(event.currentTarget.value)
    }} className={`border-2 text-xl font-bold rounded-lg ${props.cssText} ${props.cssColor}`} value={props.btnVal}>{props.btnVal}</button>)
}

export default Button;