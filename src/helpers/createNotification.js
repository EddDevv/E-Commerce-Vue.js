export function createNotification(message) {
	const newNotification = {
		id: Date.now(),
		message
	}
	return newNotification
}