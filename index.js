
const Discord = require("discord.js");
const { Client, Attachment } = require('discord.js');
const client = new Client();
const config = require("./config.json");
const { prefix, token, giphyToken, version } = require('./config.json');

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(giphyToken)

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
  // client.user.setUsername("Gargamel");
  // client.user.setActivity(`Wondering why Fortnite is so bad...`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', message => {
  // console.log(message.member.displayName + ": " + message.content);

    // If the message is '!rip'
    if (message.content === '!rip') {
        message.delete().catch(O_o=>{});
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});

// To welcome new members:
// client.on('guildMemberAdd', member => {
//   // Send the message to a designated channel on a server:
//   const channel = member.guild.channels.find(ch => ch.name === 'general');
//   // Do nothing if the channel wasn't found on this server
//   if (!channel) return;
//   // Send the message, mentioning the member
//   channel.send(`Welcome to the server, ${member}`);
// });

client.on("message", async message => {
  if(message.author.bot) return;
  // if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  var forbidenWords = ["poop"]

  if ((message.member.displayName === "Jango Fett") || (message.member.displayName === "NP_Swifty") || message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
    if (command === "sp"){
      let member = message.mentions.members.first();
        message.channel.send(member.displayName + " has been marked as spamming! Be careful, this can result in a mute, a kick, or even a ban!")
    }
  }

  if (message.content.toLowerCase().includes(`fortnite`)){
    var dummy = Math.floor(Math.random() * 4) + 1;
    if (dummy == 1){
      message.channel.send("Epic ruined their game with the last update... :angry:");
    }
    if (dummy == 2){
      message.channel.send("They need to add back shields for kills!");
    }
    if (dummy == 3){
      message.channel.send("Fortnite is broken..");
    }
    if (dummy == 4){
      message.channel.send("\"YoUr ShOtGuN dId TeN dAmAgE\"");
    }
  }

  if (command === "about"){
    message.channel.send("Hi there! I am a bot that seeks to fulfill every requirement for a Lego(specifically the RB) Discord server!");
  }

  if ((message.member.displayName === "Jango Fett") || (message.member.displayName === "NP_Swifty")){
    if (command === "ru"){
      message.delete().catch(O_o => {});
      message.channel.send("```\nRank up! I have earned a new feature, the Magic Eight Ball! Use !m8b Question to ask a question!\n```");
    }
  }

  if (command === "m8b"){
    if (!message.content.includes("?")){
      console.log("No question!");
      message.channel.send("You need to ask a question!");
      return;
    }
    var dummy = Math.floor(Math.random() * 20) + 1;
    if (dummy == 1){
      message.channel.send("```CSS\nIt is certain\n```");
    }
    if (dummy == 2){
      message.channel.send("```CSS\nIt is decidedly so\n```");
    }
    if (dummy == 3){
      message.channel.send("```CSS\nWithout a doubt\n```");
    }
    if (dummy == 4){
      message.channel.send("```CSS\nYes - definitely\n```");
    }
    if (dummy == 5){
      message.channel.send("```CSS\nYou may rely on it\n```");
    }
    if (dummy == 6){
      message.channel.send("```CSS\nAs I see it, yes\n```");
    }
    if (dummy == 7){
      message.channel.send("```CSS\nMost likely\n```");
    }
    if (dummy == 8){
      message.channel.send("```CSS\nOutlook good\n```");
    }
    if (dummy == 9){
      message.channel.send("```CSS\nYes\n```");
    }
    if (dummy == 10){
      message.channel.send("```CSS\nSigns point to yes\n```");
    }
    if (dummy == 11){
      message.channel.send("```HTTP\nReply hazy, try again\n```");
    }
    if (dummy == 12){
      message.channel.send("```HTTP\nAsk again later\n```");
    }
    if (dummy == 13){
      message.channel.send("```HTTP\nBetter not tell you now\n```");
    }
    if (dummy == 14){
      message.channel.send("```HTTP\nCannot predict now\n```");
    }
    if (dummy == 15){
      message.channel.send("```HTTP\nConcentrate and ask again\n```");
    }
    if (dummy == 16){
      message.channel.send("```ARM\nDon't count on it\n```");
    }
    if (dummy == 17){
      message.channel.send("```ARM\nMy reply is no\n```");
    }
    if (dummy == 18){
      message.channel.send("```ARM\nMy sources say no\n```");
    }
    if (dummy == 19){
      message.channel.send("```ARM\nOutlook not so good\n```");
    }
    if (dummy == 20){
      message.channel.send("```ARM\nVery doubtful\n```");
    }
  }

  // if ((message.member.displayName === "Jango Fett")){
  //   if (command === "changename"){
  //     let newName = args[0];
  //     client.user.setUsername(newName);
  //       .then(user => console.log(`My new username is ${user.username}`))
  //       .catch(console.error);
  //   }
  // }

  for (var i = 0; i < args.length; i++) {
    if (message.content.includes(forbidenWords[i])) {
      message.delete().catch(O_o => {});
      message.channel.send(`${message.member.displayName} has been muted for saying a bad word!`);
      // message.member.setNickname('I say bad words :(')
      // .then(console.log)
      // .catch(console.error);
      // message.member.setMute(true, `Muted ${message.member.displayName} for saying a no-no word..`)
      // .then(() => console.log(`Muted ${message.member.displayName}`))
      // .catch(console.error);
      message.member.setRoles('Muted');
    }
  }

  if (message.content == 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      embed.setTitle('A slick little embed')
      // Set the color of the embed
      embed.setColor(0xFF0000)
      // Set the main content of the embed
      embed.setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }

  // To kick people:
  // if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
  //   if (command === "kick"){
  //     let member = message.mentions.members.first();
  //     member.kick().then((member) => {
  //       giphy.search('gifs', {"q": "fail"})
  //         .then((response) => {
  //           console.log(response);
  //           var totalResponses = response.data.length;
  //           console.log("Total number: " + totalResponses);
  //           var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
  //           var responseFinal = response.data[responseIndex]

  //           message.channel.send(":wave: " + member.displayName + " has been kicked!", {
  //             files: [responseFinal.images.fixed_height.url]
  //           })
  //         })
  //     })
  //   }
  // }

  // To mute people:
  // if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
  //   if (command === "mute"){
  //     let member = message.mentions.members.first();
  //     member.mute().then((member) => {
  //       giphy.search('gifs', {"q": "silence"})
  //         .then((response) => {
  //           console.log(response);
  //           var totalResponses = response.data.length;
  //           console.log("Total number: " + totalResponses);
  //           var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
  //           var responseFinal = response.data[responseIndex]

  //           message.channel.send(":sad: " + member.displayName + " has been silenced!", {
  //             files: [responseFinal.images.fixed_height.url]
  //           })
  //         })
  //     })
  //   }
  // }

  if (command === "sad"){
    const sayMessage = args.join(" ");
    giphy.search('gifs', {"q": "sad"})
      .then((response) => {
        var totalResponses = response.data.length;
        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
        var responseFinal = response.data[responseIndex]

        message.channel.send({ files: [responseFinal.images.fixed_height.url] })
        message.channel.send("**Plays world's smallest violin**");
      })
  }

  if (command === "rand"){
    var input = (args.join(" "));
    var counter = 0;
    var nums = [1, 2];
    for (var i = 0; i < input.length; i++) {
      if (input[i] == ' '){
        continue;
      }
      else{
        nums[counter++] = Number(input[i]);
      }
    }
    // console.log("NUMS[0]: " + nums[0]);
    // console.log("NUMS[1]: " + nums[1]);
    var randomNumber = Math.floor(Math.random()*(nums[1])+nums[0]);//Math.floor(Math.random() * nums[1]) + nums[0];
                       // Math.floor(Math.random()*(nums[1]-nums[0]+1)+nums[0]);
    message.channel.send("Random number is: " + randomNumber);
  }

  if (command === "cl"){
    message.member.send("Here is the changelog for version " + config.version);
    message.member.sendFile("./changelog.txt");
    message.reply("I sent you a DM with the info! :grin:");
  }

  if (command === "cat"){
    const sayMessage = args.join(" ");
    giphy.search('gifs', {"q": "cat lick butt"})
      .then((response) => {
        var totalResponses = response.data.length;
        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
        var responseFinal = response.data[responseIndex]

        message.channel.send({ files: [responseFinal.images.fixed_height.url] })
        message.channel.send("The cat has ignored you");
      })
  }

  if (message.content.toLowerCase() == "hello"){
    var dummy = Math.floor(Math.random() * 3) + 1;
    if (dummy == 1){
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("It's me.."), 2000)
      });

      let result = await promise;
      message.channel.send(result);

      let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("I've been wondering if after all these years you'd like to meet..."), 2000)
      });

      let result2 = await promise2;
      message.channel.send(result2);

      let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("To go oooover, **every**thing"), 2000)
      });

      let result3 = await promise3;
      message.channel.send(result3);
      giphy.search('gifs', {"q": "adele"})
      .then((response) => {
        var totalResponses = response.data.length;
        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
        var responseFinal = response.data[responseIndex]

        message.channel.send({ files: [responseFinal.images.fixed_height.url] })
      })
    }
    if (dummy == 2){
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("From the other**siiiide**"), 2000)
      });

      let result = await promise;
      message.channel.send(result);

      let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("I must have called a thousand **tiiiiimes**"), 2000)
      });

      let result2 = await promise2;
      message.channel.send(result2);

      let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("To tell you, I'm sorry"), 2000)
      });

      let result3 = await promise3;
      message.channel.send(result3);
      giphy.search('gifs', {"q": "adele"})
      .then((response) => {
        var totalResponses = response.data.length;
        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
        var responseFinal = response.data[responseIndex]

        message.channel.send({ files: [responseFinal.images.fixed_height.url] })
      })
    }
    if (dummy == 3){
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Darkness my old friend"), 2000)
      });

      let result = await promise;
      message.channel.send(result);

      let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("I've come to talk with you again"), 2000)
      });

      let result2 = await promise2;
      message.channel.send(result2);

      let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Because a vision _soft-ly_ creep_ing_"), 2000)
      });

      let result3 = await promise3;
      message.channel.send(result3);
    }
  }

  if (command === "dog"){
    const sayMessage = args.join(" ");
    giphy.search('gifs', {"q": "dog"})
      .then((response) => {
        var totalResponses = response.data.length;
        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
        var responseFinal = response.data[responseIndex]

        message.channel.send({ files: [responseFinal.images.fixed_height.url] })

        var dummy = Math.floor(Math.random() * 5 + 1);
        if (dummy == 1){
          message.channel.send("bork");
        }
        if (dummy == 2){
          message.channel.send("BARK!");
        }
        if (dummy == 3){
          message.channel.send("**wags**");
        }
        if (dummy == 4){
          message.channel.send("Hello!");
        }
        if (dummy == 5){
          message.channel.send(":relaxed:");
        }
      })
  }

 if(command === "animal") {
    const sayMessage = args.join(" ");
    giphy.search('gifs', {"q": sayMessage})
      .then((response) => {
        var totalResponses = response.data.length;
        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
        var responseFinal = response.data[responseIndex]

        message.channel.send({ files: [responseFinal.images.fixed_height.url] })
      })
  }

  if (command === "pi"){
    var dummy = Math.random() * 100 + 1;
    if (dummy == 50){
      message.channel.send("_Engineer's Pi: 3_");
    }else{
      message.channel.send(Math.PI);
    }
  }

  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if (command === "test"){
    message.channel.send("I'm here!");
  }

  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }

  if (command === "findset"){
    const sayMessage = args.join(" ");
    const url = `https://www.bricklink.com/v2/catalog/catalogitem.page?S=` + sayMessage + `-1#T=P`;
    const imgurl = `https://img.bricklink.com/ItemImage/SN/0/` + sayMessage + `-1.png`;
    const attachment = new Attachment(imgurl);

    message.channel.send("Your set number is: " + sayMessage); 
    message.channel.send("The URL is: " + url);
    message.channel.send(attachment);
  }

  if (message.content.toLowerCase() == `hello there`){
    message.channel.send("General Kenobi...")
  }

  // if (message.content.toLowerCase() == `hey siri, flip a coin`){
  //   var dummy = Math.floor(Math.rand() * 2) + 1;
  //   if (dummy == 1) {message.channel.send("It's heads") }
  //   if (dummy == 2) {message.channel.send("It's tails") }
  // }

  if (command === "paypal"){
    const sayMessage = args.join(" ");
    if (sayMessage.length == 0){
      message.channel.send("You need to enter a transaction total!");
      return;
    }
    // if (typeof(sayMessage) != "number"){
    //   message.channel.send("You need to enter a number!");
    //   return;
    // }
    const total = sayMessage;
    const fee = Math.floor((sayMessage * .029 + .3) * 100) / 100;
    const newTotal = sayMessage - fee;
    message.channel.send("To charge $" + total + ", you will have a fee of $" + fee + ", and therefore recieve a total of $" + newTotal);
    message.channel.send("_Note: This is for transactions in the US_");
  }
});

client.login(process.env.BOT_TOKEN);



// const Discord = require('discord.js');
// const { prefix, token, giphyToken } = require('./config.json');
// const client = new Discord.Client();

// var GphApiClient = require('giphy-js-sdk-core')
// giphy = GphApiClient(giphyToken)

// client.once('ready', () => {
//   console.log('Ready!')
// })

// client.on('message', async message => {
//   if (message.author.bot) return;
//   // const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//   // const command = args.shift().toLowerCase();
//   // To kick people:
//   // if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
//   //   if (message.content.startsWith(`${prefix}kick`)){
//   //     let member = message.mentions.members.first();
//   //     member.kick().then((member) => {
//   //       giphy.search('gifs', {"q": "fail"})
//   //         .then((response) => {
//   //           console.log(response);
//   //           var totalResponses = response.data.length;
//   //           console.log("Total number: " + totalResponses);
//   //           var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
//   //           var responseFinal = response.data[responseIndex]

//   //           message.channel.send(":wave: " + member.displayName + " has been kicked!", {
//   //             files: [responseFinal.images.fixed_height.url]
//   //           })
//   //         })
//   //     })
//   //   }
//   // }

//   // console.log(args);
//   // console.log(command);

//   // console.log(message.content);
//   if (message.content.startsWith(`${prefix}ping`)){
//     message.channel.send("PONG!")
//     const m = await message.channel.send("Pong");
//     m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
//   }
//   if (message.content.startsWith(`hello there`)){
//     message.channel.send("General Kenobi...")
//   }
//   if (message.content.startsWith(`${prefix}mention`)){
//     let member = message.mentions.members.first();
//     message.channel.send("Mention: " + member);
//   }
//   // if (command === "Ping?"){
//   //   const m = await message.channel.send("Pong");
//   //   m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
//   // }
//   if (message.content.startsWith(`${prefix}say`)){
//     const sayMessage = args.join(" ");
//     message.delete().catch(O_o=>{});
//     message.channel.send(sayMessage);
//   }
//   if (message.content.startsWith(`${prefix}findset`)){
//     const sayMessage = args.join(" ");
//     // message.delete().catch(O_o=>{});
//     message.channel.send("Your set ID is: " + sayMessage);
//   }
//   // if (message.content.startsWith(`${prefix}findset`)){
//   //   let id = message.content.
//   //   message.channel.send("Your number was: " + );
//   // }
// })

// client.login(token);




