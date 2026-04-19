📄 .env File Setup Guide

Follow these steps to configure your environment variables properly:

---

🛠️ Step 1: Create the ".env" file

In your project root directory, create a new file named:

.env

---

✏️ Step 2: Add your configuration

Open the ".env" file and insert the following:

TOKEN=
GUILD_ID=
CHANNEL_ID=
MUTE=false
DEAF=true

---

🔑 Step 3: Fill in your values

- TOKEN → Your Discord account token
- GUILD_ID → The server ID you want to join
- CHANNEL_ID → The voice channel ID
- MUTE → Set to "true" or "false"
- DEAF → Set to "true" or "false"

---

⚠️ Important Notes

- Do NOT share your ".env" file with anyone
- Add ".env" to your ".gitignore" to keep it private
- Restart your app after editing the file

---

✅ Example

TOKEN=your_token_here
GUILD_ID=123456789012345678
CHANNEL_ID=987654321098765432
MUTE=false
DEAF=true

---

You're now ready to run your project 🚀
