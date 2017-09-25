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
  displayDeleteButton: false,
}


const orderFormReducers = (state = initialState, action) => {
  switch (action.type) { 
    case 'SELECT_PRODUCT': {
      const { idx, productSelected, deploymentOptions } = action.payload;
      return {
        ...state,
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
        order: {
          ...state.order,
          [idx]: {
            ...state.order[idx],
            deploymentOptionSelected,
            modelOptions,
            modelSelected: {
              model_id: "Select",
            }
          }
        }

      } 
    }
    case 'SELECT_MODEL': {
      const { idx, modelSelected } = action.payload;
      return {
        ...state,
        order: {
          ...state.order,
          [idx]: {
            ...state.order[idx],
            modelSelected,
          }
        }                 
      }
    }
    case 'CHANGE_QUANTITY': {
      const { idx, quantity } = action.payload
      return {
        ...state,
        order: {
          ...state.order,
          [action.payload.idx]: {
            ...state.order[idx],
            quantity,
          },
        },
      }  
    }
    case 'DELETE_PRODUCT':
      let newState = {
        ...state,
        order: {
          ...state.order,
          // [action.payload]: null,
        },
        orderCount: state.orderCount - 1,
        displayDeleteButton: state.orderCount > 1,
      }
      delete newState.order[action.payload];
      return newState;    
    case 'ADD_PRODUCT':
      return {
        ...state,
        order: {
          ...state.order,
          [state.orderIdx]: {...orderTemplate},
        },
        orderIdx: state.orderIdx + 1,
        orderCount: state.orderCount + 1,
        // displayDeleteButton: state.orderCount > 1,
      }
    default:
      return state;
  }
};

export default orderFormReducers;