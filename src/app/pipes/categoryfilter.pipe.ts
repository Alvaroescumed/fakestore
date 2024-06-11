import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
    name: 'categoryFilter'
})

// Creamos una pipe para que nos filtre los productos por categorias
export class categoryFilterPipe implements PipeTransform {

    transform(products: Product[], category: string) : Product[] {

        if (!products || !category){
            return products;
        }
        return products.filter(product => product.category === category)
        
    }
}