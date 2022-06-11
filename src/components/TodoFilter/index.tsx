import React from "react"

import { TodoSearch, TodoFilterTabs } from ".."

import styles from "./TodoFilter.module.scss"

type TodoFilterProps = {
	onFindTodo: (string: string) => void
	onFilterTodo: (filterType: string) => void
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ onFindTodo, onFilterTodo }) => {
	return (
		<div className={styles.todoFilter}>
			<TodoSearch onFindTodo={onFindTodo} />
			<TodoFilterTabs onFilterTodo={onFilterTodo} />
		</div>
	)
}
