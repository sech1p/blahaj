import { exec } from "node:child_process";

const checkIfCommandExists = (command: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const cmd = process.platform === "win32" ? `where ${command}` : `which ${command}`;

    exec(command, (exception, stdout, stderr) => {
      if (exception) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

export default checkIfCommandExists;