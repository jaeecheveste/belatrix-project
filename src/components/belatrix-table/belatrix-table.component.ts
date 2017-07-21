import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'belatrix-table',
    templateUrl: 'belatrix-table.component.html',
    styleUrls: ['belatrix-table.component.scss']
})
export class BelatrixTableComponent {
    @Input() dataSet;
    @Input() type;
}
