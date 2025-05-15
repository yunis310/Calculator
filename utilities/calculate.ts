function calculate(str: string): number {
    try {
        const result = new Function(`return ${str}`)();
        if (typeof result === 'number' && !isNaN(result)) {
            return Math.round(result * 1000) / 1000;
        } else {
            return 0;
        }
    } catch {
        return 0;
    }
}

export default calculate;
