const connection = require("../database/connection");

module.exports = {
  async getByOngId(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection("incidents")
      .select("*")
      .where("ong_id", ong_id)
      .first();

    return response.json(incidents);
  }
};
