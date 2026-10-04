import './index.css'

const items = [
	{
		task: 'Learn React',
		icon: '🍏',
		isDone: true,
	},
	{
		task: 'Learn Vite',
		icon: '🍎',
		isDone: true,
	},
	{
		task: 'Learn React Native',
		icon: '👍',
		isDone: false,
	},
]

export const List = () => {
	return (
		<div>
			{items.map((item, index) => {
				return (
					<section key={index} className={item.isDone ? 'completed' : ''}>
						<span>{item.icon}</span>
						<h4>{item.task}</h4>
					</section>
				)
			})}
		</div>
	)
}
