import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEProject';

  constructor(private httpClient: HttpClient){};
  SERVER_URL = "http://localhost:5000/ner";

  result:any;
  OnSubmit()
  {
  this.httpClient.get<any>(this.SERVER_URL).subscribe(
    (res) => 
    {
      console.log(res);
      console.log("here");
      this.result=res;
    },
    (err) => console.log(err)
  );
  }

}
