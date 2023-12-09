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

## Scripts

Generate solution files for a given year and day

```
npm run generate yyyy dd
```

Execute solutions and log return values to console along with running time

```
npm run exec
```

Update data file for completion of a given year and day (n is the star count, 0-2)

```
npm run update-stars yyyy dd n
```

Delete solution files for a given year and day (Be careful, this does not ask for verification)

```
npm run delete yyyy dd
```

## Debugging a solution

Run the `Debug Terminal` configuration
This will open up a new debug terminal
Set breakpoints as needed
run `npm run exec yyyy dd` to debug the solution file for the target day
When finished, kill the debug terminal

### TODO

- [ ] Add DeleteAll script to delete all content in /app and the appData.json for use by those who fork
- [ ] Migrate all legacy solutions into new project
- [ ] Add https://popmotion.io/pure/
- [ ] Add a warning flag to appData.js for each day that would show an icon for the day on the home page
