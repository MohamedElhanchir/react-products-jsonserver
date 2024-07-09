import React, { useEffect, useState } from 'react'
import { createProduct, getProductById, updateProduct } from '../app/app'
import { useParams } from 'react-router-dom'

function EditProduct() {

  const {id}=useParams()
  const [name,setName]=useState('')
  const [price,setPrice]=useState(0)
  const[checked,setChecked]=useState(false)

  useEffect(() => {
    getProductById(id)
     .then((resp) => {
        setName(resp.data.name)
        setPrice(resp.data.price)
        setChecked(resp.data.checked)
      })
      .catch((err) => console.log(err));
  }, [id])

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let product = {id, name, price, checked };
    updateProduct(id,product)
      .then((resp) => alert(JSON.stringify(resp.data)))
      .catch((err) => console.log(err)); 
  };

  return (
    <div className='row'>
      
      <div className='col-md-6 m-auto'>
        <div className='card m-2'>
          <div className='card-header'>
            <h3>Edit Product </h3>
          </div>
          <div className='card-body'>


            <form onSubmit={handleUpdateProduct}>
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

export default EditProduct