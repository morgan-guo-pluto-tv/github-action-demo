import shell from 'shelljs';

const main = () => {
    shell.cd(process.env.BASE_PATH);
    console.log(shell.ls().toString());
};

main();