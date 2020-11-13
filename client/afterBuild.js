const shell = require('shelljs');

const afterBuild = async () => {
  try {
    console.log("afterBuild")
    await shell.exec('sudo bash ./afterBuild.sh');
  } catch (er) {
    console.log(er.message);
    process.exit(1);
  }
}

afterBuild();
