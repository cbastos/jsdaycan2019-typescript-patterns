export default class DataStorage {
    get(key) {
        const value = localStorage.getItem(key);
        try {
            return JSON.parse(value)
        } catch (e) {
            return value;
        }
    }
    set(key, value) {
        if (typeof value === 'object') value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }
}
