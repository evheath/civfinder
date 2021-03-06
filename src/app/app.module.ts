import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";

import { CivTableComponent } from './components/civ-table/civ-table.component';
import { MatSortModule } from '@angular/material/sort';
import { CivCellComponent } from './components/civ-cell/civ-cell.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { TechChipAreaComponent } from './components/tech-chip-area/tech-chip-area.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { TechGraphComponent } from './components/tech-graph/tech-graph.component';
import { TechColorPipe } from './pipes/tech-color.pipe';
import { FooterComponent } from './components/footer/footer.component'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    CivTableComponent,
    CivCellComponent,
    TechChipAreaComponent,
    TechGraphComponent,
    TechColorPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
    MatGridListModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGraphModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub);
  }
}
