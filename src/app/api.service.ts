// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service available globally
})
export class ApiService {
  private apiUrl = 'https://api.dev.outreachkart.de/api/v1/website/Shubh Mangal';

  constructor(private http: HttpClient) {} // Make sure HttpClient is correctly injected

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
