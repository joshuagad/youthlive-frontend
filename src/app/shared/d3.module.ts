import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphComponent } from './graph/graph.component';
import { NodeVisualComponent } from './shared/node-visual.component';
import { LinkVisualComponent } from './shared/link-visual.component';

import { D3Service } from './d3.service';
import { ZoomableDirective } from './zoomable.directive';
import { DraggableDirective } from './draggable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    ZoomableDirective,
    DraggableDirective
  ],
  exports: [
    GraphComponent,
    LinkVisualComponent
  ],
  providers: [
    D3Service
  ]
})
export class D3Module { }
