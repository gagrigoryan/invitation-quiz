type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const getRemainingTime = (differenceInSeconds: number): RemainingTime => {
  const days = Math.floor(differenceInSeconds / 86400);
  const hours = Math.floor((differenceInSeconds % 86400) / 3600);
  const minutes = Math.floor(((differenceInSeconds % 86400) % 3600) / 60);
  const seconds = Math.floor(((differenceInSeconds % 86400) % 3600) % 60);
  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
