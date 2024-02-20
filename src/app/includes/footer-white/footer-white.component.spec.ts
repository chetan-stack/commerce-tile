import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWhiteComponent } from './footer-white.component';

describe('FooterWhiteComponent', () => {
  let component: FooterWhiteComponent;
  let fixture: ComponentFixture<FooterWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWhiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
