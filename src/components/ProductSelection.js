import React from 'react';

import Button from './Button';
import Input from './Input';
import NumberedCircle from './NumberedCircle';
import Price from './Price';
import SelectProduct from './SelectProduct';

const ProductSelection = ({ 
  i, 
  data, 
  deploymentOptions, 
  deploymentOptionSelected, 
  handleSelectDeploymentOption, 
  handleDelete, 
  handleInput, 
  handleSelectModel, 
  handleSelectProduct, 
  idx, 
  modelSelected, 
  modelOptions, 
  orderCount, 
  productSelected, 
  quantity
}) => {
  
  const style = {
    borderTop: "3px solid #78736d",
    borderBottom: "1px dashed #78736d",
    display: "inline-flex",
    flexWrap: "wrap",
    fontSize: "16px",
    justifyContent: "flex-start",
    padding: "0 0 20px 0",
    width: "100%",
    col1: {
      padding: "20px 20px 0 0",
    },
    col2: {
      width: "450px",
    },
    col3: {
      width: "175px", 
    },
    col4: {
      width: "175px",
    },
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
