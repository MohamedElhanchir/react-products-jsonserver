import { faCheckCircle, faCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
/*
*/
function Products() {

  const [products,setProducts]=useState([
    {id:1, name:'Product 1', price:100, checked:false},
    {id:2, name:'Product 2', price:200, checked:true},
    {id:3, name:'Product 3', price:300, checked:false},
    {id:4, name:'Product 4', price:400, checked:true},
    {id:5, name:'Product 5', price:500, checked:false},
  ])

  const handleDeleteProduct=(product)=>{
    setProducts(products.filter(p=>p.id!==product.id))
  }

  const handleCheckProduct=(id)=>{
    setProducts(products.map(p=>p.id===id?{...p,checked:!p.checked}:{...p}))
  }

  const handleEditProduct=(product)=>{
    setProducts(products.map(p=>p.id===product.id?{...p,checked:!p.checked}:{...p}))
  }


  return (
    <div className='p-1 m-1'>
      <div className='row'>
        <div className='col-md-6 m-auto'>

        <div className='card'>
<div className='card-header'>
  <h3>Products</h3>
  </div>

  <div className='card-body'>
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Checked</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product=>(
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleCheckProduct(product.id)}
                 className={product.checked ? 'btn btn-outline-success' : 'btn btn-outline-danger'}>
                  <FontAwesomeIcon icon={product.checked ? faCheckCircle : faCircle} />
                </button>

              </td>
              <td>
                <button onClick={()=>handleEditProduct(product)} className='btn btn-info'>
                  <FontAwesomeIcon icon={faEdit} />
                </button>

                <button onClick={()=>handleDeleteProduct(product)} className='btn btn-danger ms-1'>
                  <FontAwesomeIcon icon={faTrash} />
                </button>

              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>

  </div>


        </div>
      </div>
      </div>
  
  )
}

export default Products