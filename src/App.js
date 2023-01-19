import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Time from './Time';
import { Context } from './TestContext';

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             title : "به آموزش ریکت خوش آمدید"
//         }
//     }

//     handleChange = ()=>{
//         this.setState({title:"این عنوان تغییر یافت"})
//     }
    
//     render(){        
//         return(
            // <div className='main'>
            //     <Hello title={this.state.title} />
            //     <Time handleChange={this.handleChange}/>
                
            // </div>
//         );
//     }
 
// }

const App = ()=>{
    const [title,setTitle] = useState("به آموزش ریکت خوش آمدید");
    const [isLight,setIsLight] = useState(false);
    const [isTitle,setIsTitle] = useState(false);
    const [arrTime,setArrTime] = useState(['00:05:01','02:05:10']);
    const handleChange = ()=>{
        setIsTitle(!isTitle);
        
       
    }
    const handleClickChangeStyle = ()=>{
        setIsLight(!isLight);
    }
    useEffect(()=>{
        isTitle ? setTitle('من تغییر کردم') : setTitle("به آموزش ریکت خوش آمدید");

        return()=>{
            console.log('unmount');
        };
    },[isTitle]);

    return(
        <Context.Provider value={{arrTime:arrTime,setArrTime:setArrTime}}>
        <div className='main' style={{background: isLight ? 'white' :'black',color:'chocolate'}}>
            <Hello setTitle={setTitle} isTitle={isTitle} title={title} />
            <Time handleChange={handleChange} handleClickChangeStyle={handleClickChangeStyle} isLight={isLight}/>
        
         </div>
         </Context.Provider>
    )

}
export default App;
