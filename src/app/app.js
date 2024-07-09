import axios from "axios";
import { createContext, useState } from "react";

/**
 * Axios instance for making API requests to the product API.
 * @type {import("axios").AxiosInstance}
 */
export const productApi=axios.create({
    baseURL:"http://localhost:3003"
})


const getProducts=(keyword="",page=1,size=4)=>{
    return productApi.get(`/products?name_like=${keyword}&_page=${page}&_limit=${size}`)
}

const getProductById=(id)=>{
    return productApi.get(`/products/${id}`)
}

const createProduct=(product)=>{
    return productApi.post("/products",product)
}

const updateProduct=(id,product)=>{
    return productApi.put(`/products/${id}`,product)
}

const checkProduct=(product)=>{
    return productApi.patch(`/products/${product.id}`,{checked:!product.checked})
}

const deleteProduct=(id)=>{
    return productApi.delete(`/products/${id}`)
}

export {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    checkProduct
}

/*
we use the createContext function to create a context object that we can
 use to share data between components.
*/
export const AppContext = createContext();

export const useAppState = ()=>{
    const initialState ={
        products:[],
        currentPage:1,
        pageSize:4,
        keyword:'',
        totalProducts:0,
        totalPages:0,
      }
      //use state used to store the current state of the products
  const appState=useState(initialState);
  return appState;
}
  