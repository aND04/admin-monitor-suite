import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import * as _ from 'lodash';

import { EvaluationService } from '../../services/evaluation.service';
import { GetService } from '../../services/get.service';
import { DeleteService } from '../../services/delete.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {

  loading: boolean;
  error: boolean;

  sub: Subscription;

  page: string;

  evaluations: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private evaluation: EvaluationService,
    private get: GetService,
    private deleteService: DeleteService,
    private message: MessageService
  ) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.page = params.page;
      this.getListOfPageEvaluations();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getListOfPageEvaluations(): void {
    this.get.listOfPageEvaluations(encodeURIComponent(this.page))
      .subscribe(evaluations => {
        if (evaluations !== null) {
          this.evaluations = evaluations;
        } else {
          this.error = true;
        }

        this.loading = false;
      });
  }

  evaluate(): void {
    this.loading = true;

    this.evaluation.evaluateUrl(this.page)
      .subscribe(data => {
        if (data === null) {
          this.error = true;
          this.loading = false;
        } else {
          this.getListOfPageEvaluations();
        }
      });
  }

  deleteEvaluation(evaluationId: number): void {
    this.deleteService.evaluation({ evaluationId })
      .subscribe(success => {
        if (success !== null) {
          this.loading = true;
          this.getListOfPageEvaluations();
          this.message.show('EVALUATIONS_PAGE.DELETE.messages.success');
        }
      });
  }
}
