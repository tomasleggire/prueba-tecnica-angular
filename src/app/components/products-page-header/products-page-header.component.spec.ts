import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageHeaderComponent } from './products-page-header.component';

describe('ProductsPageHeaderComponent', () => {
  let component: ProductsPageHeaderComponent;
  let fixture: ComponentFixture<ProductsPageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPageHeaderComponent]
    });
    fixture = TestBed.createComponent(ProductsPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
