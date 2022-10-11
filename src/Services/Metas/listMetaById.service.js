import { getMetaById } from "../../Repositories/MetaRepository.js";

export async function listMetaById(id) {
    try {
        const meta = await getMetaById(id);
        return meta;
    } catch (e) {
        console.log(e);
        throw new Error("Não foi possível buscar a meta.");
    }
}
