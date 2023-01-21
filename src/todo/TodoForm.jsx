import { useContext, useRef } from "react";
import "./App.css";
import { Context } from "./TodoContext";
const TodoForm = (props) => {
    const context = useContext(Context);
  return (
    <>
      {!props.isEdit ? (
        <div>
          <div className="d-flex">
            <h2>TODO lIST</h2>
            
          </div>
          <input ref={props.inputRef} type="text" />
          <button onClick={props.handleClickSaveTodo}>ثبت</button>
        </div>
      ) : (
        <div>
            <div className="d-flex">
            <h2>edit todo</h2>
            <button onClick={context.handleClickAddForm}>add</button>
          </div>
          
          <input ref={props.inputRef} type="text" />
          <button onClick={props.handleClickEditTodo}>ویرایش</button>
        </div>
      )}
    </>
  );
};
export default TodoForm;
