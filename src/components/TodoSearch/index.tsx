import React from "react"

type TodoSearchProps = {
	onFindTodo: (string: string) => void
}

export const TodoSearch: React.FC<TodoSearchProps> = ({ onFindTodo }) => {
	return (
		<input
			onChange={(e) => onFindTodo(e.target.value)}
			type="text"
			className="form-control search-input"
			placeholder="Найти задачу"
		/>
	)
}
