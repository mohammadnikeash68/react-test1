import { useContext, useState } from "react";
import { Context } from "./TestContext";

const ItemTime = (props) =>{
    const [visible,setVisible] = useState(true);
    const context = useContext(Context);
    console.log(props.index);
    const handleClickItem = ()=>{
    //    let newArrTime = context.arrTime.filter((_,i)=> i !== index);
    //    context.setArrTime(newArrTime);
       setVisible((prev)=>!prev);
    }
    return(
        visible && (
        <div onClick={handleClickItem} style={{color:context}}>
            {props.children}
        </div>
    )
    );
}

export default ItemTime;