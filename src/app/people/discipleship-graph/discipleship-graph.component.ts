import { Component, OnInit } from '@angular/core';
import { Node, Link } from '../../shared/d3.model';

@Component({
  selector: 'app-discipleship-graph',
  templateUrl: './discipleship-graph.component.html',
  styleUrls: ['./discipleship-graph.component.css']
})
export class DiscipleshipGraphComponent implements OnInit {

  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {

      /** constructing the nodes array */


      // for (let i = 1; i <= N; i++) {
      //   for (let m = 2; i * m <= N; m++) {
      //     /** increasing connections toll on connecting nodes */
      //     //this.nodes[getIndex(i)].linkCount++;
      //     //this.nodes[getIndex(i * m)].linkCount++;
      //
      //     /** connecting the nodes before starting the simulation */
      //     this.links.push(new Link(i, i * m));
      //   }
      // }
  }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= 10; i++) {
      for (let m = 2; i * m <= 10; m++) {
        /** increasing connections toll on connecting nodes */
        //this.nodes[getIndex(i)].linkCount++;
        //this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

}
