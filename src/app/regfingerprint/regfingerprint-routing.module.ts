import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegfingerprintPage } from './regfingerprint.page';

const routes: Routes = [
  {
    path: '',
    component: RegfingerprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegfingerprintPageRoutingModule {}
