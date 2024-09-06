import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneResultComponent } from './one-result/one-result.component';
import { OneYearResult } from './result.model';
import { InvestmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [OneResultComponent, CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() results: OneYearResult[] = [];

  results: OneYearResult[] = [];

  private investmentResultsService = inject(InvestmentResultsService);

  ngOnInit() {
    // Подписываемся на обновления из сервиса
    this.investmentResultsService.results$.subscribe((data) => {
      this.results = data;
    });
  }
}
