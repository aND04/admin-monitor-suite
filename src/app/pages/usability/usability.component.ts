import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsabilityService} from '../../services/usability.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-usability',
  templateUrl: './usability.component.html',
  styleUrls: ['./usability.component.css']
})
export class UsabilityComponent implements OnInit {
  loading = true;
  error = false;

  displayedColumns = [
    '_id',
    'createdAt'
  ];

  dataSource: MatTableDataSource<any>;
  selection: any;

  @ViewChild('input') input: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usabilityService: UsabilityService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.usabilityService.getChecklistData().subscribe(checklists => {
      if (checklists !== null) {
        this.dataSource = new MatTableDataSource(checklists);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.error = true;
      }

      this.loading = false;
      this.cd.detectChanges();
    });
  }

}
