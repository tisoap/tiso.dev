import { parseISO, format, formatDistanceToNowStrict } from 'date-fns'
import { data } from 'data'

export const formatStringDate = (stringDate: string) => {
	try {
		return format(parseISO(stringDate), 'MMMM dd, yyyy')
	} catch (error) {
		console.log(error)
		throw new Error(`Invalid date format: ${stringDate}`)
	}
}

export const getTimeWorking = () =>
	formatDistanceToNowStrict(data.owner.startedWorking)
