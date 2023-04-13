import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfhashComponent } from './bfhash.component';

describe('BfhashComponent', () => {
  let component: BfhashComponent;
  let fixture: ComponentFixture<BfhashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfhashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfhashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
