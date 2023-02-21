import { ModelDelete } from '../models/modelDelete';
export class ServicesDeleteProject {
    constructor(private modelDelete: ModelDelete) {}

    execute() {
        this.modelDelete.deleteProject();
    }
}
