import { getMetasByIdInstitution } from "../../Repositories/MetaRepository.js";

export async function listMetasByIdInstitution(){
    try {
        const metas = await getMetasByIdInstitution();
        return metas;
    } catch (e) {
        console.log(e);
        throw new Error("Não foi possível buscar as metas.");
    }
}