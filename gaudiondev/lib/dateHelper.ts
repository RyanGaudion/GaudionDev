export function timeSince(date? : Date | number) : string {

    if(date == null){
        return "";
    }

    var seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  
    if(isNaN(seconds)){
      return "unknown"
    }

    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

export function dateTimeString(date? : Date | number) : string{
    if (date == null) {return ""}

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    return new Date(date).toLocaleString(undefined, options)
}