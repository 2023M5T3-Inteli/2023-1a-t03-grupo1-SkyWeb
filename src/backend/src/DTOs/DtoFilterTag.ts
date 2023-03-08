import { ArrayNotEmpty, IsNotEmpty, ArrayUnique, ArrayMaxSize } from 'class-validator';

export class DtoFilterTag {
    @IsNotEmpty({ message: 'tag is required' })
    @ArrayNotEmpty({ message: 'Array cannot be empty' })
    @ArrayUnique({ message: 'Cannot repeat tags' })
    @ArrayMaxSize(10)    
    tag: Array<number>; 
   
}