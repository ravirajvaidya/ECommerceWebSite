import { Routes } from '@angular/router';
import { PageProfile } from './core/page-profile/page-profile';
import { Home } from './shared/components/home/home';
import { PageNotFound } from './core/page-not-found/page-not-found';
import { Main } from './shared/components/main/main';
import { PageProductsListing } from './products/page-products-listing/page-products-listing';
import { PageProductDetails } from './products/page-product-details/page-product-details';
import { PageLogin } from './auth/page-login/page-login';
import { PageSignUp } from './auth/page-sign-up/page-sign-up';
import { PageCart } from './cart/Components/page-cart/page-cart';
import { PageBuyNow } from './cart/Components/page-buy-now/page-buy-now';

export const routes: Routes = [
    {
        path: "", component: Main,
        children: [
            { path: "", component: Home },
            { path: "Login", component: PageLogin },
            { path: "SignUp", component: PageSignUp },
            { path: "Profile", component: PageProfile },
            { path: "Cart", component: PageCart },
            { path: "Checkout", component: PageBuyNow },
            // { path: "Mobiles/:categoryName", component: PageProductsListing },
            // { path: "Electronics/:categoryName", component: PageProductsListing },
            // { path: "Fashion/:categoryName", component: PageProductsListing },
            // { path: "Home & Furniture/:categoryName", component: PageProductsListing },
            // { path: "Appliances/:categoryName", component: PageProductsListing },
            // { path: "Beauty & Personal Care/:categoryName", component: PageProductsListing },
            // { path: "Grocery/:categoryName", component: PageProductsListing },
            // { path: "Sports & Fitness/:categoryName", component: PageProductsListing },
            // { path: "Toys & Baby/:categoryName", component: PageProductsListing },
            // { path: "Books/:categoryName", component: PageProductsListing },
            { path: "category/:categoryName", component: PageProductsListing },
            { path: "productdetails/:id", component: PageProductDetails },
        ]
    },

    { path: "**", component: PageNotFound }
];
