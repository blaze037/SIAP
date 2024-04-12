import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlahragaPage } from './olahraga.page';

describe('OlahragaPage', () => {
  let component: OlahragaPage;
  let fixture: ComponentFixture<OlahragaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlahragaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
