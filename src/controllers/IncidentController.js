const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;
    const id = crypto.randomBytes(4).toString("HEX");

    const result = await connection("ongs")
      .select("*")
      .where("id", ong_id)
      .first();
    if (result == null) {
      return response.status(404).json({ error: "ONG does not exists" });
    }

    await connection("incidents").insert({
      id,
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  },

  async getAll(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("incidents").count("*");

    console.log(count);
    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .select(
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      )
      .limit(5)
      .offset((page - 1) * 5);

    response.header("X-Total-Count", count["count(*)"]);
    return response.json(incidents);
  },

  async delete(request, response) {
    const { id } = request.body;
    const ong_id = request.headers.authorization;

    console.log(`Delete function. id = ${id}, ong_id = ${ong_id}`);

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: "Unauthorized." });
    }

    await connection("incidents")
      .where("id", id)
      .delete();
    return response.status(204).send(); //204 - Success: no content
  }
};
