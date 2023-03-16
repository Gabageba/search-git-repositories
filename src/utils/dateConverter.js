export const dateConverter = (date) => {
  const currentDate = new Date(date)

  return `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`
}