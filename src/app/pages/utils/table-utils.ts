import {MatTableDataSource} from '@angular/material/table';

export class TableUtils {
  static applyFilter(dataSource: MatTableDataSource<any>, event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    dataSource.filter = filterValue.trim().toLowerCase();
  }
}
