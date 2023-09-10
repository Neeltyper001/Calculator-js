import * as math from 'mathjs';
import Display from './Display.jsx'
import Button from './Button.jsx'
import { useState } from 'react';
const Body = ()=>{
    const [expression , setExpression] = useState('');
    console.log(expression)

    const getExpression  = (btnVal)=>{

        switch(btnVal){
            case 'AC' : setExpression(prevExpression =>''); break;
            case '=' :  setExpression(()=>{
                        try{ math.evaluate(expression)
                                }
                                catch(err){
                                    alert("Invalid Syntax")
                                }
                        }); break;

            case 'Del' : setExpression(()=>{return expression.substring(0,expression.length - 1)});break;

            default :   setExpression(prevExpression => prevExpression+''+btnVal);                     
        }
    }

    return (
        <div className="flex flex-col w-[500px] h-[500px] border-4 border-black rounded-lg p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Display displayVal={expression}/>
            <div className='grid grid-cols-4 gap-4 h-[400px]'>
                <Button btnFired={getExpression} cssText="text-black" cssColor="bg-gray-300" btnVal="("/>
                <Button btnFired={getExpression} cssText="text-black" cssColor="bg-gray-300" btnVal=")"/>    
                <Button btnFired={getExpression} cssText="text-black" cssColor="bg-gray-300" btnVal="Del"/>    
                <Button btnFired={getExpression} cssText="text-black" cssColor="bg-gray-300" btnVal="AC"/>
                
                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="7"/>
                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="8"/>    
                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="9"/>    
                <Button btnFired={getExpression} cssText="text-black" cssColor="bg-gray-300" btnVal="/"/>

                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="4"/>
                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="5"/>    
                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="6"/>    
                <Button btnFired={getExpression} cssText="text-black" cssColor="bg-gray-300" btnVal="*"/>

                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="1"/>
                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="2"/>    
                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="3"/>    
                <Button btnFired={getExpression} cssText="text-black" cssColor="bg-gray-300" btnVal="-"/>

                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="0"/>
                <Button btnFired={getExpression} cssText="text-black" cssColor="" btnVal="."/>    
                <Button btnFired={getExpression} cssText="text-white" cssColor="bg-blue-400" btnVal="="/>    
                <Button btnFired={getExpression} cssText="text-black" cssColor="bg-gray-300" btnVal="+"/>

            </div>
        </div>        
    )
}

export default Body;