import { Component } from '@angular/core';
import { CommService } from '../../services/comm.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  data: any[] = [];

  constructor(private commService:CommService){}

  ngOnInit():void{
    this.commService.getComments().subscribe((comments:any[''])=>{
      this.data=comments;
    }
  )
  }

}
