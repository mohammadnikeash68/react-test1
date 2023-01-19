import { useContext } from "react";
import { Context } from "./TestContext";

const ItemTime = (props) =>{
    const context = useContext(Context);
    return(
        <div style={{color:context}}>
            {props.children}
        </div>
    );
}

export default ItemTime;