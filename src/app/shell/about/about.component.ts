import { Component, Injector, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule],
})
export class AboutComponent implements OnInit {
  @ViewChild('placeholder', {read: ViewContainerRef}) 
  placeholder: ViewContainerRef | undefined;

  injector = inject(Injector);

  async ngOnInit(): Promise<void> {
    const module = await loadRemoteModule('miles', './Miles');
    const comp = module.MilesComponent;

    // *ngComponentOutlet
    if(this.placeholder){
      const ref = this.placeholder.createComponent(comp, {injector: this.injector});

      // const compInstance = ref.instance;
      // ref.setInput('inputPropertyName', newValue) - that also allow to thrigger ngOnChages()
      // while more standart approach like:
      // compInstance.inputPropertyName = newValue - it's just set a property and NOT trigger ngOnChages()
    }
  }
}
