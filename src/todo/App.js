import { useEffect, useRef, useState } from "react";
import { Context } from "./TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [indexTodo, setIndexTodo] = useState();
  const [isConfirm,setIsConfirm] = useState(false);
  const [isReject,setIsReject] = useState(false);
  const inputRef = useRef(null);
  const handleClickSaveTodo = () => {
    if(inputRef.current.value !== ""){

        setTodo([...todo, inputRef.current.value]);
   
    }
    inputRef.current.value = "";
  };

  const handleClickEditForm = (index) => {
    setIsEdit(true);
    setIndexTodo(index);
    inputRef.current.value = todo[index];
  };
  const handleClickAddForm = () => {
    setIsEdit(false);
    inputRef.current.value = "";
  };
  const handleClickEditTodo = () => {
    const newTodo = [...todo];
    newTodo[indexTodo] = inputRef.current.value;
    setTodo([...newTodo]);
  };

  useEffect(() => {
    // console.log(todo);
  }, [todo]);
  return (
    <>
      <Context.Provider value={{handleClickAddForm,isConfirm,setIsConfirm,isReject,setIsReject}}>
        <TodoForm
          handleClickEditTodo={handleClickEditTodo}
          isEdit={isEdit}
          inputRef={inputRef}
          handleClickSaveTodo={handleClickSaveTodo}
        />
        <TodoList
          handleClickEditForm={handleClickEditForm}
          todo={todo}
          setTodo={setTodo}
        />
      </Context.Provider>
    </>
  );
};
export default App;
