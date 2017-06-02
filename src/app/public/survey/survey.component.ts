import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as SurveyJS from 'survey-angular';
import { ActivatedRoute, Params } from "@angular/router";
import { environment } from "./../../../environments/environment";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  collector: any;
  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    SurveyJS.defaultBootstrapCss.navigationButton = "btn btn-primary";
    SurveyJS.Survey.cssType = "bootstrap";

    this.route.params.subscribe(
      (params: Params) => {

        this.http.get(environment.apiUrl + '/collectors/' + params['id']).subscribe((res: Response) => {
          this.collector = res.json();

          var surveyJS = new SurveyJS.ReactSurveyModel(JSON.parse(this.collector.survey.surveyJSON));
          surveyJS.onComplete.add(this.storeResponse.bind(this));
          SurveyJS.SurveyNG.render("surveyElement", { model: surveyJS });
        });
      }
    );
  }

  storeResponse(surveyJS) {
    this.http.post(environment.apiUrl + '/collectors/' + this.collector.id + '/responses',
      {
        responseData: JSON.stringify(surveyJS.data)
      }
    ).subscribe(() => {
      console.log('Survey saved.');
    });
  }

}
