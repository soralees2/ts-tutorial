import * as React from 'react';

interface Props{
  text: string;
  done: boolean;
  onToggle(): void;
  onRemove(): void;
}

class TodoItem extends React.Component<Props>{
  render(){
    const {text, done, onToggle, onRemove} = this.props;

    return(
      <div>
        <li>
          <b 
            onClick={onToggle}
            style={{
              textDecoration: done ? 'line-through' : 'none',
            }}
          >{text}</b>
          <span style={{marginLeft: '0.5rem'}} onClick={onRemove}>[지우기]</span>
        </li>
      </div>
    )
  }
}

export default TodoItem;