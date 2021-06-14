export function timedout_(start, timout_ms) {
    return new Date().getTime() >= (start.getTime() + timout_ms);
}
export { timedout_ as _timedout, };
//# sourceMappingURL=src/timedout_.js.map