const initialState = {
  productSelected: [],
  deploymentMethods: [],
  modelOptions: [],
  modelSelected: {},
  quantity: 1,
}


const orderFormReducers = (state = initialState, action) => {
  switch (action.type) { 
    case 'SELECT_PRODUCT': 
      return {
        ...state,
        productSelected: action.payload.productSelected,
        deploymentMethods: action.payload.deploymentMethods
      }
    case 'SELECT_DEPLOYMENT_OPTION':
      return {
        ...state,
        deploymentMethodSelected: action.payload.deploymentMethodSelected,
        modelOptions: action.payload.modelOptions,
      } 
    case 'SELECT_MODEL':
      return {
        ...state,
        modelSelected: {
          ...state.modelSelected,
          model_id: action.payload.model_id,
          model_name: action.payload.model_name,
          model_price: action.payload.model_price,
          deployment_id: action.payload.deployment_id,          
        }
          
      }
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        quantity: action.payload,
      }      
    default:
      return state;
  }
};

export default orderFormReducers;