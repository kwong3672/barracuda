import React from 'react';

import Dropdown from './Dropdown';

const SelectProduct = ({
  data,
  deploymentOptions,
  deploymentOptionSelected,
  handleSelectDeploymentOption,
  handleSelectModel,
  handleSelectProduct,
  idx,
  modelOptions,
  modelSelected,
  productSelected,
}) => {
  
  const style = {
    display: "block",
  };

  return (  
    <div style={style}>
      <h4>Select Your Product</h4>
      <Dropdown 
        handleChange={handleSelectProduct}
        idx={idx}
        label={'Product'}
        options={data.products}
        optionId={'product_id'}
        optionName={'product_name'} 
        selectValue={productSelected.product_id} 
        width={"250px"}/>
      <Dropdown
        handleChange={handleSelectDeploymentOption}
        idx={idx}
        label={'Deployment Options'}
        options={deploymentOptions}
        optionId={'deployment_id'}
        optionName={'deployment_name'} 
        selectValue={deploymentOptionSelected.deployment_id} 
        width={"250px"}/>
      <Dropdown
        handleChange={handleSelectModel}
        idx={idx}
        label="Model"
        options={modelOptions}
        optionId="model_id"
        optionName="model_name" 
        optionPrice="model_price"
        selectValue={modelSelected.model_id} 
        width={"250px"} />
    </div>
  );
};

export default SelectProduct;
