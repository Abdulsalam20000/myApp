import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendprofilePage } from './attendprofile.page';

const routes: Routes = [
  {
    path: '',
    component: AttendprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendprofilePageRoutingModule {}
