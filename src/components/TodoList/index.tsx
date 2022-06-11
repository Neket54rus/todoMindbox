import React from "react"

import { TodoListItem } from ".."

import styles from "./TodoList.module.scss"

type TodoListProps = {
	data:
		| {
				id: number
				name: string
				performed: boolean
		  }[]
		| []
	onDeleteTodo: (id: number) => void
	onPerformed: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({ data, onDeleteTodo, onPerformed }) => {
	if (data.length < 1) {
		return <div style={{ marginTop: "30px", fontSize: "20px" }}>Задачи отсутствуют</div>
	}

	return (
		<ul className={`${styles.todoListItem} list-group`}>
			{data.map((todo) => {
				return (
					<TodoListItem
						key={todo.id}
						id={todo.id}
						name={todo.name}
						performed={todo.performed}
						onDeleteTodo={onDeleteTodo}
						onPerformed={onPerformed}
					/>
				)
			})}
		</ul>
	)
}
