export const fetchFromApi = async () => {
  const today = new Date();
  const todayObject = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate() - 1,
  };
  const { year } = todayObject;
  const month = todayObject.month.toString().length === 1 ? `0${todayObject.month}` : todayObject.month;
  const date = todayObject.date.toString().length === 1 ? `0${todayObject.date}` : todayObject.date;
  const defaultDate = `${year}-${month}-${date}`;
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/${defaultDate}`);
  const response = await request.json();
  const data = await response.dates[defaultDate];
  data.total = await response.total;
  return data;
};

export const catchFromApi = async () => {
  const today = new Date();
  const todayObject = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  };
  const { year } = todayObject;
  const month = todayObject.month.toString().length === 1 ? `0${todayObject.month}` : todayObject.month;
  const date = todayObject.date.toString().length === 1 ? `0${todayObject.date}` : todayObject.date;
  const defaultDate = `${year}-${month}-${date}`;
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/${defaultDate}`);
  const response = await request.json();
  const data = await response.dates[defaultDate];
  data.total = await response.total;
  return data;
};