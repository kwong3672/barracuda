const orderTemplate = {
  productSelected: {
    product_id: "Select",
  },
  deploymentOptionSelected: {
    deployment_id: "Select",
  },
  deploymentOptions: [],
  modelOptions: [],
  modelSelected: {
    model_id: "Select"
  },
  quantity: 1,
}

const initialState = {
  order: {
    0: orderTemplate,
  },
  orderIdx: 1,
  orderCount: 1,
  totalOrderPrice: 0,
  enableNextButton: false,
}

const enableNextButton = (state) => {
  return Object.keys(state.order).reduce((enable, key) => {
    const order = state.order[key];
    return !isNaN(order.productSelected.product_id) && !isNaN(order.deploymentOptionSelected.deployment_id) && !isNaN(order.modelSelected.model_id) && enable && !!order.quantity
  }, true)
}

const orderFormReducers = (state = initialState, action) => {
  switch (action.type) { 
    case 'SELECT_PRODUCT': {
      const { idx, productSelected, deploymentOptions } = action.payload;
      return {
        ...state,
        enableNextButton: false,
        order: {
          ...state.order,
          [idx]: {
            ...orderTemplate,
            productSelected,
            deploymentOptions,
          }
        }
      }
    }
    case 'SELECT_DEPLOYMENT_OPTION': {
      const { idx, deploymentOptionSelected, modelOptions } = action.payload;
      return {
        ...state,
        enableNextButton: false,
        order: {
          ...state.order,
          [idx]: {
            ...state.order[idx],
            deploymentOptionSelected,
            modelOptions,
            modelSelected: {
              model_id: "Select",
            },
          }
        }
      }
    }
    case 'SELECT_MODEL': {
      const { idx, modelSelected } = action.payload;
      let nextState = {
        ...state,
        order: {
          ...state.order,
          [idx]: {
            ...state.order[idx],
            modelSelected,
          }
        }                 
      }
      nextState.enableNextButton = enableNextButton(nextState);
      return nextState;
    }
    case 'CHANGE_QUANTITY': {
      const { idx, quantity } = action.payload
      let nextState = {
        ...state,
        order: {
          ...state.order,
          [idx]: {
            ...state.order[idx],
            quantity: quantity,
          },
        },
      }
      nextState.enableNextButton = enableNextButton(nextState);
      return nextState;
    }
    case 'DELETE_PRODUCT': {
      let nextState = {
        ...state,
        order: {
          ...state.order,
        },
        orderCount: state.orderCount - 1,
      }
      delete nextState.order[action.payload];
      nextState.enableNextButton = enableNextButton(nextState);
      return nextState;  
    }  
    case 'ADD_PRODUCT': {
      return {
        ...state,
        enableNextButton: false,
        order: {
          ...state.order,
          [state.orderIdx]: {...orderTemplate},
        },
        orderIdx: state.orderIdx + 1,
        orderCount: state.orderCount + 1,
      }
    }
    default:
      return state;
  }
};

export default orderFormReducers;
