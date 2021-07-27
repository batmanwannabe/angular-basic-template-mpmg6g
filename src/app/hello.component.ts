import { Component, Inject } from '@angular/core';
import { LocationStrategy, PlatformLocation } from '@angular/common';
import { Router, UrlSerializer } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'hello',
  template: ``
})
export class HelloComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private serializer: UrlSerializer
  ) {
    const queryParams = { foo: 'a', bar: 42 };
    const tree = router.createUrlTree([], { queryParams });

    console.log(serializer.serialize(tree));

    console.log(this.document.location.href);
  }
}
