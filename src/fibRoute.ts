// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: { params: { num: string } }, res: { send: (result: string) => void }) => {
  const { num } = req.params;

  const numAsNumber = parseInt(num, 10);

  if (isNaN(numAsNumber)) {
    res.send(`Invalid input. Please provide a valid number.`);
    return;
  }

  const fibN = fibonacci(numAsNumber);
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  } else {
    result = `fibonacci(${num}) is ${fibN}`;
  }

  res.send(result);
};