import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  private readonly url_api = 'https://mocki.io/v1/36cf1fc9-eb20-4df2-ac4b-a0bf49eceaf9';

  public arr: any;

  public input_btn = 0;
  public delete_btn = 0;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url_api).subscribe(data=>{
      this.arr = data;
    })
  }

  public shuffle(array: any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  public addNumber(){
    if (this.input_btn != null){
      this.arr.push(this.input_btn);
    }

    this.arr = [...this.arr]
  }

  public deleteNumber(){
    // Guard input is null
    if (this.input_btn == null)
      return

    var indx = this.arr.indexOf(this.delete_btn);

    // Guard number is not on array
    if (indx == -1)
      return

    this.arr.splice(indx, 1);
    this.arr = [...this.arr]
  }

  public sortArray(){
    var temp_arr: number[] = this.arr;
    this.arr = temp_arr.sort((n1,n2) => n1 - n2);

    this.arr = [...this.arr]
  }

  public suffleArray(){
    this.arr = this.shuffle(this.arr)

    this.arr = [...this.arr]
  }
}
