import { NgModule } from '@angular/core';
import { MatToolbar, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [

  ],
  imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule
  ],
  exports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule
  ]
})
export class MaterialModule { }
