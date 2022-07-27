import { Product } from './Product';
export interface ShoppingCart{
    id: string,
    product: Product,
    productId: string,
    createdAt: string,
    quantity: number,
    
}