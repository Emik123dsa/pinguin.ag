import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { RoadmapsPageComponent } from './containers/roadmap-page/roadmap-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    data: {
      title: 'Dashboard',
      depth: 1,
      animation: 'DashboardLayout',
      roles: [],
    },

    children: [
      {
        path: 'roadmaps',
        component: RoadmapsPageComponent,
        data: {
          title: 'Roadmaps',
          depth: 2,
          animation: 'DashboardRoadmapsPage',
        },
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'roadmaps',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureDashboardRoutingModule {}
