import {PeopleDTO} from "../../../domain/dtos/People.dto"

export default class GetPeopleById {
  peopleService: any
  constructor (peopleService: any) {
    this.peopleService = peopleService
  }

  async execute(peopleId: string): Promise<PeopleDTO> {  
    const people = await this.peopleService.getPeopleById(peopleId);
    const peopleDTO = new PeopleDTO(people)
    return peopleDTO;
  }
}
