/** DEFAULT VALUES for Staging CV:
 * Imports initial values to userData object upon app refresh.
 * It's imported in GlobalContext.jsx where app initialization
 * takes place.
 */

export const stageTitle = (`# Enter Name
### Front End Developer

📧 Email: john.doe@example.com | 🌐 Portfolio: [john-doe.dev](https://www.john-doe.dev) | 📱 LinkedIn: [linkedin.com/in/johndoe](https://www.linkedin.com/in/johndoe) | 📞 Phone: (555) 123-4567

____`
);

export const stageSummary = (
    `## Summary

Enthusiastic and motivated Junior Front End Developer with a passion for creating dynamic and responsive web applications. Recently graduated from a rigorous coding bootcamp, equipped with solid foundations in HTML, CSS, JavaScript, and modern frameworks like React. A quick learner who is eager to contribute to innovative projects and collaborate with like-minded professionals.

____`
);

export const stageSkills = [
  `- **Languages:** HTML, CSS, JavaScript`,
  `- **Frameworks/Libraries:** React, Vite`,
  `- **Responsive Design:** Bootstrap, ....`,
  "____"
]

export const stageExp = [
    `### Senior Front-end Developer | [Company Name] | [Location] | [Month Year] - Present

- Led the development of [Project Name], resulting in [specific achievements].
- Collaborated with the design team to implement pixel-perfect and responsive user interfaces.
- Implemented performance optimizations, reducing page load times by [percentage].
- Mentored junior developers, conducting code reviews and providing technical guidance.
`,
"____"
]

export const stageEdu = [

    `### Coding Bootcamp Graduate
**Tech Academy Bootcamp**
*City, State*
*Month Year - Month Year*
    
- Completed an intensive full-stack development bootcamp.

- Developed proficiency in HTML5, CSS3, JavaScript, React, and other modern web technologies.

 - Worked on real-world projects and participated in team-based coding challenges.
 `,
 "____"
]

export const stageOther = (
` ## Projects

### Portfolio Website
- Designed and developed a personal portfolio website to showcase projects and skills.
- Implemented responsive design for optimal viewing on various devices.
- Technologies used: HTML5, CSS3, JavaScript.


## Github Repositories
- [GitHub Profile](https://github.com/johndoe)
  - Repositories showcasing personal and collaborative projects.


## References
Dan Mueller (duh!)
`
)


export const initialStaging = {
    title: stageTitle,
    summary: stageSummary,
    other: stageOther,
    skills: {
      header: '## Skills',
      skills: stageSkills
    },
    experience: {
      header: '## Work Experience',
      experience: stageExp
    },
    education: {
      header: '## Education',
      education: stageEdu
    },
  }