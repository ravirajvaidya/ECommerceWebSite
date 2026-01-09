import { Routes } from '@angular/router';
import { PageProfile } from './core/page-profile/page-profile';
import { Home } from './shared/components/home/home';
import { PageShopingcart } from './core/page-shopingcart/page-shopingcart';
import { PageNotFound } from './core/page-not-found/page-not-found';
import { Main } from './shared/components/main/main';
import { PageProductsListing } from './products/page-products-listing/page-products-listing';
import { PageProductDetails } from './products/page-product-details/page-product-details';

export const routes: Routes = [
    {
        path: "", component: Main,
        children: [
            { path: "", component: Home },
            { path: "Profile", component: PageProfile },
            { path: "Cart", component: PageShopingcart },
            { path: "Mobiles", component: PageProductsListing },
            { path: "Electronics", component: PageProductsListing },
            { path: "Fashion", component: PageProductsListing },
            { path: "Home & Furniture", component: PageProductsListing },
            { path: "Appliances", component: PageProductsListing },
            { path: "Beauty & Personal Care", component: PageProductsListing },
            { path: "Grocery", component: PageProductsListing },
            { path: "Sports & Fitness", component: PageProductsListing },
            { path: "Toys & Baby", component: PageProductsListing },
            { path: "Books", component: PageProductsListing },
            { path: "productdetails/:id", component: PageProductDetails },
            { path: "Categories/productdetails/:id", component: PageProductDetails },
        ]
    },

    { path: "**", component: PageNotFound }
];
