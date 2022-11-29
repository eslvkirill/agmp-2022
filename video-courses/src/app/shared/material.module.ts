import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  exports: [MatDialogModule, MatButtonModule, MatExpansionModule],
  imports: [MatExpansionModule],
  providers: [],
})
export class MaterialModule {}
