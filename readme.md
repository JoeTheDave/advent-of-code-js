# Advent of Code

https://adventofcode.com/

made with https://vitejs.dev/

If you fork this project for your own use when solving Advent of Code puzzles, please read this readme file thoroughly.

## Installation

```sh
npm i
cp .env.example .env
```

In the resulting .env file, you need to replace the value for `sessionId` with your actual advent-of-code session cookie value

You can obtain your https://adventofcode.com/ session cookie value from chrome dev tools Application tab
![image](https://user-images.githubusercontent.com/1302467/205341797-fe96b2b0-e9e6-4b7d-b7e5-717df446fe7f.png)

### TODO

- [ ] Add Delete script to delete a day both from /app and from /lib/appData.json
- [ ] Add DeleteAll script to delete all content in /app and the appData.json for use by those who fork
- [ ] Migrate all legacy solutions into new project
- [ ] Add https://popmotion.io/pure/
