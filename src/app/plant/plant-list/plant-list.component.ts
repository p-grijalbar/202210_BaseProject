import { Component, OnInit } from '@angular/core';
import {Plant} from "../plant";
import {PlantService} from "../plant.service";

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants : Array<Plant> = new Array<Plant>();

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
    });
  }

  countPlantsByType(type: string): number {
    return this.plants.filter(p => p.tipo === type).length
  }

}
