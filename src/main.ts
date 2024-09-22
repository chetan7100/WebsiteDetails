// main.ts or any other module file if using standalone components
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Import HTTP client
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Add provideHttpClient for HTTP services
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
