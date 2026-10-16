import { API_URL } from '../../constans/'
import { useEffect, useState } from 'react'
import { QuestionCardList } from '../../components/QuestionCardList'
import { Loader } from '../../components/Loader'
import { DelayFn } from '../../helpers/dalayFn.js'


export const HomePage = () => {
	const [questions, setQuestions] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const getQuestion = async () => {
		try {
			setIsLoading(true)
			await DelayFn()
			const response = await fetch(`${API_URL}/react`)
			const data = await response.json()
			setQuestions(data)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		getQuestion()
	}, [])

	return (
		<>
			{isLoading && <Loader />}
			<QuestionCardList cards={questions} />
		</>
	)
}

