export class ProjectDto {
  id: number;
  name: string;
  description: string;

  constructor(project: ProjectDto) {
    this.id = project.id;
    this.name = project.name;
    this.description = project.description;
  }
}
