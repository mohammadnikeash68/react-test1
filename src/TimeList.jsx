
import ItemTime from "./ItemTime";

const TimeList = (props)=>{
   return( 
         <div className="time-list">
            {props.children.map((c,i)=>(

                <ItemTime key={i}>{c}</ItemTime>
            ))}
         </div>
    );
}

export default TimeList;