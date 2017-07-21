import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'upload',
    templateUrl: 'upload.component.html',
    styleUrls: ['upload.component.scss']
})
export class UploadComponent {
    @Output() fileLoaded = new EventEmitter();
    constructor() { }

    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        let file: File = inputValue.files[0];
        if (file.type === "text/plain") {
            let reader: FileReader = new FileReader();
            let fileType = inputValue.parentElement.id;
            console.log(fileType);
            reader.readAsText(file);
            reader.onloadend = (e) => {
                try {
                    let dataArray = reader.result.replace(/[^a-zA-Z \n ^0-9 /]/g, "").split("\n");
                    this.fileLoaded.emit(dataArray)
                } catch (ex) {
                    console.log("Ex", ex);
                    alert("This file cannot be processed. Invalid Format");
                }

            };
        } else {
            alert("This file cannot be processed. Invalid Format");
        }
    }
}
