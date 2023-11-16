import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { cedula: '12345', password: 'pass1' },
    { cedula: '67890', password: 'pass2' },

  ];

  getUsers() {
    return this.users;
  }

  login(cedula: string, password: string): boolean {
    const user = this.users.find(u => u.cedula === cedula && u.password === password);
    return !!user; // Retorna true si se encuentra el usuario
  }
}
