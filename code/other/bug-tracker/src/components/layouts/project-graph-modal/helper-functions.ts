export const calculatePercentage = (e: number) => {
  const numberIsHole = Number.isInteger(e);

  let number = e;
  if (!numberIsHole) {
    const roundNumber = e.toFixed(2);
    const splitNumber = roundNumber.split(".");
    number = parseFloat(splitNumber[1]);
  }

  return number;
};

type TData = {
  id: string;
  name: string;
  process: string;
};

export const processFilter = (data: TData[], value: string) => {
  // @ts-ignore
  const filter = data.filter((item: TData) => item.process == value).length;
  return filter;
};
