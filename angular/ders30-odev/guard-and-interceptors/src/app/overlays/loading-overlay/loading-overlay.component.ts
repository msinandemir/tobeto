import { Component } from '@angular/core';
import { LoadingServiceService } from '../../services/loading-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-overlay.component.html',
  styleUrl: './loading-overlay.component.css',
})
export class LoadingOverlayComponent {
  loadingService: LoadingServiceService;
  constructor(private _loadingService: LoadingServiceService) {
    this.loadingService = _loadingService;
  }
}
