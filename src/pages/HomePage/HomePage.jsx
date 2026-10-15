import { QuestionCard } from '../../components/QuestionCard'
import { API_URL } from '../../constans/'
import { useEffect, useState } from 'react'


export const HomePage = () => {
	const [question, setQuestion] = useState([])

	const getQuestion = async () => {
		try {
			const response = await fetch(`${API_URL}/react`)
			const data = await response.json()
			setQuestion(data)
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getQuestion()
	}, [])

	return (
		<>
			{question.map((card, index) => {
				return <QuestionCard key={index} card={card} />
			})}
		</>
	)
}

