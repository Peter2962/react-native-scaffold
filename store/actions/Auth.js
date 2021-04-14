export const updateHanshakeStatus = (status) => {
	return {
		type: 'UPDATE_HANDSHAKE',
		status
	}
};

export const updatePassedStatus = (status) => {
	return {
		type: 'UPDATE_PASSED',
		status
	}
};