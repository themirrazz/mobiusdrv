# MobiusDRV
MobiusDRV is an open-source CUPS backend for MobilityPrint print servers, written entirely in Node.JS. MobiusDRV handles zero-conf discovery, as well as authentication. It uses the [Mobius Node.JS SDK](https://github.com/mobiuspr/node-sdk), another project I made.

## The story
So, my school has separate networks. They have the guest network, and the staff network, and the student network. Pretty typical. The student network was only ever intended for the school-managed Chromebooks, but [inevitably](https://www.cisa.gov/secure-our-world/use-strong-passwords), the password did get leaked. Of course, the filters were more aggressive on the student network, making it basically unusable, as even *Google* was blocked. Of course, the school Chromebooks use a browser extension for monitoring, and they didn't want personal devices to use the network, so it makes sense they turned up the filters to 100.

But while it wasn't good for general internet,there was something on the student network that the guest network *didn't have:* The MobilityPrint print server. You're probably thinking, "but doesn't MobilityPrint also expose itself as IPP and IPPS and use standards like mDNS, Bonjour/Avahi and DNS-SD for discovery?" Yes, it does! But... for whatever reason, mDNS seems to be hilariously broken on my school's Wi-Fi, and I literally couldn't get *any* device from mDNS. Plus, at the time, I didn't really know that MobilityPrint actually was just a proprietary wrapper around open standards.

So, I installed the Chrome extension and reverse-engineered it. That's how I made [mobius-node-sdk](https://github.com/mobiuspr/node-sdk), an entire MobilityPrint client written entirely in Node.JS. And PaperCut - *I'm impressed.* When I looked at your code, it was actually more efficient, actually more secure, and much more complete than some [other](https://www.securly.com/) [extensions](https://www.hapara.com/) that my school used. Respect.

Anyways, I then started reading up on [CUPS filter and backend programming](https://www.cups.org/doc/api-filter.html), and viola, I have the first version of MobiusDRV already.

MobiusDRV only supports MP servers with username-password auth, but I do hope to expand it in the future, possibly even using Electron as a bridge to bring support for **Google OAuth.** I also want to add support for authenticationless printers, which is actually pretty likely to happen. But for now, just enjoy the zero-conf printing [while it lasts](https://forum.endeavouros.com/t/cups-will-drop-driver-support/7543).

## System Requirements
* A device running Linux, macOS, or BSD
* The Common UNIX Printing System (CUPS)
* An x86, x64, or ARM-based CPU
* Node.JS v22 or newer

## Installation
Find your distro and follow the instructions to install MobiusDRV

### Arch Linux
```bash
curl -L https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/ins/arch.sh | sh
```

### Arch Linux (AUR)
*Coming soon!*

### Bazzite
*Coming soon!*
### CachyOS
```bash
curl -L https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/ins/cachyos.sh | sh
```

### Crostini
```bash
curl -L https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/ins/crostini.sh | sh
```

### Damn Small Linux
*Coming soon!*

### Debian
*Coming soon!*

### EndeavourOS
*Coming soon!*

### Fedora
```bash
curl -L https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/ins/fedora.sh | sh
```

### FreeBSD
*Coming soon!*

### Gentoo
```bash
curl -L https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/ins/gentoo.sh | sh
```

### Kali Linux
*Coming soon!*

### KDE Neon
*Coming soon!*

### Kubuntu
*Coming soon!*

### Linux Mint
```bash
curl -L https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/ins/mint.sh | sh
```

### Manjaro Linux
*Coming soon!*

### openSUSE
*Coming soon!*

### Pop!_OS
```bash
curl -L https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/ins/pop_os.sh | sh
```

### Raspberry Pi OS
*Coming soon!*

### Red Hat Enterprise Linux
```bash
curl -L https://github.com/themirrazz/mobiusdrv/raw/refs/heads/main/ins/rhel.sh | sh
```

### SteamOS
*Coming soon!*

### Zorin OS
*Coming soon!*