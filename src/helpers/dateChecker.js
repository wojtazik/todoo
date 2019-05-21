export const checkDate = (startDate, endsDate, type) => {

    let time = new Date(endsDate) - new Date(startDate)
    const sign = time < 0 ? 'after' : 'before'
    time = Math.abs(time)
    const days = Math.floor(time / 86400000)
    time %= 86400000
    const hours  = Math.floor(time / 3600000)
    time %= 3600000
    const minutes = Math.floor(time / 60000)



    if(type === 'DEADLINE') {
        if(sign === 'after') {
            return `You have ${days} days, ${hours} hours and ${minutes} minutes for finish this task`
        } else {
            return `You are late! The deadline is up ${days} days, ${hours} hours and ${minutes} minutes ago`
        }


    } else if (type === 'FINISHED') {
        return `You have finished task ${days} days, ${hours} hours and ${minutes} minutes ${sign} the deadline`
    }
}