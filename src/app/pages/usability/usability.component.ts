import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsabilityService} from '../../services/usability.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {IUsabilityEvaluationRequest} from '../../models/usability';
import {MatDialog} from '@angular/material/dialog';
import {EvaluateChecklistDialogComponent} from '../../dialogs/evaluate-checklist-dialog/evaluate-checklist-dialog.component';

@Component({
  templateUrl: './usability.component.html',
  styleUrls: ['./usability.component.css']
})
export class UsabilityComponent implements OnInit {
  loading = true;
  error = false;

  displayedColumns = [
    'ChecklistUuid',
    'Processed',
    'CreatedAt'
  ];

  dataSource: MatTableDataSource<IUsabilityEvaluationRequest>;
  selection: any;

  @ViewChild('input') input: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usabilityService: UsabilityService, private cd: ChangeDetectorRef, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.usabilityService.getChecklistData().subscribe(checklists => {
      if (checklists !== null) {
        this.dataSource = new MatTableDataSource<IUsabilityEvaluationRequest>(checklists);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.error = true;
      }

      this.loading = false;
      this.cd.detectChanges();
    });
  }

  openChecklistDetails(checklistUuid: string): void {
    this.usabilityService.getChecklistDetails(checklistUuid).subscribe(checklistData => {
      this.dialog.open(EvaluateChecklistDialogComponent, {
        data: checklistData
      });
    });
  }
}
