import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IChecklistForm} from '../../models/usability';

@Component({
  templateUrl: './evaluate-checklist-dialog.component.html',
  styleUrls: ['./evaluate-checklist-dialog.component.css']
})
export class EvaluateChecklistDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IChecklistForm) { }

  ngOnInit(): void {
  }

}
