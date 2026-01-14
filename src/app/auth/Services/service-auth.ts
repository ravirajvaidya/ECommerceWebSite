import { Injectable } from '@angular/core';
import { SupabaseService } from '../../shared/services/supabase-service';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceAuth {

  constructor(private supabaseService: SupabaseService) { }

  async signIn(email: string, password: string) {
    try {

      const { data, error } = await this.supabaseService.getClient()
        .auth.signInWithPassword({ email, password });

      if (error) {
        throw error;
      }

      return data;
    }
    catch (err: any) {
      console.error('SignIn failed:', err.message || err);
      throw err;
    }
  }

  async signUp(
    email: string,
    password: string,
    fullName: string,
    mobile: string
  ) {
    try {
      console.log("email :", email);
      console.log("password :", password);
      console.log("fullName :", fullName);
      console.log("mobile :", mobile);

      // ✅ ONLY AUTH SIGNUP
      const { data, error } =
        await this.supabaseService.getClient().auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              mobile: mobile
            }
          }
        });

      if (error) {
        throw error;
      }

      return data;

    } catch (err: any) {
      console.error('Signup failed:', err.message || err);
      throw err;
    }
  }
}
