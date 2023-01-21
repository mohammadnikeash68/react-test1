
import { useContext } from "react";
import ItemTime from "./ItemTime";
import { Context } from "./TestContext";

const TimeList = (props)=>{
    const context = useContext(Context);
   return( 
         <div className="time-list">
            {context.arrTime.map((c,i)=>(

                <ItemTime index={i} key={Math.random()}>{c}</ItemTime>
            ))}
         </div>
    );
}

export default TimeList;