import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { FaceSnapG1Component } from './face-snap-g1/face-snap-g1.component';
// import { YyyComponent } from './yyy/yyy.component';

const routes: Routes = [
  
  { path: 'facesnapsG1', component: FaceSnapG1Component },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
