import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration-control',
  templateUrl: './duration-control.component.html',
  styleUrls: ['./duration-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationControlComponent),
      multi: true,
    },
  ],
})
export class DurationControlComponent implements ControlValueAccessor {
  private onTouched!: () => void;
  private onChanged!: (_: unknown) => void;

  selectedDuration: number;

  constructor(private cdr: ChangeDetectorRef) {}

  registerOnChange(fn: () => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: number): void {
    this.selectedDuration = value;
    this.cdr.markForCheck();
  }

  onDurationChange(newDate: number): void {
    this.onTouched();
    this.selectedDuration = newDate;
    this.onChanged(newDate);
  }
}
