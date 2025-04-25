
export const applyMask = (value: string, mask: string): string => {
  let result = '';
  let valueIndex = 0;
  
  for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
    if (mask[i] === '0') {
      if (/\d/.test(value[valueIndex])) {
        result += value[valueIndex++];
      } else {
        valueIndex++;
        i--;
      }
    } else {
      result += mask[i];
    }
  }
  
  return result;
};
