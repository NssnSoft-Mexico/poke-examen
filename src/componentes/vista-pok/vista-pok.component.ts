import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataPokService } from 'src/services/data-pok.service';

@Component({
  selector: 'app-vista-pok',
  templateUrl: './vista-pok.component.html',
  styleUrls: ['./vista-pok.component.scss']
})
export class VistaPokComponent implements OnInit {
  displayedColumns: string[] = ['position', 'image', 'nombre'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  pokemons = [];
  
  constructor(private pokemonService: DataPokService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;
    
    for (let i = 1; i <= 150; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };
          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  //Filtro para el paginador
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

   //Obtiene elemento seleccionado
   getRow(row: any){
    //console.log(row);
    this.router.navigateByUrl(`/pokeDetail/${row.position}`)
  }


}
