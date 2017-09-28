import {SimulationLinkDatum} from 'd3-force';
import {GraphNode} from './graph-node';

export class Edge implements SimulationLinkDatum<GraphNode> {

  public isSelected = false;

  constructor(public id: string,
              public source: string | number | GraphNode,
              public target: string | number | GraphNode) {
  }

  getDistance() {
    return (this.source as GraphNode).radius + (this.target as GraphNode).radius + 10;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.moveTo((this.source as GraphNode).x, (this.source as GraphNode).y);
    context.lineTo((this.target as GraphNode).x, (this.target as GraphNode).y);
    context.lineWidth = this.isSelected ? 3 : 1;
    context.strokeStyle = '#000';
    context.stroke();
  }
}
