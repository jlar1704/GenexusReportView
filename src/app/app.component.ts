import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GenexusReportView';
  myControl = new FormControl();
  cliente: string[] = ['Juan', 'Miguel', 'Jose','Agustin','Enmanuel','Carlos','Johan','Leandro'];
  filteredOptions: Observable<string[]>;


  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
}

 ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cliente.filter(option => option.toLowerCase().includes(filterValue));
  }

  ShowMessage(mensaje){
    alert(mensaje);
  }
}
