import React from "react"
import axios from "axios"

import { AppInfo, TodoFilter, TodoList, TodoAddForm } from "../"

import styles from "./App.module.scss"

export const App: React.FC = () => {
	const [todoList, setTodoList] = React.useState<
		| {
				id: number
				name: string
				performed: boolean
		  }[]
		| []
	>([])
	const [todoListAfterFilter, setTodoListAfterFilter] = React.useState<
		| {
				id: number
				name: string
				performed: boolean
		  }[]
		| []
	>([])
	const [findState, setFindState] = React.useState<string>("")
	const [filterState, setFilterState] = React.useState<string>("all")

	React.useEffect(() => {
		async function fetchPizza() {
			try {
				await axios.get("data.json").then(({ data }) => {
					setTodoList(data.list)
				})
			} catch (err) {
				console.log(err)
			}
		}

		fetchPizza()
	}, [])

	React.useEffect(() => {
		const newList = todoList.filter((item) => {
			return item.name.toLowerCase().indexOf(findState.toLowerCase()) !== -1
		})

		switch (filterState) {
			case "performed":
				setTodoListAfterFilter([...newList.filter((item) => item.performed)])
				break
			case "not done":
				setTodoListAfterFilter([...newList.filter((item) => !item.performed)])
				break
			default:
				setTodoListAfterFilter([...newList])
				break
		}
	}, [todoList, findState, filterState])

	const onAddNewTodo = (name: string) => {
		if (name.length > 0) {
			const newList = [
				...todoList,
				{
					id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
					name: name,
					performed: false,
				},
			]

			setTodoList([...newList])
		}
	}

	const onDeleteTodo = (id: number) => {
		const newList = todoList.filter((item) => item.id !== id)
		setTodoList([...newList])
	}

	const onPerformed = (id: number) => {
		const newList = todoList.map((item) => {
			if (item.id === id) {
				return { ...item, performed: !item.performed }
			}

			return item
		})
		setTodoList([...newList])
	}

	const onFindTodo = (string: string) => {
		setFindState(string)
	}

	const onFilterTodo = (filterType: string) => {
		setFilterState(filterType)
	}

	return (
		<div className={styles.app}>
			<AppInfo data={todoList} />
			<TodoFilter onFindTodo={onFindTodo} onFilterTodo={onFilterTodo} />
			<TodoList
				data={todoListAfterFilter}
				onDeleteTodo={onDeleteTodo}
				onPerformed={onPerformed}
			/>
			<TodoAddForm onAddNewTodo={onAddNewTodo} />
		</div>
	)
}
