export class Alumno {
  id: number;
  name: string;
  curso: string;

  constructor(
    name?: string,
    curso?: string) {
      this.name = name;
      this.curso = curso;
    }
}
