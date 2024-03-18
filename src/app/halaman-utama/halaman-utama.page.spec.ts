import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HalamanUtamaPage } from './halaman-utama.page';

describe('HalamanUtamaPage', () => {
  let component: HalamanUtamaPage;
  let fixture: ComponentFixture<HalamanUtamaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HalamanUtamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
