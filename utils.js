async function  organizeDownload(downloadItem, targetPath) {
  const filename = downloadItem.filename;
  const extension = getFileExtension(filename);

  // Prompt user to save the file
  const fileHandle = await showSaveFilePicker({ types: [{ description: filename, accept: { "*" : [extension] } }] });

  if (fileHandle) {
    // Use fileHandle to write the downloaded data to the chosen location
    // (implementation depends on your specific download logic)
    console.log(`Saved ${filename} to chosen location.`);
  } else {
    console.log('Download saving cancelled.');
  }
}