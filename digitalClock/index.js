
updateDate();
setInterval(updateDate, 1000); // update the date every 1 second

function updateDate()
{
    let date = new Date();
    document.getElementById("clockLable").innerHTML = designpartInTimeFormat(date);

    function designpartInTimeFormat(date)
    {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let dayOrNight = hours < 12 ? "am" : "pm";

        minutes = adjustZeros(minutes);

        hours = hours % 12 || 12; // hours now between 0 - 12 (not 0 - 24)
        hours = adjustZeros(hours);

        seconds = adjustZeros(seconds);

        return `${hours} : ${minutes} : ${seconds} ${dayOrNight}`;

        function adjustZeros(partInTime)
        {
            partInTime = partInTime.toString()
            return partInTime.length == 2 ? partInTime : "0" + partInTime;
        }

    }
}



