const numOfDev = Date().year - 2000;

export default [
  {
    name: "Dev",
    englishName: "Dev",
    nickName: "dev",
    email: "dev@gmail.com",
    address: "Atlanta, GA",
    phone: "0123-456789",
    links: {
      website: "https://dev.surge.sh",
      github: "https://github.com/dev",
      projectGithub: "https://github.com/dev/myblog",
      linkedIn: "https://linkedin.com/dev",
      twitter: "https://twitter.com/dev"
    },
    pictures: {
      profilePicture: "",
      profilePictureGithub: "",
      profilePictureTwitter: ""
    },
    text: {
      summaryShort: 'Jack of all trades, master of "some"',
      summary: `
    <p>Web developer with more than <strong>${numOfDev}years</strong> of well-rounded experience with a degree in the
      field of
      <strong>Computer Science</strong>, extensive knowledge of modern Web techniques and love for <strong>Coffee</strong>.
      Looking for an opportunity to work and upgrade, as well as being involved in an organization that
      believes
      in gaining a competitive edge and giving back to the community.</p>
    `
    }
  }
];
