import React, { useRef, useEffect, useState, useMemo } from "react";
import { TimerBox } from "./TimerBox";
import { differenceInSeconds } from "date-fns";
import { getRemainingTime } from "../../utils/getRemainingTime";
import { StyleObject } from "styletron-react";
import { useStyletron } from "baseui";

const date = new Date(2024, 0, 1);

const containerStyles: StyleObject = {
  display: "flex",
  alignItems: "flex-end",
  gridGap: "20px",
};

export const Timer: React.FC = () => {
  const [css] = useStyletron();
  const intervalRef = useRef<any>(null);
  const [difference, setDifference] = useState<number>(differenceInSeconds(date, new Date()));

  const remainingTime = useMemo(() => getRemainingTime(difference), [difference]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDifference((prevState) => prevState - 1);
    }, 1000);
    return () => {
      if (intervalRef.current) {
        return clearInterval(intervalRef.current);
      }
    };
  }, [intervalRef]);

  return (
    <div className={css(containerStyles)}>
      <TimerBox count={remainingTime?.days ?? 0} title="Дней" />
      <TimerBox count={remainingTime?.hours ?? 0} title="Часа" />
      <TimerBox count={remainingTime?.minutes ?? 0} title="Минут" />
      <TimerBox count={remainingTime?.seconds ?? 0} title="Секунд" />
    </div>
  );
};
