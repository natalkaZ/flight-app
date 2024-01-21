import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Luggage, LuggageService } from '@demo/luggage/data';

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit{
  luggageService = inject(LuggageService);
  luggage: Luggage[] = [];


  ngOnInit(): void {
    this.luggageService.load().subscribe(luggage => {
      this.luggage = luggage;
    })
  }
}
