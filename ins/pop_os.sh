sudo apt update
sudo apt install nodejs npm
sudo mkdir -p /usr/lib/mobiusdrv/sdk
# Install MobiusDRV
sudo curl -o /usr/lib/mobiusdrv/package.json https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/src/package.json
sudo curl -o /usr/lib/mobiusdrv/driver.js https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/src/package.json
sudo curl -o /usr/lib/mobiusdrv/index.json https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/src/package.json
# Install mobius-node-sdk
sudo curl -o /usr/lib/mobiusdrv/sdk/package.json https://github.com/mobiuspr/node-sdk/raw/refs/heads/main/package.json
sudo curl -o /usr/lib/mobiusdrv/sdk/src/index.js https://github.com/mobiuspr/node-sdk/raw/refs/heads/main/src/index.js
sudo curl -o /usr/lib/mobiusdrv/sdk/src/aes.js https://github.com/mobiuspr/node-sdk/raw/refs/heads/main/src/aes.js
sudo curl -o /usr/lib/mobiusdrv/sdk/src/fetch.js https://github.com/mobiuspr/node-sdk/raw/refs/heads/main/src/fetch.js
sudo curl -o /usr/lib/mobiusdrv/sdk/src/jsbn.js https://github.com/mobiuspr/node-sdk/raw/refs/heads/main/src/jsbn.js
sudo curl -o /usr/lib/mobiusdrv/sdk/src/jsencrypt.js https://github.com/mobiuspr/node-sdk/raw/refs/heads/main/src/jsencrypt.js
sudo curl -o /usr/lib/mobiusdrv/sdk/src/util.js https://github.com/mobiuspr/node-sdk/raw/refs/heads/main/src/util.js
# Install the cups backend
sudo curl -o /usr/lib/cups/backend/mobius https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/mobius-bin.js
sudo systemctl restart cups