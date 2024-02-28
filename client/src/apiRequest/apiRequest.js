import axios from "axios";
import store from "../redux/store/store.js";
import {showLoader,hideLoader} from "../redux/state-slice/setting-slice.js"
import {setTotal,setAllProduct} from "../redux/state-slice/product-slice.js"


export async function productList(pageNo,perPage,searchKeyword){
    store.dispatch(showLoader());
    let res = await axios.get(`http://localhost:5050/api/v1/productList/${pageNo}/${perPage}/${searchKeyword}`);
    store.dispatch(hideLoader());
    if(res['status'] === 200 && res.data['status'] === 'success'){
        if(res.data['data'][0]['Rows'].length>0){
          store.dispatch(setAllProduct(res.data['data'][0]['Rows']));
          store.dispatch(setTotal(res.data['data'][0]['Total']))
        }
        else{
            store.dispatch(setAllProduct([]));
            store.dispatch(setTotal(0))
        }
    }
}