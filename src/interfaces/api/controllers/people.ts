import { Request, Response } from "express";
import { peopleService } from "../../../infrastructure/database/service";
import SavePeople from "../../../application/people/commands/savePeople";
import GetPeopleById from "../../../application/people/queries/getPeopleById";
import GetAllPeople from "../../../application/people/queries/getAllPeople";
import DeletePeopleById from "../../../application/people/commands/deletePeopleById";
import { StarWarsAPI } from "../../../infrastructure/StarWarsAPI/";

export const getPeopleById = async (req: Request, res: Response) => {
  try {
    const { peopleId } = req.params;
    const getPeople = new GetPeopleById(peopleService);
    const peopleGot = await getPeople.execute(peopleId);
    if (peopleGot) {
      const response = peopleGot;
      res.json(response);
    } else {
      res
        .status(404)
        .json({ error: 'Could not find people with provided "peopleId"' });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ error: "Could not retreive people" });
  }
};

export const savePeople = async (req: Request, res: Response) => {
  const { peopleId } = req.body;
  if (typeof peopleId !== "string") {
    res.status(400).json({ error: '"peopleId" must be a string' });
  }

  try {
    const starWarsAPI = new StarWarsAPI();
    const savePeople = new SavePeople(peopleService, starWarsAPI);
    const peopleSaved = await savePeople.execute({ peopleId });
    res.json(peopleSaved);
  } catch (error: any) {
    console.log("savePeople error:", error.message);
    res.status(500).json({ error: error });
  }
};

export const getAllPeople = async (req: Request, res: Response) => {
  try {
    const getPeople = new GetAllPeople(peopleService);
    const peopleGot = await getPeople.execute();
    if (peopleGot) {
      res.json(peopleGot);
    } else {
      res
        .status(404)
        .json({ error: 'Could not find people with provided "peopleId"' });
    }
  } catch (error: any) {
    res.status(500).json({ error: "Could not retreive people" });
  }
};

export const deletePeopleById = async (req: Request, res: Response) => {
  try {
    const { peopleId } = req.params;
    const deletePeople = new DeletePeopleById(peopleService);
    const peopleGot = await deletePeople.execute(peopleId);
    if (peopleGot) {
      const response = peopleGot;
      res.json(response);
    } else {
      res
        .status(404)
        .json({ error: 'Could not find people with provided "peopleId"' });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ error: "Could not retreive people" });
  }
};
