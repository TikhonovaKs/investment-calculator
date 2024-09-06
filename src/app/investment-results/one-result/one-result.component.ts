import { Component, inject, Input } from '@angular/core';
import { OneYearResult } from '../result.model';

@Component({
  selector: 'app-one-result',
  standalone: true,
  imports: [],
  templateUrl: './one-result.component.html',
  styleUrl: './one-result.component.css'
})
export class OneResultComponent {

  @Input({ required: true }) result!: OneYearResult;
}
