import deepmergeOriginal from 'deepmerge';

export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const ret: any = {};
  for (const key of keys) {
    ret[key] = obj[key];
  }
  return ret;
};

export const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const ret = { ...obj };
  for (const key of keys) {
    delete ret[key];
  }
  return ret;
};

export const deepmerge = <T1, T2>(from: T1, to: T2): T1 & T2 => {
  return deepmergeOriginal<T1, T2>(from, to, {
    arrayMerge: (_target, source) => source,
  });
};
