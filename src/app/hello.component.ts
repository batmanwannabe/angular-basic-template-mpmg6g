import { Component } from '@angular/core';
import { LocationStrategy, PlatformLocation } from '@angular/common';
import { Router, UrlSerializer } from '@angular/router';

@Component({
  selector: 'hello',
  template: `
  `,
})
export class HelloComponent {
  constructor(private router: Router, private serializer: UrlSerializer) {
    const queryParams = { foo: 'a', bar: 42 };
    const tree = router.createUrlTree([], { queryParams });

    console.log(serializer.serialize(tree));
  }
}
