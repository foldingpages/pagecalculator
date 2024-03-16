function calculatePages(){
    let pages = parseInt(document.getElementById("pages").value);
    let days = parseInt(document.getElementById("days").value);
    let alreadyread = parseInt(document.getElementById("alreadyread").value);
    //alert(isNaN(days));
    if (isNaN(pages)){
        alert("please input the number of pages in your book");
    } else if (isNaN(days)){
        alert("please input the number of days you want to finish the book in");
    } else  if (isNaN(alreadyread)){
        alert("You will need to read " + pages/days + " pages per day to finish in " + days + " days");
        document.getElementById("pages").value = "";
        document.getElementById("days").value = "";
    } else if (alreadyread <= pages){
        alert("You will need to read " + (pages - alreadyread)/days + " pages per day to finish in " + days + " days");
        document.getElementById("pages").value = "";
        document.getElementById("days").value = "";
        document.getElementById("alreadyread").value = "";
    } else {
        alert("Pages read must be less than or equal to total pages");
        document.getElementById("pages").value = "";
        document.getElementById("days").value = "";
        document.getElementById("alreadyread").value = "";
    }
}

function calculateMinutes(){
    let totalstr = document.getElementById("totallength").value;
    let totalhr_ind = totalstr.indexOf(":");
    let totalmin_ind = totalstr.indexOf(":", totalhr_ind + 1);
    let listenedstr = document.getElementById("listened").value;
    let listenedhr_ind = listenedstr.indexOf(":");
    let listenedmin_ind = listenedstr.indexOf(":", listenedhr_ind + 1);
    //alert("totalhr_ind = " + totalhr_ind + ", totalmin_ind = " + totalmin_ind);
    if (totalmin_ind == -1 || totalhr_ind == -1 || (listenedstr.length != 0 && (listenedmin_ind == -1 || listenedhr_ind == -1))){
        alert("check your formatting. Timestamps should be formatted in hh:mm:ss format");
    } else {
        let days = parseInt(document.getElementById("audiodays").value);
        let totalhr = parseInt(totalstr.slice(0, totalhr_ind));
        let totalmin = parseInt(totalstr.slice(totalhr_ind+1, totalmin_ind));
        let totalsec = parseInt(totalstr.slice(totalmin_ind+1));
        let totaltime = totalsec + totalmin * 60 + totalhr * 3600;
        if (listenedstr.length == 0){
            let sec_per_day = totaltime / days;
            let hr_per_day = Math.floor(sec_per_day / 3600);
            sec_per_day -= hr_per_day * 3600;
            let min_per_day = Math.floor(sec_per_day / 60);
            sec_per_day -= min_per_day * 60;
            alert("You will need to listen to " + hr_per_day + "hr " + min_per_day + "min " + sec_per_day + "sec per day in order to finish in " + days + "days");
        } else {
            let listenedhr = parseInt(listenedstr.slice(0, listenedhr_ind));
            let listenedmin = parseInt(listenedstr.slice(listenedhr_ind + 1, listenedmin_ind));
            let listenedsec = parseInt(listenedstr.slice(listenedmin_ind + 1));
            let listenedtime = listenedsec + listenedmin * 60 + listenedhr * 3600;
            if (listenedtime <= totaltime){
                let sec_per_day = (totaltime - listenedtime) / days;
                let hr_per_day = Math.floor(sec_per_day / 3600);
                sec_per_day -= hr_per_day * 3600;
                let min_per_day = Math.floor(sec_per_day / 60);
                sec_per_day -= min_per_day * 60;
                alert("You will need to listen to " + hr_per_day + "hr " + min_per_day + "min " + sec_per_day + "sec per day in order to finish in " + days + "days");
            } else {
                alert("Listened time must be less than total length of book");
            }
        }
    }
}