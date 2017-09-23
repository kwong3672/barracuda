export function orderFormActions(type, payload) {
  console.log('inside select product action');
  return {
    type: type,
    payload: payload
  }
};
