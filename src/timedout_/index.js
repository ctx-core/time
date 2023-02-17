/**
 * @param start{Date}
 * @param timout_ms{number}
 * @returns {boolean}
 */
export function timedout_(start, timout_ms) {
	return new Date().getTime() >= start.getTime() + timout_ms
}
export { timedout_ as _timedout, }
