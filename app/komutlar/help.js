const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» mustafa 16#6658 müzik Komutları')
.setTimestamp()
.addField('» +Çal- Müzik Açar', '+play')
.addField('» +Devam- Şarkıya Devam Eder', '+resum ')
.addField('» +Duraklat- Şarkıyı Durdurur', '+stop')
.addField('» +Kapat- Şarkıyı Kapatır', '  +disconnect')
.addField('» +Geç- Şarkıyı Geçersiniz', '+skip')
.setFooter('mustafa 16#6658 yapmıştır ', client.user.avatarURL) 
.addField('» +afk kalırsınız', '+afk') 
.addField('» +etiketlenen kişi banlanır ', '+ban')
.addField('» +sunucu kurar', '+sunucukur')
.addField('» +log kanalı yapar ', '+mod-log #kanal')
.addField('» +botun ping i ni gösterir ', '+ping')
.addField('» +mesajları siler ', '+sil 100')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
return message.channel.send(embed)

};


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','mz'], 
  permLevel: 0 
};

exports.help = {
  name: 'help',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};