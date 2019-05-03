import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
// value seria palabra y args la lista de amigos
 public transform(value, args: string) {
   // si value no trae nada
   if (!value) {
    return;
   }
   // si no traemos argumentos regresa tal cual llego el arreglo
   if (!args) {
    return value;
   }
   args = args.toLowerCase();

        // si pasa objeto dejs lo convierteen texto paracompararlos yregressa solo los que tengan la palabra que esta buscando
  // tslint:disable-next-line: align
  return value.filter(item => {
    return JSON.stringify(item).toLowerCase().includes(args);
  });

  }
}
