export function _timestamp_milliseconds() {
	const performance = typeof window === 'object' && window.performance
	const now = performance && performance.now
	const timing = performance && performance.timing
	const navigationStart = timing && timing.navigationStart
	const timestamp_milliseconds =
		now && navigationStart
		? now() + navigationStart
		: Date.now()
	return timestamp_milliseconds
}
export {
	_timestamp_milliseconds as _milliseconds__timestamp
}
