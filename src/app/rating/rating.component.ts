import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  rating = 0;

  private _stars: unknown[] = Array(0);
  get stars() {
    return this._stars;
  }

  @Input() set maxRating(value: number) {
    this._stars = Array(value);
  }

  private _hoveredIndex = -1;

  onChange: (rating: number) => void = () => {};

  onTouched: () => void = () => {};

  isDisabled = false;

  constructor() {}

  writeValue(rating: number) {
    this.rating = rating - 1;
    this.onChange(this.rating);
  }

  registerOnChange(fn: (rating: number) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  enter(index: number) {
    if (this.isDisabled) {
      return;
    }

    this._hoveredIndex = index;
  }

  leave() {
    this._hoveredIndex = -1;
  }

  select(index: number) {
    if (this.isDisabled) {
      return;
    }

    this.rating = index;
    this.onChange(this.rating + 1);

    this._hoveredIndex = -1;
  }

  getStarClass(index: number) {
    if (index <= this._hoveredIndex) {
      return {
        active: true,
        hovered: true,
      };
    }

    if (index <= this.rating && this._hoveredIndex === -1) {
      return {
        active: true,
      };
    }

    return {};
  }

  isHovered(index: number) {
    return this._hoveredIndex === index;
  }

  ngOnInit(): void {}
}
