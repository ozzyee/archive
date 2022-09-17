import * as functions from "firebase-functions";
import blogSections from "./routes/blog.entry.routes";
import aboutSectionRouts from "./routes/about.section.routes";
import skillsSectionRouts from "./routes/skills.section.routes";
import usersRotes from "./routes/skills.section.routes";
import projectsSectionRouts from "./routes/projects.section.routes";

exports.about_section = functions.https.onRequest(aboutSectionRouts);
exports.skills_section = functions.https.onRequest(skillsSectionRouts);
exports.projects_section = functions.https.onRequest(projectsSectionRouts);
exports.blog_section = functions.https.onRequest(blogSections);

exports.users = functions.https.onRequest(usersRotes);
