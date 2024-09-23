import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NameService } from './Services/name.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test';
  name: string = '';
  greet: string = '';
  imageUrl: string = '';

  constructor(private nameService:NameService){}

  onSubmit(){
    this.nameService.getName(this.name).subscribe({
      next:(result)=>{this.greet = result},
      error:(error)=>{console.error('Error ', error);
      }
    });
  }

  onGet(){
    this.nameService.getImage().subscribe({
      next:(result)=>{this.imageUrl = result; console.log(result);
      },
      error:(error)=>{console.error("Error :", error);
      }
    });
  }
}
