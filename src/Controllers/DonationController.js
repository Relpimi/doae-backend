import { createDonationService } from "../Services/Donations/createDonation.service.js";
import { deleteDonationService } from "../Services/Donations/deleteDonation.service.js";
import { listDonationsService } from "../Services/Donations/listDonations.service.js";
import { listDonationByIdService } from "../Services/Donations/listDonationById.service.js";
import { listDonationsByIdInstitutionService } from "../Services/Donations/listDonationsByIdInstitution.service.js";
import { listDonationsByIdTargetService } from "../Services/Donations/listDonationsByIdTarget.service.js";
import { updateStatusDonationService } from "../Services/Donations/updateDonation.service.js";
import { getIdByIdExternal } from "../Services/Auth/getIdByIdExternal.service.js";
import { listStatusDonationsByIdInstitutionService } from "../Services/Donations/listStatusDonationByIdInstitution.service.js";

export async function postDonation(request, response) {
	const {
		id_institution,
		value,
		email_giver,
		id_target,
		id_product
	} = request.body;
	try {
		const id = await getIdByIdExternal(id_institution);
		const donation = await createDonationService(
			id,
			value,
			email_giver,
			id_target,
			id_product
		);
		response.status(200).json(donation);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getDonations(request, response) {
	const { page } = request.query;
	try {
		const donations = await listDonationsService(page);
		response.status(200).json(donations);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getStatusDonationsByIdInstitution(request, response) {
	const { page } = request.query;
	const { id_institution } = request.params;
	const { status } = request.body;
	try {
		const id = await getIdByIdExternal(id_institution);
		const donations = await listStatusDonationsByIdInstitutionService(id, status, page);
		response.status(200).json(donations);
	} catch (e) {
		response.status(400).json(e.message);
	}
}


export async function getDonationById(request, response) {
	const { id } = request.params;
	try {
		const donation = await listDonationByIdService(id);
		response.status(200).json(donation);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getDonationsByIdInstitution(request, response) {
	const { id_institution } = request.params;
	try {
		const id = await getIdByIdExternal(id_institution);
		const donations = await listDonationsByIdInstitutionService(id);
		response.status(200).json(donations);
	} catch (e) {
		response.status(400).json(e.message);
	}
}
export async function getDonationsByIdTarget(request, response) {
	const { id_target } = request.params;
	try {
		const donations = await listDonationsByIdTargetService(id_target);
		response.status(200).json(donations);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putDonation(request, response) {
	const { id } = request.params;
	const { status, email_giver } = request.body;
	try {
		const donation = await updateStatusDonationService(id, status, email_giver);
		response.status(200).json(donation);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function deleteDonation(request, response) {
	const { id } = request.params;
	try {
		const donation = await deleteDonationService(id);
		response.status(200).json(donation);
	} catch (e) {
		response.status(400).json(e.message);
	}
}