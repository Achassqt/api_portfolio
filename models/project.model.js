class Project {
  constructor(name, description, stack, logo_url, github_url, site_live_url) {
    (this.name = name),
      (this.description = description),
      (this.stack = stack),
      (this.logo_url = logo_url),
      (this.github_url = github_url),
      (this.site_live_url = site_live_url);
  }
}

Project.getAll = (connection, result) => {
  let query = "SELECT * FROM project";

  connection.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("project: ", res);
    result(null, res);
  });
};

module.exports = Project;
