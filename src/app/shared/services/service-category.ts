import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase-service';

@Injectable({
  providedIn: 'root',
})
export class ServiceCategory {
  constructor(private supabaseService: SupabaseService) { }

  async getCategories() {
    const supabase = this.supabaseService.getClient();

    return await supabase
      .from('category')
      .select('category_id, category_name, category_image_url');
  }
}
