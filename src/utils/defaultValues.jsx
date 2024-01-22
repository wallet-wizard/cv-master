/** DEFAULT VALUES for Staging CV:
 * Imports initial values to userData object upon app refresh.
 * It's imported in GlobalContext.jsx where app initialization
 * takes place.
 */

export const stageTitle = (`# Enter Name
## Front End Developer
____
`
);

export const stageSummary = (
    `## Summary

Results-oriented and highly skilled Front-end Developer with [X years] of experience creating and implementing innovative web designs and user experiences. Proficient in HTML, CSS, JavaScript, and modern frameworks. Adept at collaborating with cross-functional teams to drive project success. `
);

export const stageSkills = [
    "1skill", "2skill", "3skill", "4skill", "5skill"

]

export const stageExp = [
    `### Senior Front-end Developer | [Company Name] | [Location] | [Month Year] - Present

- Led the development of [Project Name], resulting in [specific achievements].
- Collaborated with the design team to implement pixel-perfect and responsive user interfaces.
- Implemented performance optimizations, reducing page load times by [percentage].
- Mentored junior developers, conducting code reviews and providing technical guidance.
`]

export const stageEdu = [
    `### Front End Developer Bootcamp - edX | University of Birmongham | 2024`,
    `### E[ducation Type] | [University Name] | [Graduation Year]`,
    `### E[ducation Type] | [University Name] | [Graduation Year]`
]

export const initialStaging = {
    title: stageTitle,
    summary: stageSummary,
    other: '',
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