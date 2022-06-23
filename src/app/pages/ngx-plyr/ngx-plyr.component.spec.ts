import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPlyrComponent } from './ngx-plyr.component';

describe('NgxPlyrComponent', () => {
  let component: NgxPlyrComponent;
  let fixture: ComponentFixture<NgxPlyrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPlyrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPlyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
