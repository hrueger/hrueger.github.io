import { Component, OnInit } from '@angular/core';
import { projects, Project } from 'src/app/_data/projects';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  public projects: any = projects;
  constructor() {
  }

  ngOnInit(): void {
    
  }

  hasFaIcon(project: Project) {
    return project.icon.indexOf('.') === -1;
  }

}
