import {Component, OnInit, ViewChild} from '@angular/core';
import {TableUtils} from '../utils/table-utils';
import {MatTableDataSource} from '@angular/material/table';
import {UsabilityDeclaration} from '../../models/usability-declaration';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  templateUrl: './usability-declarations.component.html',
  styleUrls: ['./usability-declarations.component.css']
})
export class UsabilityDeclarationsComponent implements OnInit {

  TABLE_UTILS = TableUtils;

  dataSource: MatTableDataSource<UsabilityDeclaration>;
  displayedColumns = [
    'Url',
    'Evaluated',
  ];
  isListEmpty: boolean;

  private fakeData: Array<UsabilityDeclaration> = [];
  @ViewChild(MatSort, { static: true }) private sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) private paginator: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit(): void {
    of(this.fakeData).pipe(delay(5000)).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
