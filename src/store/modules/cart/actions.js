export function AddToCartRequest(id) {

  return {
    type: '@cart/ADD_REQUEST',
    id,
  }
}

export function AddToCartSucces(product) {

  return {
    type: '@cart/ADD_SUCCES',
    product,
  }
}

export function RemoveFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id
  }
}

export function UpdateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount
  }
}

export function UpdateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount
  }
}