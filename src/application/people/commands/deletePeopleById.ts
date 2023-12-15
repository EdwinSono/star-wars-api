import { People } from "../../../domain/entities/People";

export default class DeletePeopleById {
  peopleService: any;
  constructor(peopleService: any) {
    this.peopleService = peopleService;
  }

  async execute(peopleId: String): Promise<string> {
    const peopleDeleted = await this.peopleService.deletePeople(peopleId);
    const response = peopleDeleted
      ? `delete ${peopleId}`
      : `not delete ${peopleId}`;
    return response;
  }
}
