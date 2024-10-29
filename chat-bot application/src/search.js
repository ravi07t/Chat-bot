export const getSearch = (data) => {
    if (data.includes('Hi') || data.includes('hi')) {
        return 'How would i assist you today!'
    }
    return 'Could not find what you are looking for';
}  