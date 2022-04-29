import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';



@NgModule({
    declarations: [
        PlantListComponent
    ],
    exports: [
        PlantListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PlantModule { }
