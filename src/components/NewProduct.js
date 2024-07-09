import React, { useEffect, useState } from 'react'
import { createProduct } from '../app/app'

function NewProduct() {
  const [name,setName]=useState('')
  const [price,setPrice]=useState(0)
  const[checked,setChecked]=useState(false)

  const handleSaveProduct = (e) => {
    e.preventDefault();
    let product = { name, price, checked };
    createProduct(product)
      .then((resp) => alert(JSON.stringify(resp.data)))
      .catch((err) => console.log(err)); 
  };

  return (
    <div className='row'>
      <div className='col-md-6 m-auto'>
        <div className='card m-2'>
          <div className='card-header'>
            <h3>New Product</h3>
          </div>
          <div className='card-body'>


            <form onSubmit={handleSaveProduct}>
              <div className='form-group m-2' >
                <input onChange={(e)=>setName(e.target.value)} value={name} 
                className='form-control'  placeholder='Product Name' />
              </div>
              <div className='form-group m-2'>
                <input type='number'  onChange={(e)=>setPrice(e.target.value)} value={price}
                 className='form-control' placeholder='Product Price' />
              </div>
             

              <div className="form-check">
             <input className="form-check-input"
              onChange={(e)=>setChecked(e.target.checked)}
              checked={checked}
              type="checkbox"  id="flexCheckChecked"/>
              <label className="form-check-label" htmlFor="flexCheckChecked">Checked</label>
              </div>

              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
    )
}

export default NewProduct