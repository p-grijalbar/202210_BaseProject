import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
    declarations: [
        PlantListComponent
    ],
    exports: [
        PlantListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class PlantModule { }
