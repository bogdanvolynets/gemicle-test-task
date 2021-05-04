import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(users: any[], value: any) {
        return users.filter((user: { name: any; }) => {
            return user.name.first.toLowerCase().includes(value.toLowerCase()) 
            || user.name.last.toLowerCase().includes(value.toLowerCase())
        })
    }
}