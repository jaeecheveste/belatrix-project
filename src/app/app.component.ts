import { DeptoModel, ProvinciaModel, DistritoModel } from './../models/belatrix-models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = 'app';
  private deptos: Array<DeptoModel>;
  private provincias: Array<ProvinciaModel>;
  private distritos: Array<DistritoModel>;

  constructor() {
    this.deptos = new Array<DeptoModel>();
    this.provincias = new Array<ProvinciaModel>();
    this.distritos = new Array<DistritoModel>();

  }

  proccessData(data) {
    data.forEach(element => {
      let itemArray = element.split("/");
      let deptoItem;
      let provinciaItem;
      if (element !== "") {
        if (itemArray[0].trim() !== "") deptoItem = this.addDeptoItem(itemArray[0]);
        if (itemArray[1].trim() !== "") provinciaItem = this.addProvinciaItem(itemArray[1], deptoItem);
        if (itemArray[2].trim() !== "") this.addDistritoItem(itemArray[2], provinciaItem);
      }
    });
  }

  addDeptoItem(itemArray) {
    let item: DeptoModel = new DeptoModel();
    item = this.loadModel(item, itemArray);
    if (!this.checkIfExists(this.deptos, item.codigo)) this.deptos.push(item);
    return item;
  }

  addProvinciaItem(itemArray, parent: DeptoModel) {
    let item: ProvinciaModel = new ProvinciaModel();
    item = this.loadModel(item, itemArray);
    item.depto = parent;
    if (!this.checkIfExists(this.provincias, item.codigo)) this.provincias.push(item);
    return item;
  }

  addDistritoItem(itemArray, parent: ProvinciaModel) {
    let item: DistritoModel = new DistritoModel();
    item = this.loadModel(item, itemArray);
    item.provincia = parent;
    if (!this.checkIfExists(this.distritos, item.codigo)) this.distritos.push(item);
  }

  checkIfExists(array, codigo: number) {
    let isElement: boolean = false;
    array.forEach(element => {
      if (element.codigo === codigo) {
        isElement = true;
      }
    });
    return isElement;
  }

  loadModel(item, itemArray) {
    let index = itemArray.trim().indexOf(" ");
    item.codigo = itemArray.trim().substr(0, index)
    item.nombre = itemArray.trim().substr(index + 1, itemArray.length)
    return item;
  }

}
