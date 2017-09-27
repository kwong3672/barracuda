import React from 'react';
import './ProductSelection.css';
import Button from './Button';
import Input from './Input';
import Price from './Price';
import SelectProduct from './SelectProduct';
import NumberedCircle from './NumberedCircle';

const ProductSelection = ({ i, productSelected, handleSelectProduct, data, deploymentOptionSelected, handleSelectDeploymentOption, deploymentOptions, modelSelected, handleSelectModel, modelOptions, quantity, handleDelete, idx, handleInput, orderCount }) => {
  const style = {
    display: "inline-flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    borderBottomStyle: "dashed",
    padding: "0 0 20px 0",
    width: "100%",
    fontSize: "16px",
    col1: {
      // width: "30px",
      padding: "20px 20px 0 0",
    },
    col2: {
      // width: "450px",
      padding: "0 200px 0 0",
    },
    col3: {
      // width: "150px",
      padding: "0 100px 0 0",
    },
    col4: {
      minWidth: "75px",
      padding: "0 100px 0 0",
    },
    col5: {
      // width: "150px",
      // padding: "20px 0 0 0",
    }
  }
  return (
  <div style={style}>
     <div style={style.col1}>
     <NumberedCircle key={i} value={i + 1} />
    </div>
    <div style={style.col2}>
      <SelectProduct 
        idx={idx}
        handleSelectProduct={handleSelectProduct}
        data={data}
        productSelected={productSelected}
        handleSelectDeploymentOption={handleSelectDeploymentOption}
        deploymentOptions={deploymentOptions}
        deploymentOptionSelected={deploymentOptionSelected}
        handleSelectModel={handleSelectModel}
        modelOptions={modelOptions}
        modelSelected={modelSelected}
        />
    </div>
    <div style={style.col3}>
      <h4>Quantity</h4>
      <Input 
        idx={idx}
        value={quantity}
        handleChange={handleInput}
        width="50px"
        textAlign="center"
        />
    </div>
    <div style={style.col4}>
      <h4>Price:</h4>
      {modelSelected.model_price ? <Price value={modelSelected.model_price * quantity} /> : ''}
    </div>
    {orderCount > 1 ? 
        <Button 
          backgroundColor="#d91313"
          border={0}
          borderRadius="4px"
          color="#fff"
          height="30px"
          label="Delete"
          margin="30px 0 0 0"
          handleClick={handleDelete}
          padding="6px 15px"
          width="100px"
          idx={idx}
          />
     :
      null 
    }
  </div>
  )
}

export default ProductSelection;
      // <label>Model</label>
      // <select value={modelSelected.model_id} onChange={e => handleSelectModel(e, idx) }>
        // <option value="Select" disabled>(Select)</option>
        // {modelOptions.map((model) => <option key={model.model_id} value={model.model_id}>{model.model_name} (${model.model_price})</option>)}
      // </select>
