import { useContext, useState } from "react";
import { Context } from "./TodoContext";

const TodoList = (props) => {
    const context = useContext(Context);
    let i = 1;
    const handleClickDeleteTodo=(i)=>{
        props.setTodo(props.todo.filter((value,index)=> index !== i));
    }
    const handleClickIsconfirm = ()=>{
      context.setIsConfirm(true);
      context.setIsReject(false);
    }
    const handleClickIsReject = ()=>{
      context.setIsReject(true);
      context.setIsConfirm(false);
    }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          
          {props.todo.map((item, index) =>(
            <tr key={index} style={{background: !context.isConfirm & !context.isReject ? '' : context.isConfirm ? 'green' : 'red'}}>
              <td>{i++}</td>
              <td>{item}</td>
              <td>
                <button onClick={()=>handleClickDeleteTodo(index)}>delete</button>
                {context.isConfirm & context.isReject === false ? (
                  <button onClick={handleClickIsReject}>reject</button>
                ) : (
                  ""
                )}
                {context.isReject & context.isConfirm === false ? (
                  <button onClick={handleClickIsconfirm}>confirm</button>
                  ) : (
                  ""
                )}
                {!context.isReject & context.isConfirm === false ? (
                  <>
                  <button onClick={handleClickIsconfirm}>confirm</button>
                  <button onClick={handleClickIsReject}>reject</button>
                  </>
                  ) : (
                  ""
                )}
                
                <button onClick={() => props.handleClickEditForm(index)}>edit</button>
              </td>
            </tr>
            
           
           ))}
        </tbody>
      </table>
    </>
  );
};
export default TodoList;
