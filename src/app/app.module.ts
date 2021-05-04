import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from './users.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserCardComponent,
    UserProfileComponent,
    ErrorComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UserCardComponent },
      { path: 'user/:userId', component: UserProfileComponent },
      { path: '**', component: ErrorComponent }
    ])
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }