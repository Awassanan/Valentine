import * as App from "./love"

let me = new App.Person("I", "in love", "you");
let you = new App.Person("You", "in love", "me");
let feelings = ["hurt", "stress", "crazy", "sad", "bored", "bad temper", "in love", "paranoid", "normal"]

for (const emotion of feelings) {
    me.feeling = emotion

    switch (me.feeling) {
        case "hurt":
            console.log(`Previosly, I'm ${me.feeling} 🤕`)
            you.heal(me);
            console.log(`Now, I'm ${me.feeling} 😊 \n---------\n`)
            break;
        case "stress":
            console.log(`Previosly, I'm ${me.feeling} 🤯`)
            you.relax(me);
            console.log(`Now, I'm ${me.feeling} 😮‍💨 \n---------\n`)
            break;
        case "crazy":
            console.log(`Previosly, I'm ${me.feeling}🤪`)
            you.laugh();
            console.log(`Now, I'm ${me.feeling} 🤪`)
            console.log(`And you're, ${you.feeling} 🤣 \n---------\n`)
            break;
        case "sad":
            console.log(`Previosly, I'm ${me.feeling} 😭`);
            (you.cheer(me)).up();
            console.log(`Now, I'm ${me.feeling} 😉 \n---------\n`)
            break;
        case "bored":
            console.log(`Previosly, I'm ${me.feeling} 😒`)
            you.made(me).happy();
            console.log(`Now, I'm ${me.feeling} 😁 \n---------\n`)
            break;
        case "bad temper":
            console.log(`Previosly, I'm ${me.feeling} 🤬`)
            you.hug(me);
            console.log(`Now, I'm ${me.feeling} 😌\n---------\n`)
            break;
        case "in love":
            console.log(`Previosly, I'm ${me.feeling} 😘`)
            you.feeling = "in love";
            console.log(`Now, I'm very falling ${me.feeling} with ${me.lover} 🥰❤️`)
            console.log(`And you're falling ${you.feeling} with ${you.lover} too 😍❤️\n---------\n`)
            break;
        case "paranoid":
            console.log(`Previosly, I'm ${me.feeling} 😔`)
            you.apologize(me);
            console.log(`Now, I'm ${me.feeling} 😄\n---------\n`)
            break;
        default:
            console.log(`Previosly, I'm ${me.feeling} 😗`)
            you.areBeside(me);
            console.log(`Now, I'm falling ${me.feeling} with ${me.lover} 😚❤️`)
            console.log(`Because you're always beside me 😇❤️ \n---------\n`)
            break;
    }
}