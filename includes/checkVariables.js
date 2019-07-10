exports.get = (msg, name, ...args) => {
        if (name == `lang`) {
            switch(true){
                case msg.db.exist(`member.${msg.author.id}.lang`):
                    if (fs.existsSync(`${__dirname}/../langs/${msg.db.get(`member.${msg.author.id}.lang`)}.js`)) if (require(`${__dirname}/../langs/${msg.db.get(`member.${msg.author.id}.lang`)}.js`).enabled) return msg.db.get(`member.${msg.author.id}.lang`)
                case typeof msg.guild !== `undefined`:
                    if (msg.db.exist(`guild.${msg.guild.id}.lang`)) if (fs.existsSync(`${__dirname}/../langs/${msg.db.get(`guild.${msg.guild.id}.lang`)}.js`))if (require(`${__dirname}/../langs/${msg.db.get(`member.${msg.author.id}.lang`)}.js`).enabled) return msg.db.get(`guild.${msg.guild.id}.lang`)
                default: return msg.config.default.lang
            }
        }
        else{
            switch(true){
                case msg.db.exist(`member.${msg.author.id}.lang`):
                    return msg.db.get(`member.${msg.author.id}.lang`)
                case msg.db.exist(`guild.${msg.guild.id}.lang`):
                    return msg.db.get(`guild.${msg.guild.id}.lang`)
                default: return msg.config.default[`${name}`]
            }
        }
}
