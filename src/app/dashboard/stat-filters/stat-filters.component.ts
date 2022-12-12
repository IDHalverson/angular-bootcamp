import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss'],
})
export class StatFiltersComponent implements OnInit {
  public statFiltersData: FormGroup;
  // <{
  //   author: FormControl<string | null>;
  //   titleFilter: FormControl<string | null>;
  // }>;

  public authors = ['Joshua', 'YoutubeGuy123', 'Pewdiepie'];

  constructor(private fb: FormBuilder) {
    this.statFiltersData = fb.group({
      author: ['Joshua', Validators.required],
      titleFilter: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  applyFilters(): void {
    console.log('applyFilters', this.statFiltersData.value);
  }

  logTheForm(): void {
    console.log('form: ', this.statFiltersData);
  }

  clearDropdown() {
    this.statFiltersData.controls['author'].setValue('');
  }
}
