import { ProductsService } from './products.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BeersComponent } from './beers/beers.component';
import { WhiskeyComponent } from './whiskey/whiskey.component';
import { CidersComponent } from './ciders/ciders.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OtherComponent } from './other/other.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeersComponent,
    WhiskeyComponent,
    CidersComponent,
    NavComponent,
    OtherComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'whiskeys', component: WhiskeyComponent },
      { path: 'beers', component: BeersComponent },
      { path: 'ciders', component: CidersComponent },
      { path: 'snacks', component: OtherComponent },
    ])
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
