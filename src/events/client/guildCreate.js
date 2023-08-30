//Cuando el bot es agregado a un server, ejecuta este comando
const mongoose = require('mongoose');
const Guild = require('../../schemas/guild');
const Log = require('../../schemas/log');

module.exports = {
	name: 'guildCreate',
	async execute(guild) {
    //Agregamos la Guild a la DB
    let guildProfile = await Guild.findOne({
      guildId: guild.id,
    });
    if (!guildProfile) {
      guildProfile = await new Guild({
        _id: mongoose.Types.ObjectId(),
        guildId: guild.id,
        guildName: guild.name,
        guildIcon: (guild.iconURL() || "None.")
      });

      await guildProfile.save();
    }

    logMessage = await new Log({
      _id: mongoose.Types.ObjectId(),
      message: `SuguBot ha sido agregado a un nuevo server: ${guild.id}`,
    });
    await logMessage.save();
    
    const channel = guild.channels.cache.filter(c => c.type === 0).find(x => x.rawPosition === 0);
    console.log(channel);

    setTimeout(function(){
      console.log("Enviando mensaje...");
      channel.send('Hello world');
    }, 500);
	}
}