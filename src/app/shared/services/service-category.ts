import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase-service';
import { catchError, from, map, Observable, of } from 'rxjs';
import { ICategories } from '../interfaces/ICategories';

@Injectable({
  providedIn: 'root',
})
export class ServiceCategory {
  constructor(private supabaseService: SupabaseService) { }

  GetAllCategories(): Observable<ICategories[]> {
    const promis = this.supabaseService.getClient().from('category').select('*');

    return from(promis).pipe(
      map(response => {
        if (response.error) {
          throw new Error(response.error.message); // Trigger catchError if Supabase returns an error
        }
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
