// TODO use this later, clean up
// <button onclick="fetchRandomFile()">Fetch Random File</button>
// <p id="fileContent">Press the button to fetch content.</p>
//
// <script>
//     async function fetchRandomFile() {
//     const repo = 'krekosiewicz/SeoDevAudit'; // Replace with your repo path
//     const path = ''; // Use a subpath if you want to fetch from a specific directory inside the repo
//     const url = `https://api.github.com/repos/${repo}/contents/${path}`;
//
//     try {
//     const response = await fetch(url);
//     if (!response.ok) {
//     throw new Error('Network response was not ok');
// }
//     const files = await response.json();
//     const randomFile = files[Math.floor(Math.random() * files.length)];
//
//     // Assuming we want to fetch non-directory files only
//     if (randomFile.type !== 'file') {
//     document.getElementById('fileContent').innerText = 'Randomly selected item is not a file.';
//     return;
// }
//
//     // Fetching content of the random file
//     const fileResponse = await fetch(randomFile.download_url);
//     if (!fileResponse.ok) {
//     throw new Error('Network response was not ok');
// }
//     const content = await fileResponse.text(); // or .json() if it's a JSON file
//
//     document.getElementById('fileContent').innerText = content;
// } catch (error) {
//     console.error('Failed to fetch random file:', error);
//     document.getElementById('fileContent').innerText = 'Failed to fetch file.';
// }
// }
// </script>