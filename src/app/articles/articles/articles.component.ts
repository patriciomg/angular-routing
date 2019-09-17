import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    article = {
        id: 100,
        title: 'How to make router & navigation in Angular 8',
        author: 'Didin J.',
        description: 'A complete tutorial about creating router and navigation in the Angular 8 Web Application'
    };

    gotoDetails(articleId: any) {
        this.router.navigate(['/article/', articleId]);
    }

}
