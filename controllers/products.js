

const Product = require("../model/products")

const getAllProducts = async(req, res)=>{

    const { company, name } = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }

    if(featured){
        queryObject.featured = featured;
    }
    
    if(name){
        queryObject.name = { $regex : name, $options : "i" };
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortfix = sort.replace(",", " ")
        queryObject.sort = sortfix;
    }
    
    console.log(queryObject)

    const myData = await Product.find(req.query)
    res.status(200).json({
        myData
    })
}

const getAllProductsTesting = async(req, res)=> {
    const myData = await Product.find(req.query).sort("name -price")
    res.status(200).json({
        myData
    })
}

module.exports = {getAllProducts, getAllProductsTesting}

