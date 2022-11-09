import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {}

  ngOnInit(): void {
    console.log('onInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges: ', changes);
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('afterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }
}
