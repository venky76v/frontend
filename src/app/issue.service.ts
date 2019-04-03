import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  baseUrl = environment.baseUri;

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(this.baseUrl + 'issue');
  }

  getIssueById(title) {
    return this.http.get(this.baseUrl + 'issue/' + title);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };

    return this.http.post(`${this.baseUrl}/issue/`, issue);
  }
}
