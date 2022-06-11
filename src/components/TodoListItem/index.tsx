import React from "react"

import "./TodoListItem.scss"

type TodoListItemProps = {
	id: number
	name: string
	performed: boolean
	onDeleteTodo: (id: number) => void
	onPerformed: (id: number) => void
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
	id,
	name,
	performed,
	onDeleteTodo,
	onPerformed,
}) => {
	const active = performed ? " performed" : ""
	return (
		<li className={`list-group-item d-flex justify-content-between${active}`}>
			<span className="list-group-item-label">{name}</span>
			<div className="d-flex justify-content-center align-items-center">
				<button onClick={() => onPerformed(id)} type="button" className="btn-cookie btn-sm ">
					<i className={performed ? "fa-solid fa-xmark" : "fa-solid fa-check"}></i>
				</button>

				<button onClick={() => onDeleteTodo(id)} type="button" className="btn-trash btn-sm ">
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	)
}
