import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SelectedItem } from './shared/model/selectedItem';
import { DashboardService } from './service/dashboard.service';
import { exists } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // need to fix passing empty object passing
  selectedItem = [];
  treeData: any;
  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.dashboardService.getTreeInfo().subscribe(data => {
      this.treeData = data;
    });
  }

  updateNode(data) {
    this.dashboardService.updateTreeInfo(data, this.selectedItem['value']).subscribe(data => {
      this.treeData = data;
    });
  }

  addNode(data) {
    this.dashboardService.addTreeInfo(data, this.selectedItem['value']).subscribe(data => {
      this.treeData = data;
    });
  }

  deleteNode(data) { 
    this.dashboardService.deleteTreeInfo(this.selectedItem['value']).subscribe(data => {
      this.treeData = data;
    });
  }

  onSelectedNode(item) {
    this.selectedItem = item;
    // console.log(item);
  }
  
}
