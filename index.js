const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config();
const client = new Client({
    checkUpdate: false,
    readyStatus: false,
    autoReconnect: true
});

const VOICE_CONFIG = {
    guild_id: '',
    channel_id: '',
    self_mute: false,
    self_deaf: true
};

client.once('ready', async () => {
    console.log('User Ready:', client.user.tag);
    
    setTimeout(() => {
        joinVoiceChannel();
    }, 5000);
});

function joinVoiceChannel() {
    const guild = client.guilds.cache.get(VOICE_CONFIG.guild_id);
    if (!guild) return;

    const channel = guild.channels.cache.get(VOICE_CONFIG.channel_id);
    if (!channel) return;

    const voicePayload = {
        op: 4,
        d: {
            guild_id: VOICE_CONFIG.guild_id,
            channel_id: VOICE_CONFIG.channel_id,
            self_mute: VOICE_CONFIG.self_mute,
            self_deaf: VOICE_CONFIG.self_deaf
        }
    };

    guild.shard.send(voicePayload);
    console.log(`Joined: ${channel.name} in ${guild.name}`);
}

client.on('voiceStateUpdate', (oldState, newState) => {
    if (newState.member?.user.id === client.user.id) {
        if (oldState.channel && !newState.channel) {
            setTimeout(() => {
                joinVoiceChannel();
            }, 100);
        }
    }
});

client.on('disconnect', () => {
    setTimeout(() => {
        joinVoiceChannel();
    }, 100);
});

process.on('SIGINT', () => {
    client.destroy();
    process.exit(0);
});

process.on('SIGTERM', () => {
    client.destroy();
    process.exit(0);
});

client.login(process.env.TOKEN);
