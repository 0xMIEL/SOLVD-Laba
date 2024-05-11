function coerceToDate(value, format = 'iso') {
    let date = new Date(value)

    if (isNaN(date.getTime())) {
        throw new Error('Invalid date!')
    }

    switch (format.toLowerCase()) {
        case 'iso':
            return date.toISOString()
        case 'local':
            return date.toLocaleString()
        case 'date':
            return date.toDateString()
        case 'time':
            return date.toTimeString()
        default:
            throw new Error(`Unsupported date format!`)
    }
}

module.exports = { coerceToDate }
