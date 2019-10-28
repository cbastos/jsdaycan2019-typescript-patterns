const typeClonators = [
    {
        for: Date,
        copy(date) {
            const copy = new Date();
            copy.setTime(date.getTime());
            return copy;
        },
    },
    {
        for: Array,
        copy(array) {
            const copy = [];
            for (let i = 0, len = array.length; i < len; i++) {
                copy[i] = clone(array[i]);
            }
            return copy;
        }
    },
    {
        for: Object,
        copy(obj) {
            let copy = {};
            try {
                copy = obj.constructor ? new obj.constructor() : {};
            } catch (e) {
                copy = {};
            }
            Object.keys(obj).forEach((attr) => {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = clone(obj[attr]);
                }
            });
            return copy;
        }
    }
];

export function clone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const clonator = typeClonators.find(c => obj instanceof c.for);
    if (clonator) {
        return clonator.copy(obj) as T;
    }
    throw new Error('Unable to copy obj! Its type isn\'t supported.');
}
