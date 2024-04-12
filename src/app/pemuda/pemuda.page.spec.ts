import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PemudaPage } from './pemuda.page';

describe('PemudaPage', () => {
  let component: PemudaPage;
  let fixture: ComponentFixture<PemudaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PemudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
