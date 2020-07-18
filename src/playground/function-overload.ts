type QuasiNumber = string | number;

function add(one: number, two: number): number;
function add(one: string, two: string): string;
function add(one: number, two: string): string;
function add(one: string, two: number): string;
function add(one: QuasiNumber, two: QuasiNumber): QuasiNumber {
  if (typeof one === "string" || typeof two === "string") {
    return one.toString() + two.toString();
  }
  return one + two;
}

const result = add(5, 6);
