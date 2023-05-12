enum Curencies {
  USD = "USD",
  INR = "INR",
  ABC = "ABC",
}

export type BitcoinData = {
  [key in Curencies]: {
    buy: number;
    last: number;
  };
};

export type User = Curencies[];
