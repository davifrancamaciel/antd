export const order = (data: any[], key: string) => {
  return data.sort(function (a, b) {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  });
};

export const distinctValues = (data: any[], key: string) => {
  return data.filter(
    (o, i, arr) => arr.findIndex((t: any) => t[key] === o[key]) === i
  );
};

