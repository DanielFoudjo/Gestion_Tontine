import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionButton,NgbAccordionBody, NgbAccordionCollapse],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'whatsapp-clone-front';

  private faIconLibrary = inject(faIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
