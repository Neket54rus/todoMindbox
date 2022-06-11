import React from "react"

import styles from "./TodoFilterTabs.module.scss"

type TodoFilterTabsProps = {
	onFilterTodo: (filterType: string) => void
}

export const TodoFilterTabs: React.FC<TodoFilterTabsProps> = ({ onFilterTodo }) => {
	const [active, setActive] = React.useState<number>(1)
	const btns = [
		{ id: 1, title: "Все задачи", type: "all" },
		{ id: 2, title: "Выполненные задачи", type: "performed" },
		{ id: 3, title: "Невыполненные задачи", type: "not done" },
	]

	const onClickBtn = (id: number, type: string) => {
		setActive(id)
		onFilterTodo(type)
	}

	return (
		<div className={`btn-group ${styles.btnGroup}`}>
			{btns.map((item) => {
				return (
					<button
						key={item.id}
						onClick={() => onClickBtn(item.id, item.type)}
						className={`btn ${item.id === active ? "btn-light" : "btn-outline-light"}`}
					>
						{item.title}
					</button>
				)
			})}
		</div>
	)
}
