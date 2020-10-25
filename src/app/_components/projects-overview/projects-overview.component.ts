import { Component, OnInit } from '@angular/core';
import { projects, Project } from 'src/app/_data/projects';

@Component({
    selector: 'app-projects-overview',
    templateUrl: './projects-overview.component.html',
    styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
    public projects: any = [];

    ngOnInit(): void {
        this.projects = projects.sort(this.dynamicSortMultiple('category',
            ['status', ['released', 'development', 'deprecated', 'noTime']]));
    }

    hasFaIcon(project: Project) {
        return project.icon.indexOf('.') === -1;
    }

    private dynamicSortMultiple(...properties: (string | [string, string[]])[]) {
        /*
         * save the arguments object as it will be overwritten
         * note that arguments object is an array-like object
         * consisting of the names of the properties to sort by
         */
        return (obj1, obj2) => {
            let i = 0;
            let result = 0;
            const numberOfProperties = properties.length;
            /* try getting a different result from 0 (equal)
             * as long as we have extra properties to compare
             */
            while (result === 0 && i < numberOfProperties) {
                result = this.dynamicSort(properties[i])(obj1, obj2);
                i++;
            }
            return result;
        };
    }

    private dynamicSort(property: string | [string, string[]]) {
        return (a, b) => {
            /* next line works with strings and numbers,
             * and you may want to customize it to your needs
             */
            if (typeof property === 'string') {
                return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            } else {
                const prop = property[0];
                const list = property[1];
                return (list.indexOf(a[prop]) < list.indexOf(b[prop])) ? -1 : (list.indexOf(a[prop]) > list.indexOf(b[prop])) ? 1 : 0;
            }
        };
    }
}
