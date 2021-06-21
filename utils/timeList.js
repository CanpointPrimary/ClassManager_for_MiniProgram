       let dateList = []
       const day = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
       const date = new Date()
       let today = date.getDate()
       let month
       let theMonth = date.getMonth()
       let tDate
       let dateStr
       let hour
       let minutes
       let timeList = []
       let timeSelect
       for (let i = 0; i < 30; i++) {
           date.setMonth(theMonth)
           date.setDate(today + i)
           if (date.getMonth() + 1 < 10) {
               month = '0' + (date.getMonth() + 1)
           }
           if (date.getDate() < 10) {
               tDate = '0' + date.getDate()
           } else {
               tDate = date.getDate()
           }
           dateStr = `${month}/${tDate} ${day[date.getDay()]}`
           dateList.push(dateStr)
       }
       for (let i = 0; i < 24; i++) {
           hour = i < 10 ? `0${i}` : `${i}`;
           for (let j = 0; j < 2; j++) {
               minutes = j ? '30' : '00';
               timeList.push(`${hour}:${minutes}`)
           }
       }


       timeList = [
           ['默认', ...dateList], timeList
       ]
       timeSelect = [0, date.getHours() * 2 + 2]

       module.exports = {
           timeList,
           timeSelect
       }