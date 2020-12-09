const pool = require('./db')

exports.get_projects = async (req, res) => {
  try {
    const projects = await pool.query('SELECT * FROM project');

    res.json(projects.rows);
  } catch (e) {
    console.log(e);
  }
}

exports.get_projects_page = async (req, res) => {
  try {
    const pageQuery = `SELECT
      project.project_uid, project.title, project.route_name, head_image_path.path_name,
      project.roles, project.languages, project.tools, project.project_summary,
      project_process.process_description, project_process.process_description_2,
      project_scope.scope_description, project_result.result_description,
      project_links.live_link, project_links.github_repo_link
      FROM project
      JOIN head_image_path ON project.head_image_path_uid=head_image_path.head_image_path_uid
      JOIN project_process ON project.project_process_uid = project_process.project_process_uid
      JOIN project_scope ON project.project_scope_uid = project_scope.project_scope_uid
      JOIN project_result ON project.project_result_uid = project_result.project_result_uid
      LEFT JOIN project_links ON project.project_links_uid = project_links.project_links_uid;
`;
    const projectsPageData = await pool.query(pageQuery)
    res.json(projectsPageData.rows);
  } catch (e) {
    console.log(e);
  }
}

/* exports.post_projects = async (req, res) => {
  try {
    const {title, project_description, route_name, project_summary, roles, languages, tools} = req.body;
    const newProject = await pool.query(
      'INSERT INTO project (title, project_description, route_name, project_summary, roles, languages, tools, image_path) VALUES ($1) RETURNING *',
      [title]
    )
  } catch (e) {
    console.log(e);
  }
} */