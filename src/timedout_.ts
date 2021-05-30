export function timedout_(start: Date, timout_ms: number) {
	return new Date().getTime() >= (start.getTime() + timout_ms)
}
export {
	timedout_ as _timedout,
}
