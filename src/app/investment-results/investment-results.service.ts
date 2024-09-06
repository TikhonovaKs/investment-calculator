import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OneYearResult } from './result.model';
import { UserInput } from '../user-input/user-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  private resultsSubject = new BehaviorSubject<OneYearResult[]>([]);
  results$ = this.resultsSubject.asObservable();

  calculateResult(calculatedData: UserInput) {
    const annualData = [];
    let investmentValue = calculatedData.initInvestment;

    for (let i = 0; i < calculatedData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (calculatedData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + calculatedData.annualInvestment;
      const totalInterest =
        investmentValue -
        calculatedData.annualInvestment * year -
        calculatedData.initInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: calculatedData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          calculatedData.initInvestment +
          calculatedData.annualInvestment * year,
      });
    }

    // Обновляем состояние с новыми результатами
    this.resultsSubject.next(annualData);
  }
}
