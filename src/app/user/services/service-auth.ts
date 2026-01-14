import { Injectable } from '@angular/core';
import { SupabaseService } from '../../shared/services/supabase-service';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceAuth {

  constructor(private supabaseService: SupabaseService) { }

  async signUp(
    email: string,
    password: string,
    fullName: string,
    mobile: string
  ) {
    try {
      // 1️⃣ Supabase Auth Signup
      const { data, error } =
        await this.supabaseService.getClient().auth.signUp({
          email,
          password
        });

      if (error) {
        throw error;
      }

      // 2️⃣ Insert into custom users table
      const user = data.user;

      if (!user) {
        throw new Error('User not returned from Supabase Auth');
      }

      const { error: profileError } =
        await this.supabaseService.getClient()
          .from('users')
          .insert({
            user_id: user.id,
            full_name: fullName,
            email: email,
            mobile: mobile,
            role: 'User',
            status: 'Active'
          });

      if (profileError) {
        throw profileError;
      }

      return data;

    } catch (err: any) {
      console.error('Signup failed:', err.message || err);

      // 🔁 Re-throw so component can handle UI feedback
      throw err;
    }
  }
}
