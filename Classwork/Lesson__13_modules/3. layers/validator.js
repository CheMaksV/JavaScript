export function validateId(id) {
    if (id > 0) {
        return id;
    }
    throw new Error('???');
}
