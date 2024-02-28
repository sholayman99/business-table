import React, {useEffect, useState} from 'react';
import {productList} from "../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";

const ProductList = () => {

    let [searchKeyword,setSearchKeyword] = useState("0");
    let [perPage,setPerPage] = useState(5);

    useEffect(() => {
        (async ()=>{
            await  productList(1,perPage,searchKeyword);
        })()
    }, []);

    let allProduct = useSelector((state)=>state.product.allProduct);
    let total = useSelector((state)=>state.product.total)

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <h5>My Product List</h5>
                                        </div>
                                        <div className="col-2">
                                            <select  className="form-control mx-2 form-select-sm form-select form-control-sm" >
                                                <option value="5">5 Per Page</option>
                                                <option value="10">10 Per Page</option>
                                                <option value="20">20 Per Page</option>
                                                <option value="30">30 Per Page</option>
                                                <option value="50">50 Per Page</option>
                                                <option value="100">100 Per Page</option>
                                                <option value="200">200 Per Page</option>
                                                <option value="200">200 Per Page</option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <input  type="text" className="form-control form-control-sm" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                <button className="btn  btn-outline-primary btn-sm mb-0" type="button">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive data-table">
                                                <table className="table ">
                                                    <thead className="sticky-top bg-white">
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Product</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Stock</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Code</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        allProduct.map((item,i)=>
                                                            <tr key={i}>
                                                                <td>
                                                                    <div className="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={item.image} className="avatar me-3" alt={""}/>
                                                                        </div>
                                                                        <div className="d-flex flex-column justify-content-center">
                                                                            <h6 className="mb-0  text-xs">{item.title}</h6>
                                                                            <p className="text-xs  text-secondary mb-0">{item.category}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs font-weight-bold mb-0">{item.brand}</p>
                                                                    <p className="text-xs  text-secondary mb-0">{item.price} Taka </p>
                                                                </td >
                                                                <td>
                                                                    <p className="badge  bg-gradient-success">{item.stock}</p>
                                                                </td>
                                                                <td>
                                                                    <span className="text-secondary text-xs font-weight-bold">{item.product_code}</span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <nav aria-label="Page navigation example">
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;