import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of, throwError } from 'rxjs';
import { SupabaseService } from '../../shared/services/supabase-service';
import { IProducts } from '../Interfaces/IProducts';

@Injectable({
  providedIn: 'root',
})
export class ServiceProducts {
  constructor(private supaService: SupabaseService) { }

  GetAllProducts(): Observable<IProducts[]> {
    const promis = this.supaService.getClient()
      .from('product').select('*');

    return from(promis).pipe(
      map(response => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        console.log("ServiceProducts DATA = ", JSON.stringify(response.data));
        return response.data ?? [];
      }),
      catchError(error => {
        console.error('Supabase fetch error:', error);
        // Return an empty array so the UI can still render without crashing
        return of([]);
      })
    );
  }

  GetProductsAsPerCategories(catId: number): Observable<IProducts[]> {
    console.log("ServiceProducts catId = ", catId);

    const promis = this.supaService.getClient()
      .from('product').select('*')
      .eq('category_id', catId);

    return from(promis).pipe(
      map(response => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        console.log("ServiceProducts DATA = ", JSON.stringify(response.data));
        return response.data ?? [];
      }),
      catchError(error => {
        console.error('Supabase fetch error:', error);
        // Return an empty array so the UI can still render without crashing
        return of([]);
      })
    );
  }

  GetProductsAsPerCategoriesWithImages(catId: number): Observable<any[]> {
    console.log("ServiceProducts catId = ", catId);

    const promis = this.supaService.getClient()
      .from('product').
      select(`
        product_id,
        seller_id,
        category_id,
        sub_category_id,
        product_name,
        description,
        brand,
        status,
        created_at,
        price_actual,
        price_discounted,        
        product_images(
          image_id,
          product_id,
          image_url
          )
      `)
      .eq('category_id', catId);

    return from(promis).pipe(
      map(response => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        console.log("ServiceProducts DATA = ", JSON.stringify(response.data));
        return response.data ?? [];
      }),
      catchError(error => {
        console.error('Supabase fetch error:', error);
        // Return an empty array so the UI can still render without crashing
        return of([]);
      })
    );
  }

  GetAllProductsWithImages(): Observable<any[]> {

    const promis = this.supaService.getClient()
      .from('product').
      select(`
        product_id,
        seller_id,
        category_id,
        sub_category_id,
        product_name,
        description,
        brand,
        status,
        created_at,
        price_actual,
        price_discounted,
        product_images(
          image_id,
          product_id,
          image_url
          )
      `);

    return from(promis).pipe(
      map(response => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        console.log("ServiceProducts DATA = ", JSON.stringify(response.data));
        return response.data ?? [];
      }),
      catchError(error => {
        console.error('Supabase fetch error:', error);
        // Return an empty array so the UI can still render without crashing
        return of([]);
      })
    );
  }

  GetProductDetailsById(pId: number): Observable<IProducts | null> {
    const promis = this.supaService.getClient()
      .from('product')
      .select(`
        product_id,
        seller_id,
        category_id,
        sub_category_id,
        product_name,
        description,
        brand,
        status,
        created_at,
        price_actual,
        price_discounted,
        product_images(
          image_id,
          product_id,
          image_url
          )
      `)
      .eq('product_id', pId).single();

    return from(promis).pipe(
      map(({ data, error }) => {
        if (error) throw error;

        return {
          ...data,
          product_images: data.product_images ?? [] // normalize
        } as IProducts;
      }),
      catchError(error => {
        console.error('Supabase fetch error:', error);
        return of(null);
      })
    );
  }
}
