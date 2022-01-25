import * as React from 'react';
import TodoItem from './TodoItem';

interface Props{

}

interface TodoItemData {
  id: number, 
  text: string,
  done: boolean;
}

interface State{
  todoItems: TodoItemData[];
  input: string;
}

class TodoList extends React.Component<Props, State>{

  id: number = 0;

  state: State = {
    todoItems: [],
    input: '',
  };

  onToggle = (id: number): void => { // id 매개변수(받아온값), void타입선언으로 반환값이 없다는걸 알 수 있음
    const { todoItems } = this.state;
    const index = todoItems.findIndex(todo => todo.id === id); // id로 인덱스 찾기
    const selectedItem = todoItems[index]; // 아이템 선택
    const nextItems = [...todoItems];

    const nextItem = {
      ...selectedItem,
      done: !selectedItem.done
    }

    nextItems[index] = nextItem;

    this.setState({
      todoItems: nextItems
    });
  }

  onRemove = (id: number) : void => {
    this.setState(
      ({todoItems}) => ({
        todoItems: todoItems.filter(todo => todo.id !== id)
      })
    );
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log(e);
    const {value} = e.currentTarget;
    this.setState({
      input: value
    });
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); //페이지 전환 막기
    this.setState(
      ({todoItems, input}) => ({
        input: '',
        todoItems: todoItems.concat({
          id: this.id++,
          text: input,
          done: false
        })
      })
    )
  }

  render(){
    const {onSubmit, onChange, onToggle, onRemove} = this;
    const {input, todoItems} = this.state;

    const todoItemList = todoItems.map(
      todo => (
        <TodoItem 
          key={todo.id}
        />
      )
    )
    return(
      <div>

      </div>
    )
  }
}