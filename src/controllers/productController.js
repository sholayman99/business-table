const productModel = require("../models/productModel")

exports.productList =async(req,res)=>{
    try {
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKeyword;
        const skipRow = (pageNo-1) * perPage;
        let data;

        if(searchValue !== "0"){
            let searchRegex = {"$regex":searchValue , "$options":"i"}
            let searchQuery = {$or:[{title:searchRegex},{category:searchRegex},{brand:searchRegex},{remark:searchRegex}]}

            data = await productModel.aggregate([{
                    $facet:{
                        Total: [{$match:searchQuery},{$count:"count"}],
                        Rows : [{$match:searchQuery},{$skip:skipRow},{$limit:perPage}]
                    }
                }])
        }
        else{
            data = await productModel.aggregate([
                {
                    $facet:{
                        Total:[{$count:"total"}],
                        Rows:[{$skip:skipRow},{$limit:perPage}]
                    }
                }
            ])
        }

        res.status(200).json({status:"success",data:data});

    }
    catch (e) {
        res.status(400).json({status:"fail",error:e});
    }
}