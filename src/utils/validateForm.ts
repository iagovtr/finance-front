export const validateForm = (value: any[]) => {
  for(let i = 0; i < value.length; i ++) {
    if(value[i].length === 0) {
      return false;
    }
  }
  return true;
}