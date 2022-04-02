function checkDate(timestamp) {
    // var day = new Date(timestamp * 1000).getDate();
    // var month = new Date(timestamp * 1000).getMonth() + 1; //Месяцы исчисляются от 0 до 11, в изначальном варианте (без +1) месяц был бы некорректным.
    // var year = new Date(timestamp * 1000).getFullYear();
    // var hour = new Date(timestamp * 1000).getHours();

    // const current_Date = new Date(Date.now()); // Нет необходимости указывать внутри Date.now()
    // const current_day = current_Date.getDate();
    // const current_month = current_Date.getMonth() + 1;
    // const currentYear = current_Date.getFullYear();

    // let isSameDate = false;

    // if (year == currentYear) {
    //     if (month == current_month) {
    //         if (day == current_day) {
    //             isSameDate = true;
    //         } else {
    //             isSameDate = false;
    //         }
    //     }
    // }

    const today = new Date();
    const isSameDate = new Date(timestamp * 1000).getDate() == today.getDate() && 
                      new Date(timestamp * 1000).getMonth() == today.getMonth() &&
                      new Date(timestamp * 1000).getFullYear() == today.getFullYear();
    
    const hours = new Date(timestamp * 1000).getHours();

    return {
        isSameDate: isSameDate,
        dayPeriod: hours > 11 ? 'pm' : 'am'
    }
}
