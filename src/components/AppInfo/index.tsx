import React from "react"

import styles from "./AppInfo.module.scss"

type AppInfoProps = {
	data:
		| {
				id: number
				name: string
				performed: boolean
		  }[]
		| []
}

export const AppInfo: React.FC<AppInfoProps> = ({ data }) => {
	return (
		<div className={styles.appInfo}>
			<h2>Общее число задач: {data.length}</h2>
			<h2>Выполненные задачи: {[...data.filter((item) => item.performed)].length}</h2>
		</div>
	)
}
