export const parseStyleString = (styleStr: string) => {
    return styleStr.split(";").reduce((acc, rule) => {
        const [key, value] = rule.split(":").map(s => s.trim());
        if (key && value) {
            // convert dash-case to camelCase
            const camelKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
            acc[camelKey] = value;
        }
        return acc;
    }, {} as Record<string, string>);
}