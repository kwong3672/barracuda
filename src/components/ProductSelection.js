import React from 'react';
import './ProductSelection.css';

const ProductSelection = ({ productSelected, handleSelectProduct, data, deploymentOptionSelected, handleSelectDeploymentOption, deploymentOptions, modelSelected, handleSelectModel, modelOptions, quantity, handleDelete, idx, handleInput, orderCount }) =>   
  <div className="product-container">
    <div className="product-selection-container">
      <div className="selection-header">Select Your Product</div>
      <label>Product</label>
      <select value={productSelected.product_id} onChange={e => handleSelectProduct(e, idx) }>
        <option value="Select" disabled>(Select)</option>
        {data.products.map((product) => <option key={product.product_id} value={product.product_id}>{product.product_name}</option> )}
      </select>
      <label>Deployment Options</label>
      <select value={deploymentOptionSelected.deployment_id} onChange={e => handleSelectDeploymentOption(e, idx) }>
        <option value="Select" disabled>(Select)</option>
         {deploymentOptions.map((method) => <option key={method.deployment_id} value={method.deployment_id}>{method.deployment_name}</option> )}
      </select>
      <label>Model</label>
      <select value={modelSelected.model_id} onChange={e => handleSelectModel(e, idx) }>
        <option value="Select" disabled>(Select)</option>
        {modelOptions.map((model) => <option key={model.model_id} value={model.model_id}>{model.model_name} (${model.model_price})</option>)}
      </select>
    </div>
    <div className="product-quantity-container">
      <div className="selection-header">Quantity</div>
      <input value={quantity} onChange={e => handleInput(e, idx) }/>
    </div>
    <div className="product-price-container">
      <div className="selection-header">Price</div>
      <div>{modelSelected.model_price ? '$' + modelSelected.model_price * quantity : ''}</div>
    </div>
    {orderCount > 1 ? 
      <div><button className="product-delete" onClick={e => handleDelete(idx)}>Delete</button></div> :
      null 
    }
  </div>

export default ProductSelection;
