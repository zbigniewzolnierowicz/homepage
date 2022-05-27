const redisplayWeekdayElementFactory = (display: string) => (element: HTMLElement) => {
  element.style.display = display;
};


export const main = () => {
  const redisplayWeekdayElement = redisplayWeekdayElementFactory("block");
  const currentDate = new Date();
  const currentWeekday = currentDate.getDay(); // Sunday is 0!
  const tuesdayEl = document.getElementById("tuesday");
  const thursdayEl = document.getElementById("thursday");
  if (currentWeekday === 2) {
    redisplayWeekdayElement(tuesdayEl);
  } else if (currentWeekday === 4) {
    redisplayWeekdayElement(thursdayEl);
  }
};

