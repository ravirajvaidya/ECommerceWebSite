import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of } from 'rxjs';
import { SupabaseService } from '../../shared/services/supabase-service';
import { ICategories } from '../Interfaces/ICategories';

@Injectable({
  providedIn: 'root',
})
export class ServiceCategory {

  lstOfCategories: ICategories[] = [];

  constructor(private supabaseService: SupabaseService) { }

  GetAllCategories(): Observable<ICategories[]> {
    const promis = this.supabaseService.getClient()
      .from('category').select('*');

    return from(promis).pipe(
      map(response => {
        if (response.error) {
          throw new Error(response.error.message); // Trigger catchError if Supabase returns an error
        }

        this.lstOfCategories = response.data ?? [];

        return this.lstOfCategories
      }),
      catchError(error => {
        console.error('Supabase fetch error:', error);
        // Return an empty array so the UI can still render without crashing
        return of(this.lstOfCategories);
      })
    );
  }

  GetCategorieName(catId: number): Observable<string> {
    const promis = this.supabaseService.getClient()
      .from('category').select('*').eq('category_id', catId).single();

    return from(promis).pipe(
      map(response => {
        if (response.error) {
          throw new Error(response.error.message); // Trigger catchError if Supabase returns an error
        }
        return response.data.category_name ?? "Unknow Category";
      }),
      catchError(error => {
        console.error('Supabase fetch error:', error);
        // Return an empty array so the UI can still render without crashing
        return of("Unknow Category");
      })
    );

  }

}
