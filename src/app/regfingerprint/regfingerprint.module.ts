import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegfingerprintPageRoutingModule } from './regfingerprint-routing.module';

import { RegfingerprintPage } from './regfingerprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegfingerprintPageRoutingModule
  ],
  declarations: [RegfingerprintPage]
})
export class RegfingerprintPageModule {}
