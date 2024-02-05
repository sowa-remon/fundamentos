import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  
  //propiedad que guarda los datos (posts)
  data: any[] = [];

  //const5ructor
  constructor(private dataService:DataService){}
  
  //método ONINIT
  ngOnInit(): void {
    this.dataService.getPosts().subscribe((posts:any[''])=>{
      this.data = posts;
    })
  }
}
