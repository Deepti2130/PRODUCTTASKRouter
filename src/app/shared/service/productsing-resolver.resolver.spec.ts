import { TestBed } from '@angular/core/testing';

import { ProductsingResolverResolver } from './productsing-resolver.resolver';

describe('ProductsingResolverResolver', () => {
  let resolver: ProductsingResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsingResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
