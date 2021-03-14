import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarHolderComponent } from './shared/side-bar-holder/side-bar-holder.component';
import { HomeComponent } from './home/home.component';
import { ArticleThumbComponent } from './components/article-thumb/article-thumb.component';
import { AuthorThumbComponent } from './components/author-thumb/author-thumb.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleViewerComponent } from './components/article-viewer/article-viewer.component';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from './ngrx/articles.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './ngrx/articles.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarHolderComponent,
    HomeComponent,
    ArticleThumbComponent,
    AuthorThumbComponent,
    ArticleViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      articles: articlesReducer
    }
    ),
    EffectsModule.forRoot([ArticleEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
