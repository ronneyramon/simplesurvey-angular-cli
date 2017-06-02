import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Http, Response } from "@angular/http";
import {environment} from "./../../../environments/environment";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  data: any;
  surveyJSON:any;

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.http.get(environment.apiUrl + '/surveys/' + params['id']).subscribe((res: Response) => {
        this.data = res.json();
        this.surveyJSON = JSON.parse(this.data.surveyJSON);
      });
    });
  }

  onSurveySaved(survey) {
    console.log(JSON.stringify(survey));
    this.http.put(environment.apiUrl + '/surveys/' + this.data.id, {
      surveyJSON: JSON.stringify(survey)
    }).subscribe(() => {
      alert("Saved!");
    });
  }

}
