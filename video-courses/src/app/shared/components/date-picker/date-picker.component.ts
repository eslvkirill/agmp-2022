import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent implements ControlValueAccessor {
  readonly datePipe = 'yyyy-MM-dd';

  private onTouched!: () => void;
  private onChanged!: (_: unknown) => void;

  selectedDate: Date | null;

  constructor(private cdr: ChangeDetectorRef) {}

  registerOnChange(fn: () => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: Date): void {
    this.selectedDate = value;
    this.cdr.markForCheck();
  }

  onDateChange(newDate: Date): void {
    this.onTouched();
    this.selectedDate = newDate;
    this.onChanged(newDate);
  }
}
