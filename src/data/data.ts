import All from "@/data/_all.json";
import { Package } from "@/lib/winget";

const browsers = [
  "Opera.Opera",
  "Opera.OperaGX",
  "Mozilla.Firefox",
  "LibreWolf.LibreWolf",
  "Google.Chrome",
  "VivaldiTechnologies.Vivaldi",
  "Microsoft.Edge",
  "Brave.Brave",
  "Hibbiki.Chromium",
  "TorProject.TorBrowser",
];

const gaming = [
  "EpicGames.EpicGamesLauncher",
  "PrismLauncher.PrismLauncher",
  "Valve.Steam",
  "Playnite.Playnite",
  "Ubisoft.Connect",
  "Mojang.MinecraftLauncher",
  "Overwolf.CurseForge",
  "pizzaboxer.Bloxstrap",
  "DolphinEmulator.Dolphin",
  "Parsec.Parsec",
];

const media = [
  "VideoLAN.VLC",
  "OpenMedia.4KVideoDownloader",
  "HandBrake.HandBrake",
  "LIGHTNINGUK.ImgBurn",
  "Spotify.Spotify",
  "Spicetify.Spicetify",
];

const runtimes = [
  "Python.Python.3.11",
  "Python.Python.3.10",
  "Python.Python.3.12",
  "OpenJS.NodeJS",
  "OpenJS.NodeJS.LTS",
  "Canonical.Ubuntu.2204",
  "Debian.Debian",
];

const social = [
  "Discord.Discord",
  "WhatsApp.WhatsApp",
  "Telegram.TelegramDesktop",
  "Guilded.Guilded",
];

const developing = [
  "Microsoft.VisualStudioCode",
  "Notepad++.Notepad++",
  "SublimeHQ.SublimeText.4",
  "Git.Git",
  "JackieLiu.NotepadsApp",
];

const design = [
  "BlenderFoundation.Blender",
  "KDE.Krita",
  "dotPDNLLC.paintdotnet",
  "GIMP.GIMP",
  "Inkscape.Inkscape",
];

const file_utilities = [
  "M2Team.NanaZip",
  "RARLab.WinRAR",
  "Giorgiotani.Peazip",
  "voidtools.Everything",
  "AntibodySoftware.WizTree",
  "AdrienAllard.FileConverter",
];

const utilities = [
  "TheDocumentFoundation.LibreOffice",
  "Mozilla.Thunderbird",
  "evernote.evernote",
  "Google.EarthPro",
  "AppWork.JDownloader",
  "SoftDeluxe.FreeDownloadManager",
  "AnyDeskSoftwareGmbH.AnyDesk",
  "RustDesk.RustDesk",
  "qBittorrent.qBittorrent",
  "Ookla.Speedtest.Desktop",
  "ShareX.ShareX",
  "TeamViewer.TeamViewer",
  "TeamViewer.TeamViewer.Host",
  "RevoUninstaller.RevoUninstaller",
  "Piriform.CCleaner",
  "Microsoft.PCManager",
  "Malwarebytes.Malwarebytes",
  "Cloudflare.Warp",
];

const finalData = {
  browsers,
  gaming,
  media,
  runtimes,
  social,
  developing,
  design,
  file_utilities,
  utilities,
} as const;

export function getCategorizedData() {
  const all = All as Package[];
  const categoryNames: string[] = Object.keys(finalData);
  const categories: { [key: string]: Package[] } = {};

  for (const categoryName of categoryNames) {
    if (!(categoryName in finalData)) continue;

    const category = finalData[categoryName as keyof typeof finalData];
    if (!category) continue;

    const categoryPackages = all.filter((pkg) => category.includes(pkg.Id));
    categories[categoryName] = categoryPackages;
  }

  return categories;
}

export default finalData;
