import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GraphViewComponent} from './graph-view/graph-view.component';
import {SpaceService} from './space.service';
import {QuestionService} from './question.service';
import {RelationService} from './relation.service';
import {D3Service} from 'd3-ng2-service';
import {GraphViewPageComponent} from './graph-view-page/graph-view-page.component';
import {MdButtonModule, MdRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { GraphViewService } from './graph-view/graph-view.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdRadioModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [GraphViewComponent, GraphViewPageComponent],
  exports: [GraphViewPageComponent],
  providers: [SpaceService, QuestionService, RelationService, D3Service, GraphViewService]
})
export class GraphViewModule {
}
