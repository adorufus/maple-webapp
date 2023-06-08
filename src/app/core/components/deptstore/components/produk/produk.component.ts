import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.scss']
})
export class ProdukComponent {

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/detail'])
  }
}
