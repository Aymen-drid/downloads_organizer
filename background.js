// Load utility functions
importScripts("utils.js");

const defaultFolders = {
  // Documents
  "pdf": "Documents",
  "doc": "Documents",
  "docx": "Documents",
  "xls": "Documents",
  "xlsx": "Documents",
  "ppt": "Documents",
  "pptx": "Documents",
  "txt": "Documents",
  "odt": "Documents",
  "rtf": "Documents",

  // Images
  "png": "Pictures",
  "jpg": "Pictures",
  "jpeg": "Pictures",
  "gif": "Pictures",
  "bmp": "Pictures",
  "svg": "Pictures",
  "tiff": "Pictures",
  "webp": "Pictures",

  // Audio
  "mp3": "Music",
  "wav": "Music",
  "ogg": "Music",
  "flac": "Music",
  "aac": "Music",

  // Video
  "mp4": "Videos",
  "avi": "Videos",
  "mov": "Videos",
  "mkv": "Videos",
  "wmv": "Videos",
  "flv": "Videos",

  // Compressed Files
  "zip": "Compressed",
  "rar": "Compressed",
  "7z": "Compressed",
  "tar": "Compressed",
  "gz": "Compressed",

  // Code
  "html": "Code",
  "css": "Code",
  "js": "Code",
  "json": "Code",
  "xml": "Code",
  "py": "Code",
  "java": "Code",
  "cpp": "Code",
  "c": "Code",
  "cs": "Code",
  "php": "Code",
  "rb": "Code"
};

// Listen for download events
browser.downloads.onCreated.addListener(downloadItem => {
  const extension = getFileExtension(downloadItem.filename);

  // Use default folder if defined, or create a new folder with the extension name
  const folderName = defaultFolders[extension] || extension.toUpperCase();
  const targetPath = `${folderName}/${downloadItem.filename}`;

  // Move the file to the target directory upon completion
  browser.downloads.onChanged.addListener(delta => {
    if (delta.id === downloadItem.id && delta.state && delta.state.current === "complete") {
      organizeDownload(downloadItem, targetPath);
    }
  });
});

