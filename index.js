const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '';

bot.on('ready', () =>{
    console.log('Ready to Rock');
})


bot.on('message', message =>{
    if(message.content.includes('best of visanth')){
        message.channel.send('I remeber this match clear as a sunny day, Got 8 kills in skull town wiped a squad off the map near hydro dam and finishing off 2 more from the last squad to secure my highest kills and damage match and a 2k badge to remeber, all this while carrying my squad. GGs for sure.', {files : ['https://drive.google.com/open?id=1KEp-t9liJr9hCH95DdMMYztly11snEZ_']});
    }
    else
    if(message.content.includes('best of vikram')){
        message.channel.send('The time when the Ultimate Gamer joined forces with the Ultimate Legend to carry his fellow legends for an epic top 3 placement. Brilliant use of his dome to revive his teammates quadruple times and his enemies were FUBAR after his ult landed on them. Would love to see that again.', {files : ['./Images/vv1.png']});
    }
    else
    if(message.content.includes('ping visanth')){
        message.channel.send('Pro gamer here level 4, Carrier of noobs, Part time tutor for Aceu, Shroud etc.., and also a clutch master. Holds the current record for both the highest kills and damage in a single game among the Apex Noobs.');
    }
    else 
    if(message.content.includes('ping vikram')){
        message.channel.send('Ultimate Gamer here Max Level,Creator of the Apex Games. Can play any game with his eyes closed.Doesnt unleash his full power as it will make wrecking noobs too easy. Some say he is the manliest man to ever walk the frontier.');
    }
    else
    if(message.content.includes('visanth')){
        message.channel.send('Reminder that the Apex Champion should be treated with respect');
    }
    else 
    if(message.content.includes('vikram')){
        message.channel.send('Did someone mention The Ultimate Gamer?Is he here?I want to be dropped shocked and rocked by him.');
    }
    else
    if(message.content.includes('stinky')){
        message.channel.send('*sniff**sniff* So thats what a noob smells like.');
    }
    else
    if(message.content.includes('gowtham is a noob')){
        message.channel.send('I can 100.00% agree to that.');
    }
    else
    if(message.content.includes('ping gowtham')){
        message.channel.send('Noob here level 3, rushes in without thinking and when it dies, blames it on others.It will not come to your aid as enemy surrounds you as it is busy looting.Its chances of hitting a looting enemy with a wingmana is 0.00%. UAFB.');
    }
    else
    if(message.content.includes('best of gowtham')){
        message.channel.send('Was an adrenaline filled match from start to finish with a never ending wave of 3rd parties in the building of doom in capitol city, but we emerged victorious fighting side by side and Private.Raj became the first Apex Noob to reach the 2k damage milestone. Good job soldier.', {files : ['./Images/g1.png']});
    }
    else
    if(message.content.includes('gowtham')){
        message.channel.send('ugh, Can you not name or mention that noob in this server.');
    }
    
})


bot.on('message', message =>{
   
    let args = message.content.substring(PREFIX.length).split(" ");

        switch(args[0]){
        case 'drop!':
            message.channel.send('Shock...');
            message.channel.send('...and lets ROCK!!!');
        break;
        case 'hi':
            message.channel.send('Lets start ROCKING Soldier!!!');
        break;
        case '!clear':
            if(!args[1]) return message.reply('How many should I erase soldier?')
            message.channel.bulkDelete(args[1]);
        break;
    }
})

bot.login(process.env.BOT_TOKEN);
