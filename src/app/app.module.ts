import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommentsComponent } from './comments/comments.component';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { FormsModule } from '@angular/forms';
import { PostOperationsComponent } from './post-operations/post-operations.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './app-state/reducers/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginComponent,
    NavbarComponent,
    CommentsComponent,
    UpperCasePipe,
    CapitalizeFirstPipe,
    PostOperationsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
