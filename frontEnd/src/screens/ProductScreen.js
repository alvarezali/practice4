import { getProduct } from "../api";
import { parseUrlRequest } from "../utils";

const ProductScreen = {
    render: async ()=>{

        const request = parseUrlRequest();

        console.log('this is the id',request.id);

        const product = await getProduct(request.id);
        
        return `
        <h1>Product screen</h1>
        <h1>${product.name}</h1>`;
    }
}

export {ProductScreen};