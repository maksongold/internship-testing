// в данном случае я бы использовал стрелочную функцию, так как она имеет более короткий и наглядный синтаксис, а также
// помогает избежать ошибок с возможным использованием оператора this в будущем
const checkDate = (timestamp) => {
    // в данной задаче я не вижу смысла сравнивать отдельно методы объекта Date
    // легче сравнить таймстемпы между собой
    // это сократит код в несколько раз, а также поможет избежать допущенной в сравнении месяцев ошибки (строчка 9
    // исходного задания)

    // для удобства я создал переменную argDate
    const argDate = new Date(timestamp * 1000);

    return {
        // вместо избыточной булевой переменной я сразу присваиваю результат выражения свойству объекта
        isSameDate: argDate.getTime() === Date.now(),
        dayPeriod: argDate.getHours() > 11 ? 'pm' : 'am'
    }
}
