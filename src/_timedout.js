export function _timedout(start, timout_ms) {
    return new Date().getTime() >= (start.getTime() + timout_ms);
}
