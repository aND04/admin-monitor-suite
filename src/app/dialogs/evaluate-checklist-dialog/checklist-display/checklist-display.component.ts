import {Component, Input, OnInit} from '@angular/core';
import {EChecklistType, IChecklist, IImage, ECheckboxAnswer} from '../../../models/usability';

@Component({
  selector: 'app-checklist-display',
  templateUrl: './checklist-display.component.html',
  styleUrls: ['./checklist-display.component.css']
})
export class ChecklistDisplayComponent implements OnInit {

  @Input()
  public checklistData: IChecklist;

  public ECheckboxAnswer = ECheckboxAnswer;

  constructor() {
  }

  ngOnInit(): void {
  }

  getDisplayTitle(): string {
    switch (this.checklistData.type) {
      case EChecklistType.CONTENT:
        return '1';
      case EChecklistType.FUNCTIONAL_ASPECTS:
        return '2';
      case EChecklistType.TRANSACTION:
        return '3';
    }
  }

  async getImageDownloadableUrl(image: IImage): Promise<void> {
    const contentType = image.base64.split('data:').pop().split(';')[0];
    const blob: Blob = await fetch(image.base64).then(res => res.blob());
    const url = window.URL.createObjectURL(blob.slice(0, blob.size, contentType));
    window.open(url, '_blank');
  }
}
