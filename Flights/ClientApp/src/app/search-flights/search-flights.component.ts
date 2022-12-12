import { Component } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})

 
export class SearchFlightsComponent
{
  //we are adding an array of strings here to display the airlines
  searchResult: any = [

    "American Airlines",
    "Jet Blue",
    "Delta"

    ]
}
