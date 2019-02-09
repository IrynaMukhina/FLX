function formatTime(minutes) {
  let day = minutes / 1440;
  let hour = (minutes % 1440) / 60;
  let min = (minutes % 1440) % 60;
  let message = `${Math.floor(day)} day(s) ${Math.floor(hour)} hour(s) ${Math.floor(min)} minute(s).`

  return message;
}

formatTime(120);
formatTime(59);
formatTime(3601);
