import { getProduct } from "../api";
import { parseUrlRequest } from "../utils";
import Rating from "../components/Rating";

const ProductScreen = {
    render: async ()=>{

        const request = parseUrlRequest();

        const product = await getProduct(request.id);
        
        return `
        <div class="content">
            <div class="back-to-result"><a href="/#/">Back to result</a></div>
            
            <div class="details">
                <div class="details-imgage"><img src="${product.image}" alt="${product.name}"/></div>
                <div class="details-info">
                    <ul>
                        <li><h1>${product.name}</h1></li>
                        <li>${Rating.render({value: product.rating, text: `${product.numReviews} reviews`})}</li>
                        <li>Price: <strong>$${product.price}</strong></li>
                        <li>Brand: <div>${product.brand}</div></li>
                    </ul>
                </div>
            </div>

            <div class="details-action">
                <ul>
                    <li>Price: $${product.price}</li>
                    <li>Status: ${product.countInStock > 0 ? `<span class="success">In stock</span>` : `<span class="error">Unavailable</span>`}</li>
                    <li><button id="add-button" class="primary">Add to cart</button></li>
                </ul>
            </div>
        </div>
        `;
    }
}

export {ProductScreen};