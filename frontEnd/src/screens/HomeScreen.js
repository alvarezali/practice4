import { products } from "../data.js"

const HomeScreen = {
    render: ()=>{
        return `
        <url class="products">
        ${products.map((product) => 
            `
            <li>
                <div class="product">
                    <a href="/#/product/${product._id}"><img src='${product.image}' alt='${product.name}'></a>
                    <div class="product-name"><a href="/#/product/${product._id}">${product.name}</a></div>
                    <div class="product-brand">${product.brand}</div>
                    <div class="product-price">$${product.price}</div>
                </div>
            </li>
            `
        ).join('')}

        </url>`
    }               
}

export {HomeScreen};