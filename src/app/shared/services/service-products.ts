import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase-service';
import { catchError, from, map, Observable, of } from 'rxjs';
import { IProducts } from '../interfaces/IProducts';

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
}
