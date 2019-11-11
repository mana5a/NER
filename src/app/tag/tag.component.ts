import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() text:any;
  constructor(private httpClient: HttpClient){};
  SERVER_URL = "http://localhost:5000/choice";

  result:any;
  filter()
  {
      this.httpClient.get<any>("http://localhost:5000/fetch?clicked="+this.text).subscribe((data) =>
      {
        // console.log("PICKED"+this.text);
        // console.log(res);
        // console.log("sent");
        this.result=data;
        console.log(this.result);
      },
      //(err) => console.log(err);
      );
   }

  ngOnInit() {
  }

}
