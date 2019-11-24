import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TagComponent } from './tag/tag.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { KeyupDirective } from './keyup.directive';

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    SearchComponent,
    KeyupDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
