import { parseISO, format, formatDistanceToNowStrict } from 'date-fns'

export const formatStringDate = (stringDate: string) => {
	try {
		return format(parseISO(stringDate), 'MMMM dd, yyyy')
	} catch (error) {
		console.log(error)
		throw new Error(`Invalid date format: ${stringDate}`)
	}
}

const startDate = new Date(2016, 5, 27)
export const getTimeWorking = () => formatDistanceToNowStrict(startDate)
