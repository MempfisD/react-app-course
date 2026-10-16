import { API_URL } from '../../constans/'
import { useEffect, useState } from 'react'
import { QuestionCardList } from '../../components/QuestionCardList'
import { Loader } from '../../components/Loader'


export const HomePage = () => {
	const [questions, setQuestions] = useState([])

	const getQuestion = async () => {
		try {
			const response = await fetch(`${API_URL}/react`)
			const data = await response.json()
			setQuestions(data)
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
			<Loader />
		<QuestionCardList cards={questions} />
		</>
	)
}

