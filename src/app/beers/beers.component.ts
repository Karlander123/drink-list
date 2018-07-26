import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beers: any;
  filteredBeers: any;
  select_country: any[] = [];
  select_type: any[] = [];

  /// filter-able properties
  title: string;
  country: string;
  type: string;

  /// Active filter rules
  filters = {}

  constructor(private productService: ProductsService) {

   }

   private applyFilters() {
    this.filteredBeers = _.filter(this.beers, _.conforms(this.filters) )
  }

  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }

    /// filter  numbers greater than rule
    filterName(property: string, rule: any) {
      this.filters[property] = val => val.toLowerCase() == rule.toLowerCase()
      this.applyFilters()
      if(rule == "") {
        this.removeFilter(property);
      }
    }

  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }

  ngOnInit() {
    this.productService.getBeers().valueChanges().subscribe(p => {
      this.beers = p;
      this.beers.forEach(beer => {
        if (this.select_country.indexOf(beer.country) === -1) this.select_country.push(beer.country);
        if (this.select_type.indexOf(beer.type) === -1) this.select_type.push(beer.type);
      });
      this.filteredBeers = this.beers;
    });
   
  }

}
