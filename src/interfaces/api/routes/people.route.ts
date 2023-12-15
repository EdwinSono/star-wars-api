import { Router } from "express";
import {
  getPeopleById,
  savePeople,
  getAllPeople,
  deletePeopleById,
} from "../controllers/people";
const router = Router();
router.post("/", savePeople);
router.get("/", getAllPeople);
router.get("/:peopleId", getPeopleById);
router.delete("/:peopleId", deletePeopleById);

export default router;
