import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit 
{
  SERVER_URL_SEARCH = "http://localhost:5000/get_tags";
  key='';
  opArray = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  search(event): any
  {
    this.key = event.target.value
    if(this.key.length)
    {
      this.httpClient.get<any>(this.SERVER_URL_SEARCH, {params: {key: this.key}}).subscribe(
        (res) =>
        {
          this.opArray = res;
        },
        (err) => console.log(err)
      );
    }
    else
    {
      this.opArray=[];
    }
  }

  isArrayLength()
  {
    console.log(this.opArray)
    if(this.opArray.length)
    {
      return true;

    }
          else
      return false;
  }
}
