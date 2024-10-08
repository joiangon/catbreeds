import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { GetBreedsEntity } from 'src/app/core';
import { SearchBarConfig } from './search-bar.config';
@Component({
  selector: 'app-search-bar-component',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @ViewChild('searchBar', { static: true }) public searchBar!: IonInput;
  @Input() public placeholder!: string;
  @Input() public data: GetBreedsEntity[] = [];
  @Input() public autofocus = false;
  @Input() public inputMode: string = 'search';
  @Output() public filteredData = new EventEmitter<{
    filterData: GetBreedsEntity[];
    filterText: string;
  }>();

  public results: GetBreedsEntity[] = [...this.data];
  public config = SearchBarConfig;

  public ngOnInit() {
    if (this.autofocus) {
      setTimeout(() => this.searchBar.setFocus(), this.config.FOCUS_TIMEOUT);
    }
  }

  public handleInput(event: any): void {
    let query = event.target.value.toLowerCase();

    query = this.accentRemover(query);
    this.results = this.filterData(query);
    this.filteredData.emit({ filterData: this.results, filterText: query });
  }

  private filterData(query: string): GetBreedsEntity[] {
    const newData: GetBreedsEntity[] = [];

    this.data.forEach((item: GetBreedsEntity) => {
      const isFilter =
        this.filter(item, this.config.FIELD_NAME, query) ||
        this.filter(item, this.config.FIELD_ORIGIN, query);

      if (isFilter) {
        newData.push(item);
      }
    });

    return newData;
  }

  private filter(item: any, key: string, query: string): boolean {
    if (!item[key]) {
      return false;
    }

    let strItem = item[key].toString().toLowerCase();

    strItem = this.accentRemover(strItem);

    return strItem.indexOf(query) !== -1;
  }

  private accentRemover(text: string): string {
    return text
      .normalize(this.config.UNICODE_NORMALIZATION)
      .replace(/[\u0300-\u036f]/g, '');
  }
}
