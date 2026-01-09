import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  from(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey
    );

    console.log(this.supabase.from);
  }
  getClient(): SupabaseClient {
    return this.supabase;
  }
}
