import {ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import faker from '@faker-js/faker';
import {By} from '@angular/platform-browser';

import {PlantListComponent} from './plant-list.component';
import {DebugElement} from "@angular/core";
import {Plant} from "../plant";


describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantListComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    const plants: Array<Plant> = new Array<Plant>();

    for (let i = 0; i < 3; i++) {
      plants.push(new Plant(
        i + 1,
        faker.name.findName(),
        faker.name.findName(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.lorem.words(),
        faker.lorem.text()
      ))
    }

    component.plants = plants;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has 4 number of rows table', () => {
    fixture.detectChanges();
    const rowDebugElements = debug.queryAll(By.css('table tr'));
    expect(rowDebugElements.length).toBe(4);
  });
});
