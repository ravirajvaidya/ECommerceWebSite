import { IProductImages } from "./IProductImages";

export interface IProducts {
    product_id: number;        // bigint (int8)
    seller_id: number;         // bigint (int8)
    category_id: number;       // bigint (int8)
    sub_category_id: number;   // bigint (int8)
    product_name: string;      // varchar
    description: string | null;// text (nullable)
    brand: string | null;      // varchar (nullable)
    status: boolean | null;    // boolean (nullable)
    created_at: string | null; // timestamptz (ISO string)
    price_actual: number | null;
    price_discounted: number | null;

    // Joined data
    product_images?: IProductImages[] | null;
}