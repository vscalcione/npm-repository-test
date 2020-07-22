import { NgModule } from '@angular/core';
import { FbLibraryComponent } from './fb-library.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [FbLibraryComponent, CardComponent],
  imports: [
  ],
  exports: [FbLibraryComponent, CardComponent]
})
export class FbLibraryModule { }
