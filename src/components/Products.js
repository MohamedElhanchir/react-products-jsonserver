import { faCheckCircle, faCircle, faEdit, faSearch, faSearchDollar, faSearchPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { AppContext, checkProduct, deleteProduct, getProducts } from '../app/app'
import { useNavigate } from 'react-router-dom'
/*
*/
function Products() {

  const navigate=useNavigate();
  const [state,setState]=useContext(AppContext)

  //use effect is a function that is called when the component is mounted
  //and when the component is updated
  React.useEffect(()=>{
      handleGetProducts(state.keyword,state.currentPage,state.pageSize);
  },[])

  const  handleGetProducts=(keyword,page,size)=>{
    getProducts(keyword,page,size).then(response=>{
      setState({
        ...state,
        products:response.data,
        totalPages:Math.ceil(response.headers['x-total-count']/size),
        currentPage:page,
        pageSize:size,
        keyword:keyword
      })
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const handleDeleteProduct=(product)=>{
   deleteProduct(product.id)
   .then(response=>{
    setState({...state,products:state.products.filter(p=>p.id!==product.id)})
   })
   .catch(error=>{
      console.log(error)
    })
  }

  const handleCheckProduct=(product)=>{
    checkProduct(product).then(response=>{
      setState({...state,products:state.products.map(p=>p.id===product.id?{...p,checked:!p.checked}:{...p})})
    })
    .catch(error=>{
      console.log(error)
    })
  }



  const handleSearch=(event)=>{
    event.preventDefault();
    handleGetProducts(state.keyword,1,state.pageSize)
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
    <form onSubmit={handleSearch}>
      <div className='row g-2'>

        <div className='col-auto'>
          <input onChange={(e)=>setState({...state,keyword:e.target.value})} 
          value={state.keyword} className='form-control' placeholder='Search' />
        </div>
        <div className='col-auto'>
          <button  className='btn btn-success'>
           <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>



        </div>
    </form>
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
          state.products.map(product=>(
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleCheckProduct(product)}
                 className={product.checked ? 'btn btn-outline-success' : 'btn btn-outline-danger'}>
                  <FontAwesomeIcon icon={product.checked ? faCheckCircle : faCircle} />
                </button>

              </td>
              <td>
                <button onClick={()=>navigate(`/editProduct/${product.id}`)} className='btn btn-info'>
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
    <ul className='nav nav-pills'>
      {
        Array.from({length:state.totalPages},(v,k)=>k+1).map(page=>(
          <li key={page} className='nav-item ms-1'>
            <button onClick={()=>handleGetProducts(state.keyword,page,state.pageSize)} className={page===state.currentPage?'btn btn-primary':'btn btn-outline-primary'}>
              {page}
            </button>
          </li>
        ))
      }
      </ul>
  </div>

  </div>


        </div>
      </div>
      </div>
  
  )
}

export default Products