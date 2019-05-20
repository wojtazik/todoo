export const checkDate = (startDate, endsDate, type) => {
    if(type === 'FINISHED') {
        console.log(endsDate)
        let time = new Date(startDate) - new Date(endsDate)
        const sign = time < 0 ? 'minus' : 'plus'
        const days = Math.floor(time / 86400000)
        time %= 86400000
        const hours  = Math.floor(time / 3600000)
        time %= 3600000
        const minutes = Math.floor(time / 60000)

        if(sign === 'plus') {
            return `You have ${days} days, ${hours} hours and ${minutes} minutes for finish this task`
        } else {
            return `You are late! The deadline is up ${days} days, ${hours} hours and ${minutes} minutes ago`
        }


    } else if (type = 'DEADLINE') {
        let time = new Date(startDate) - new Date(endsDate)
        const sign = time < 0 ? 'after' : 'before'
        const days = Math.floor(time / 86400000)
        time %= 86400000
        const hours  = Math.floor(time / 3600000)
        time %= 3600000
        const minutes = Math.floor(time / 60000)

        const text = `You have finished task ${days} days, ${hours} hours and ${minutes} minutes ${sign} the deadline`
        return text
    }
}