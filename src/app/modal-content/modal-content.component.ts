import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
})

export class ModalContentComponent implements OnInit{
  title = 'Users Form';

  ngOnInit(): void {
  }
}
