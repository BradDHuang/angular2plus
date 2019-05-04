import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any) {
        if (value.length > 13) {
            return value.substring(0, 13) + ' ...';
        }
        return value;
    }
}
