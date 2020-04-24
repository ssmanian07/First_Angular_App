import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LikeComponent {
@Input('isLiked') isLiked: boolean;
@Input('likesCount') likesCount = 0;

onClick(){
  this.isLiked = !this.isLiked;
  this.likesCount += this.isLiked ? 1 : -1;
}
}
