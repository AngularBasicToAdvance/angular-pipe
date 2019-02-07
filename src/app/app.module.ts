import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InbuilPipeComponent } from './inbuil-pipe/inbuil-pipe.component';
import { CustomePipeComponent } from './custome-pipe/custome-pipe.component';
import { CustomPipePipe } from './custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InbuilPipeComponent,
    CustomePipeComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
