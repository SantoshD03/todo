import React from 'react'

function TodoList(props) {
  console.log('props:', props)
  return (
    <li className="list-item">
        Item {props?.index + 1}
        <span className = 'icons'>
            {props.item}
        <i className="fa-thin fa-trash icon-delete"
        onclick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default TodoList
