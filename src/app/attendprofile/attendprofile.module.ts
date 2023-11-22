import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendprofilePageRoutingModule } from './attendprofile-routing.module';

import { AttendprofilePage } from './attendprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendprofilePageRoutingModule
  ],
  declarations: [AttendprofilePage]
})
export class AttendprofilePageModule {}
