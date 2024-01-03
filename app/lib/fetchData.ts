import { client } from "../lib/sanity";

const fetchProjects = async () => {
  const query = `*[_type=='project']`;
  const projects = await client.fetch(query);
  return projects;
};

export {fetchProjects};