

export default (data, loading) => {
    return loading ? 'loading' : JSON.stringify(data)
}