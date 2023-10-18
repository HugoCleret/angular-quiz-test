import { Component ,OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

import { CategoriesService } from 'src/app/shared/services/categories.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  playerName = '';
  isPlayerNameConfirmed = false;

  quizCategories : any[] = this.CategoriesService.quizCategories;
  constructor(private router: Router, private authService: AuthService, private CategoriesService: CategoriesService) { }

  ngOnInit(): void {
    console.log('Test2')
    this.CategoriesService.getQuizCategories();
    this.authService.isUserConnected();
    this.playerName = this.authService.user?.username || '';
  }

  navigateToQuiz(contentId: number) {
    this.router.navigate(['/quiz', contentId]);
  }
}
