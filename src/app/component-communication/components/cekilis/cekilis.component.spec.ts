import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CekilisComponent } from './cekilis.component';

describe('CekilisComponent', () => {
  let component: CekilisComponent;
  let fixture: ComponentFixture<CekilisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekilisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekilisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
