import dayjs from "dayjs";
import { useEffect, useState, useMemo } from "react";
import usePersistFn from "../usePersistFn";

export type TDate = Date | number | string | undefined;

export type Options = {
  targetDate?: TDate;
  interval?: number;
  onEnd?: () => void;
};

export interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const calcLeft = (t?: TDate) => {
  if (!t) {
    return 0;
  }
  // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
  const left = dayjs(t).valueOf() - new Date().getTime();
  if (left < 0) {
    return 0;
  }
  return;
};

const parseMs = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  };
};

function useCountDown(options?: Options) {
  const { targetDate, interval = 1000, onEnd } = options || {};

  const [target, setTargetDate] = useState<TDate>(targetDate);
  const [timeLeft, setTimeLeft] = useState(() => calcLeft(target));

  const onEndPersisFn = usePersistFn(() => {
    if (onEnd) {
      onEnd();
    }
  });

  useEffect(() => {
    if (!target) {
      setTimeLeft(0);
      return;
    }
    setTimeLeft(calcLeft(target));

    const timer = setInterval(() => {
      const targetLeft = calcLeft(target);
      if (targetLeft === 0) {
        clearInterval(timer);
        onEndPersisFn();
      }
    }, interval);
    return () => clearInterval(timer);
  }, [target, interval]);

  const formattedRes = useMemo(() => {
    return parseMs(timeLeft);
  }, [timeLeft]);

  return [timeLeft, setTargetDate, formattedRes] as const;
}
export default useCountDown;
