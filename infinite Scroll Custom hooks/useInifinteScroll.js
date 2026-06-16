import { useEffect, useState } from 'react'

const URL = 'https://rickandmortyapi.com/api/character'

export const useInfiniteScroll = () => {
	const [currentURL, setcurrentURL] = useState(URL)
	const [isloading, setIsLoading] = useState(false)
	const [result, setResult] = useState([])
	const [isDone, setIsDone] = useState(false)
	const [triggerApiCall, setTriggerApiCall] = useState(true)

	useEffect(() => {
		const MakeApiCall = async () => {
			if (isDone) {
				return
			}

			try {
				setIsLoading(true)
				const res = await fetch(currentURL)
				const response = await res.json()
				console.log(response)
				const { info, results } = response
				setResult([...result, ...results])
				if (info.next) {
					setcurrentURL(info.next)
				} else {
					setIsDone(true)
				}
			} catch (e) {
				console.error('something went worng', e)
			} finally {
				setIsLoading(false)
				setTriggerApiCall(false)
			}
		}
		if (triggerApiCall) {
			MakeApiCall()
		}
	}, [triggerApiCall, currentURL])
	useEffect(() => {
		const onScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
				window.document.body.offsetHeight
			) {
				setTriggerApiCall(true)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])
	return { isloading, result }
}
