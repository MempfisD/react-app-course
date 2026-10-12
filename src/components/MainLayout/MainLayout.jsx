import { Outlet } from 'react-router-dom'
import cls from './MainLayout.module.css'

export const MainLayout = () => {
	const currentDate = new Date().getFullYear()

	return (
		<div className={cls.mainLayout}>
			<header>header</header>
			<div className={cls.mainWrapper}>
				<main className={cls.main}>
					<Outlet />
				</main>
				<footer className={cls.footer}>
					React Question Cards Application | {currentDate} <br />
					by Dmitry Naumov
				</footer>
			</div>
		</div>
	)
}
