import cls from './Button.module.css'

export const Button = ({ onClick, title }) => {
	return (
		<button className={cls.counter} onClick={onClick}>
			{title}
		</button>
	)
}
