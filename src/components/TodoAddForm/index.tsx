import React from "react"

import "./TodoAddForm.scss"

type TodoAddForm = {
	onAddNewTodo: (name: string) => void
}

export const TodoAddForm: React.FC<TodoAddForm> = ({ onAddNewTodo }) => {
	const [name, setName] = React.useState<string>("")

	const onSubmitForm = (e: any) => {
		e.preventDefault()
		onAddNewTodo(name)
		setName("")
	}

	return (
		<div className="app-add-form">
			<h3>Добавьте новоую задачу</h3>
			<form onSubmit={onSubmitForm} className="add-form d-flex">
				<input
					onChange={(e) => setName(e.target.value)}
					type="text"
					className="form-control new-post-label"
					placeholder="Название вашей задачи"
					value={name}
				/>

				<button disabled={name.length < 1} type="submit" className="btn btn-outline-light">
					Добавить
				</button>
			</form>
		</div>
	)
}
