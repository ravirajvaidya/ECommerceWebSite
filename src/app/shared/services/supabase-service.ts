import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../supabase.types';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {

  supabaseClient = createClient<Database>(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  getClient(): SupabaseClient {
    return this.supabaseClient;
  }
}
