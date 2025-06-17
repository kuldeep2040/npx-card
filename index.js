

import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import open from "open";
import clear from "clear";


clear();


const label = (icon, text) => chalk.white.bold(icon + "  " + text.padEnd(9));

const data = {
  name: chalk.green.bold("🎯  Kuldeep Singh"),
  tag: chalk.italic("Building cool stuff, one repo at a time."),
  role: chalk.white("🎓  Student") + " | " + chalk.cyan("💻 Developer") + " | " + chalk.magenta("🚀 Tech Enthusiast"),


  web: `${label("🌐", "Instagram")} : ${chalk.cyan("https://www.instagram.com/kuldeep__2040")}`,
  github: `${label("🐙", "GitHub")} : ${chalk.cyan("https://github.com/kuldeep2040")}`,
  linkedin: `${label("🔗", "LinkedIn")} : ${chalk.cyan("https://linkedin.com/in/kuldeep2040")}`,
  email: `${label("📬", "Email")} : ${chalk.cyan("kuldeepksingh3589@gmail.com")}`,
  card: `${label("💡", "Card")} : ${chalk.magenta("npx kuldeep")}`,

  message: chalk.yellowBright(
    `“Passionate about solving real-world problems through code.\nAlways open to collaboration and new ideas.”`
  ),
  signoff: chalk.blueBright("👋 Feel free to reach out — let's build something amazing together!"),
};

// Final output
const output = `
${data.name}
${data.tag}

${data.role}

${data.web}
${data.github}
${data.linkedin}
${data.email}

${data.card}

${data.message}

${data.signoff}
`;

const box = boxen(output, {
  padding: 1,
  margin: { top: 1, bottom: 1, left: 10, right: 10 },
  borderStyle: "round",
  borderColor: "cyan",
  float: "center",        
  title: "💼 Kuldeep's Terminal Card",
  titleAlignment: "center", 
});

console.log(box);


const prompt = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: chalk.yellow("✨ What would you like to do?"),
      choices: [
        {
          name: "📬 Send me an email",
          value: () => {
            open("mailto:kuldeepksingh3589@gmail.com");
            console.log(chalk.green("\nLaunching email client...\n"));
          },
        },
        {
          name: "📄 Download my Resume",
          value: () => {
            open("https://drive.google.com/file/d/16dt2yvkF336HcptGNS6tqQpyXv4sfFTp/view?usp=sharing");
            console.log(chalk.green("\nOpening resume in your browser...\n"));
          },
        },
        {
          name: "📅 Schedule a Meeting",
          value: () => {
            open("https://calendly.com/kuldeepsinghks2040/30min"); // Replace with your Calendly or calendar link
            console.log(chalk.green("\nRedirecting to scheduling page...\n"));
          },
        },
        {
          name: "❌ Exit",
          value: () => {
            console.log(chalk.blue("\nHasta la vista. 🙌\n"));
          },
        },
      ],
    },
  ]);

  answer.action();
};

prompt();
