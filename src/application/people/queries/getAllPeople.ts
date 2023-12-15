// import { v4 } from "uuid";
import { PeopleDTO } from "../../../domain/dtos/People.dto";

export default class GetAllPeople {
  peopleService: any;
  constructor(peopleService: any) {
    this.peopleService = peopleService;
  }

  async execute(): Promise<PeopleDTO[]> {
    const people = await this.peopleService.getAllPeople();
    return people;
  }
}
