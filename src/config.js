import chalk from 'chalk';
import findUp from 'find-up';

function getConfig(){
  // lookup the tree to find the configuration file
  const configFilePath = findUp.sync('cypress-orchard.json')

  if (!configFilePath) {
    console.log(
      `\nPlease setup the ${chalk.green('cypress-orchard.json')} before using the cypress-orchardcore commands.`,
    )
    process.exit(1)
  }

  return JSON.parse(fs.readFileSync(configFilePath, { encoding: 'utf-8' }).toString());
}

export default getConfig();
