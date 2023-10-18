import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  quizCategories: any[] = [];
  constructor(private http: HttpClient) { }
  playerName: string = '';

  getQuizCategories() {
    console.log('test');
    this.http.get('http://localhost:3000/Categories').subscribe((categories: any) => {
      for (const categorie of categories) {
        console.log(categorie);
        this.quizCategories.push({
            id: categorie.id,
            categorieNom: categorie.nom,
        });
      }
    });
  }

  // getCatQuestions() {
  //   this.http.get('http://localhost:3000/categories').subscribe((questions: any) => {
  //     for (const question of questions) {
  //       this.http.get(`http://localhost:3000/questions?categoriesId=${.id}`).subscribe((answers: any) => {
  //         this.quizContent.push({
  //             id: question.id,
  //             question: question.questionLabel,
  //             answers
  //         });
  //       });
  //     }
  //   });
  // }

  resetQuiz() {
    this.quizCategories = [];
  }
}
