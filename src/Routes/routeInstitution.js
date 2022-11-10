import {
	postInstitution,
	getInstitutions,
	getInstitutionById,
	putInstitution,
	deleteInstitutionById,
	updateLogoInstitution,
	putCredentialsInstitution
} from "../Controllers/InstitutionController.js";
import { uploadFile } from "../Middlewares/multerMiddlewares.js";
import {
	postInstitutionMidd,
	idInstitutionMidd,
} from "../Middlewares/institutionMiddlewares.js";

const upload = uploadFile();

import { Router } from "express";

const routesInstitution = Router();

routesInstitution.patch(
	"/institution/logo",
	upload.single("logo"),
	updateLogoInstitution
);

routesInstitution.post("/institution", postInstitutionMidd, upload.single("logo"), postInstitution);

routesInstitution.get("/institution", getInstitutions);

routesInstitution.get(
	"/institution/:id",
	idInstitutionMidd,
	getInstitutionById
);

routesInstitution.put("/institution/:id", idInstitutionMidd, putInstitution);

routesInstitution.put("/institution/credentials/:id", idInstitutionMidd, putCredentialsInstitution);

routesInstitution.delete(
	"/institution/:id",
	idInstitutionMidd,
	deleteInstitutionById
);

export default routesInstitution;
