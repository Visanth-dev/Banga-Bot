const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '';

bot.on('ready', () =>{
    console.log('Ready to Rock');
    bot.user.setActivity('Apex Legends 2');
})


bot.on('message', message =>{
    if(message.content.includes('best of visanth')){
        message.channel.send('I remeber this match clear as a sunny day, Got 8 kills in skull town wiped a squad off the map near hydro dam and finishing off 2 more from the last squad to secure my highest kills and damage match and a 2k badge to remeber, all this while carrying my squad. GGs for sure.', {files : ['./v1.png']});
    }
    else
    if(message.content.includes('best of vikram')){
        message.channel.send('The time when the Ultimate Gamer joined forces with the Ultimate Legend to carry his fellow legends for an epic top 3 placement. Brilliant use of his dome to revive his teammates quadruple times and his enemies were FUBAR after his ult landed on them. Would love to see that again.', {files : ['./vv1.png']});
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
        message.channel.send('`sniff` `sniff` , So thats what a noob smells like.');
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
        message.channel.send('Blothhundr Gowtham used their tracking and sniping skills to hunt their prey around Sorting factory and Geyser, with the grace of the Allfather this hunt was a success', {files : ['./g1.png']});
    }
    else
    if(message.content.includes('gowtham')){
        message.channel.send('ugh, Can you not name or mention that noob in this server.');
    }
    
})


bot.on('message', message =>{
    if(message.content.includes('stats pistol')){
        message.channel.send('Here is a detailed report on PISTOLS soldier' , {files : ['./Pistols.JPG']});
    }
    if(message.content.includes('stats shotgun')){
        message.channel.send('Here is a detailed report on SHOTGUNS soldier' , {files : ['./Shotguns.JPG']});
    }
    if(message.content.includes('stats ar')){
        message.channel.send('Here is a detailed report on ASSAULT RIFLES soldier' , {files : ['./ARs.JPG']});
    }
    if(message.content.includes('stats smg')){
        message.channel.send('Here is a detailed report on SUB-MACHINE GUNS soldier' , {files : ['./SMGs.JPG']});
    }
    if(message.content.includes('stats sniper')){
        message.channel.send('Here is a detailed report on SNIPERS soldier' , {files : ['./Snipers.png']});
    }
    if(message.content.includes('stats lmg')){
        message.channel.send('Here is a detailed report on LIGHT MACHINE GUNS soldier' , {files : ['./LMGs.JPG']});
    }
    if(message.content.includes('!cmd')){
        message.channel.send({files : ['./cmds.JPG']});
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
        case '!command':
            message.channel.send('Here is a list of code-words to gain intel from me:');
            message.channel.send('# **hi**');
            message.channel.send('# **!drop**');
            message.channel.send('# **ping (name of the soldier)**');
            message.channel.send('eg: ping vikram.');
            message.channel.send('* Descriptive detail of the soldier is given.');
            message.channel.send('# **best of (name of the soldier)**');
            message.channel.send('eg: best of vikram.');    
            message.channel.send('*Displays the best game yet of that particular soldier.');   
            message.channel.send('# **stats (weapon class)**');   
            message.channel.send('eg: stats ar.');
            message.channel.send('* Detailed stats of all the weapons from the specified class is displayed.(pistol,shotgun,smg,ar,sniper,lmg.)');     
            message.channel.send('# **gowtham is a noob**');        
            message.channel.send('# **stinky gowtham**');      
            message.channel.send('** All code-words must be in lower-case letters. **');
        break;        
     }
})

bot.login(process.env.BOT_TOKEN);
