import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GraphViewComponent} from './graph-view/graph-view.component';
import {D3Service} from 'd3-ng2-service';
import {GraphViewPageComponent} from './graph-view-page/graph-view-page.component';
import {MdButtonModule, MdDialogModule, MdProgressSpinnerModule, MdRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {GraphViewService} from './graph-view/graph-view.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';
import {RelationPickerDialogComponent} from './relation-picker-dialog/relation-picker-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdRadioModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [GraphViewComponent, GraphViewPageComponent, RelationPickerDialogComponent],
  bootstrap: [RelationPickerDialogComponent],
  exports: [GraphViewPageComponent],
  providers: [D3Service, GraphViewService]
})
export class GraphViewModule {
}
