import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SearchForm({handleSearch,setState,state}) {
  return (
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
  )
}

export default SearchForm