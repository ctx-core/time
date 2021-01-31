export function _timedout(start: Date, timout_ms: number) {
	return new Date().getTime() >= (start.getTime() + timout_ms)
}
