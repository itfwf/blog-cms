import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarHolderComponent } from './shared/side-bar-holder/side-bar-holder.component';
import { HomeComponent } from './home/home.component';
import { ArticleThumbComponent } from './components/article-thumb/article-thumb.component';
import { AuthorThumbComponent } from './components/author-thumb/author-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarHolderComponent,
    HomeComponent,
    ArticleThumbComponent,
    AuthorThumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
