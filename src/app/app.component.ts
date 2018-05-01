import { GitSearchService } from './git-search.service';
import { Component, OnInit } from '@angular/core';
declare var angular: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor (private GitSearchService : GitSearchService) {

  }
  ngOnInit() {

    /*
    this.GitSearchService.gitSearch('angular').then((response) => {
      alert("Total Libraries Found: " + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);
    })

    this.GitSearchService.gitSearch('dan').then( (response) => {
     
      var r = response.items[2]; 

      console.log("User info: " + r.name);
    }, (error) => {
      alert("Error: " + error.statusText);
    }) */


  }

  title = 'app is functional!';

}
