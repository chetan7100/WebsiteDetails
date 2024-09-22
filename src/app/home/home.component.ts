// home.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService] // Provide the service here if not using root-level provider
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Call the API when the component initializes
    this.apiService.getData().subscribe({
      next: (response) => {
        this.data = response; // Store the response data
        console.log('Data received:', response);
      },
      error: (error) => {
        console.error('Error fetching data:', error); // Handle error
      }
    });
  }
}
