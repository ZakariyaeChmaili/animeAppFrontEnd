import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  imports: [
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,


  ],
  exports: [
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,


  ]
})
export class AngularMaterialModule { }
