export const toLocaleBRL = (value: number) => {
    return value.toLocaleString("pt-br", { style: "decimal", maximumFractionDigits: 2 })
}

export const toBRL = (value: number) => {
    return `R$${value.toLocaleString("pt-br", { style: "decimal", minimumFractionDigits: 2 })}`
}

export const formatDate = (dateToFormat: string) => {
    const formated = new Date(`${dateToFormat}Z`)
    const formatedDate = formated.toString().split(" ", 3).reverse().join(" ").split(" ", 2).join("/")
    return `${formatedDate}`
}
export const formatTime = (dateToFormat: string) => {
    const formated = new Date(`${dateToFormat}Z`)
    const formatedTime = formated.toLocaleTimeString().split(":", 2).join(":")
    return `${formatedTime}`
}

export const formatToDay = (dateToFormat: Date) => {
    return dateToFormat.toLocaleString("default", { month: "long", day: "2-digit" })
}

export const isToday = (dateToCompare: string | number | Date) => {
    const today = new Date().toDateString()
    const date = new Date(dateToCompare).toDateString()
    if (today === date) return true

    return false
}
