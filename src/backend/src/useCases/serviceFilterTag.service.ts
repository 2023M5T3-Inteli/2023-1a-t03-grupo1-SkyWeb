import { ModelSelect } from '../models/modelSelect';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { elementAt } from 'rxjs';

@Injectable()
export class ServiceFilterTag {
    constructor(private modelSelect: ModelSelect) { }

    async execute(tag: Array<number>) {

        const allTags = await this.modelSelect.getAllTags()
       
        let array
        array = allTags.map(function (obj) {
            return obj.id
        });
            
        let validate = tag.every(item => array.includes(item))
            if (!validate) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'Não existe tags com esses nomes',
                    },
                    HttpStatus.NOT_FOUND,
                );
            }
        
        const result = await this.modelSelect.filterTag(
            tag
        );
        return result;
    }

}
