export const adventTitle = 'Step Counter'

export const testData = [
  '...........',
  '.....###.#.',
  '.###.##..#.',
  '..#.#...#..',
  '....#.#....',
  '.##..S####.',
  '.##..#...#.',
  '.......##..',
  '.##.#.####.',
  '.##..##.##.',
  '...........',
]

const data = [
  '...................................................................................................................................',
  '.......#.#.#.#.....#.#...##..........#........##....#......#...............##........#..#...##.......###....#.##........#.#....#...',
  '.###............#........#......#.....#...................................#............#..........#.....#..##.#.......#.....#......',
  '.......#....#...##......#..............##.###....##......#..................#.....#..#.....#...#.#....#................#....#.##...',
  '..............#................#..#.#...#......#.#..#....................##....#..#.#.....#.#..........#...#.#......#...#..#.......',
  '.....#.....#............##.#.....#......#..#...................................#......##..#.#..........#.#..##..#................#.',
  '.#....#......##.#...#..#.....#................##.#....#.............................##...#...#........#....#.......................',
  '....#.....#................#.....##...............#...............#...........#..#...........#.........#.............#........#....',
  '.........#.................#...........#......#...#...............#...........#....#....#..........#...#.#.##.................#....',
  '.........#....#..#.....#..#..#.#....#...#......................#................####...#.....#..........#.......#..#........#......',
  '..............#.##...............#.#.#..........#..#............#.........................................#.#.#............#.#.....',
  '..............#...#.....#...#....##.............##............##..#.................###........#....#.#.......................#..#.',
  '......#.....##..#....#.#......#.#....#..#.#.....#............................................##.#.....#.#.......#......#.#.#.......',
  '........#.............#.............#.....#................#.......#.....................#...#.........#..#...##..##...##..###.....',
  '.......#..........................#........................................#........###..##......#.#.....#....#....#....#.......#..',
  '...#......#.#..........#..#..........#..#.....#..........#........#.......................#....#.......#...##.............#.#......',
  '..#..##...#...........#.#.#.##........##..#...................#....##..##..##...............#....#...........#......##..#.......#..',
  '....................#.#...#.........##....................#.....#.....#..#....................................#.#.#........#.#.....',
  '............##.#..#.#..#............#..#..#...........#.........#...#...............................#...............#...#........#.',
  '.......##......#..............###......#............#.....#..........#..#.#.....#............#.#.......#..#...............#.....#..',
  '.......###.......#......#..#..#...#...#...........#......#.........#...........#...................#.....##..........#....#........',
  '..#...#.#..................##........................#..............##.....#.#.......................#...#..#...#..................',
  '.........#.......#...#...#.....#......#..............##.......##....#.............##..............##.....#....................#....',
  '..#....#.....#.....#............................#.#.......#.............#.....................#.........#.......#....##.#..........',
  '...#.#...#........#....#........#.#...............#..##......#........#.........#...................#...#.......#...#......#...#...',
  '.......................#..#..#.....#............#.#...#..#...........#.......##....#.#................#...................#....#...',
  '.........#....#.#..........#.#....#..................#..............#...#...#..........#..........#.............##..#.......#..#...',
  '...#......#.#......#.....#.##.#...#.....................#....##............#......#...#.........##...............#...............#.',
  '........#.......#...................................#....#...............#....#.##..#............#...#........................#....',
  '.......................#.......#..............#........#.#............#............................#...#......#..#..#.##.#.........',
  '......#...#.##.............................##.#...................#..#......#.#...#...##..#.........##......#..#....#........#..#..',
  '.........#.#............#................#...#.##......#..#.....#.##....##.#...........#....................#.............#........',
  '.....#...#.........#...#.#...#.........#...#....#......#......##...#..#........#.....#.....#.............##.........#..........#...',
  '.....#.......#............#.#............###..#..#.#.....#.##.......#.#.............##..##.....................#.#.......#..##.....',
  '.#...#.....#...#.......................#...#.##...#....#........#.....#...#..................#............##..#...#....#.##.#...#..',
  '......##.............#...#.........#.....#.....#..#........#......#..#......#..##...#..##.....#.#.................#..#.........#...',
  '.........#..........#.#............###.................#..#.....#.....#..#...#..........#........#..........#.................#....',
  '..#..........#....................#.....#..#...#....#.....#..#............#....#..#.........##..##..........#....#......#..........',
  '.........#..........#..#.......#............#...........#.......#..#...........#.......##.....................#.......#............',
  '...#...........................#..#.........#.#.....#.........#..........#........##.......#...#...............#....##.#.#....#....',
  '....##.....#...#.......................#..#...#......#....#.#.....#..##.......#.........##.....................................#...',
  '.#......#....##...#............#.....#..#........#......#...##.......#...#...#.#...#.#.....##..........................#..#........',
  '.#.......##...................#..#......#..#..................##....#..#....#..##.......#..#.....###................#.#............',
  '..............#.............#..#....#.....#.......#..#....##.........#..#.#.....###.......#.....##...##..........#..........#......',
  '..#.#..#.................#......#...#.#...#......#...#.............#...#..##...............#........#............##.#.....#........',
  '........#.....#.................#.....##.....#.#...#..#...........#..............#...#........#........##..............#...........',
  '.#......#........................#..##.#........##......##....#...#........#..#...#..##.........#....#...............#.............',
  '....#.....##..#............##.........#...#......#.#.....#.........#.#.#....###......................#...#.........................',
  '.........###............##..........#.#.#.....#.....#..###.....................##.....#.....#....#.#...............................',
  '...#.#.#............#..#.........###.....####.......#.....#...................#..##..##.......#....................................',
  '.#.#.....#.#...............................#..#.......##........................#...#....#...##.#...#....................##........',
  '...#.....................#...#...............#...#..#...#....#......##....#.#..#.#......#...#........#.....##.................##...',
  '.........#.........#..#...#.#.#...#...#..........#......####.#.......#................#.........###...#..#.........................',
  '....##..........#.........#..................#....#....#........#...#.........#..##...#....##.....#.#..........#..#..........#.....',
  '...#............#...#..#.#.#.....#..##.#..#.......................#..#.....#....#...#.....#.....#..........#...#...#...............',
  '.#..................................#..#..#..............#...#.....#...#................#.....#...#...........##..#................',
  '....##................#....#.......#..#....#....#............##..........##...#.......#.......#...........#....#...................',
  '....#..........#..........#..##......#.......###...........#............#..........#...#.#.#........#.#.#.#.#.#......#..........#..',
  '............#...........................................#.......#.##.#.....................#..#..#..#.............#..............#.',
  '...........#...#.........#.#....#................#.....#........#..#...#.#.....#..........#....................#...#..#............',
  '...........#.#...#....#.....#..#..........#...#.#..#..#.#.........#.#.##........#......#................#...........#..............',
  '................................................#..#..#....#.........#.............#....###..#...............#...#.......#.........',
  '............................#...#..#......##......#...#........#....#.....#.....#...#..#...#..........................###.#........',
  '..............#............#...#.#...##.......##.....#.##..........#....#............#.......#......##.#....#.......#..............',
  '...........#.##.##..#.#.#.........###........#...#...#................#.#...............#..#.#........##........#.##.......#.......',
  '.................................................................S.................................................................',
  '.............#.#......#..##..#.............#...........#..........#..##.#...............#..###..............#...#.##.##....#.......',
  '......#......##..#...............#..#............##.......#.#.......##..#...#.....##........#.................#....#......#........',
  '..........#..........#.#........#....#......#........#.....#.............#....#..............#.#..#...#.............#..............',
  '...........#........##.#.......#...#....#........#.#.....#........#..#..........#......##.....#...............#....#....#..........',
  '...........#............#.....#..#.............#..#....#.#.....##............#.......#.......#............#.#..##..................',
  '...........##..#...#.....##.........##.......#.......#.............#...#......#...##........#..#....#.......##..........#..........',
  '.............#.......#......#..#...##..#.................................####...#......#.............#..#..#.......#...............',
  '................#............#........#...##......##...................#..#...#.........#..#.........................#.............',
  '.........................#...##.#......#...........#........#........#...............###....#.#........#............#..............',
  '...#...........##........#..##.....#.....#.##......#....#..#........#.................#.#.........#........##..#..#................',
  '..#.............#.##....#......#...#.#.......#.......#.................#.....#.....#.............###......#...#............##......',
  '........................#.....#..##.........#.....#.....#..#........#...#.....#.....#....#......#...##..#...#.............#..#.....',
  '......#........................#.....#..#...#....#......#....#..#.#.#...#.....#..#......#..#..#...#...#..#..#...............#......',
  '..........#...........#......##.#.#............#...................##.....#..#...##....#..........#........#.............#.........',
  '.#.......................#.....#..........#..##....#....#...............##......#.#..#.###..............................#..#..#....',
  '.......................#........##......#.#......#......####..........#..#........#.#...........#..#.#..#.....#....................',
  '....##.....................#..#.......###.................##.......#...#..#.###..#...#..###........#....#.#.............##....#....',
  '........#..#............#...#.........#........#....#.##.......#...#.......#..#.#.......................................###........',
  '.......##.....#..............#..#....#..#...............#......#................#................##......#.............#.#.........',
  '....#......##...........###.....##................#...#....##.#......#....................#...##.#.......#............###...#......',
  '.#...#.........#..........#..#.##.#.#...........#.#.........##....#.#......#........#.....#..#..........##.............#...#....##.',
  '.........#.#.#....#..........#.....#...#..#.#...............#..........#....................##........................#.##....#..#.',
  '........###..#..................#...#.....#.................#.#....#........#................#...#...........................#...#.',
  '.....#.#..#........#.............#.........#.............#..###......#..#.#....#................##.....................##..........',
  '.#......###....#....#........#.#..#...#.#..#.#...#........................#.........#...#.........#..........#.......#.........#...',
  '..#.....#...........###........#.............#......#......#..........##.......#.#.#....#...#.................#...........#........',
  '.....#........#..#..#................#......#....#.........#.##.......#...........#...........#.#............#.#....#......##......',
  '.....#...##.#.....................#......................................#.#..#.#.....#.......#.#............####.#................',
  '.......#...#......................####..#..#.............#..#.................#.....#...........#............#..#..........#.......',
  '.##.............#...#.#...........................#..........##............#.......#.#......#............#........#................',
  '.......#.......#.......#................#......#.#.#...#.............#........#........#.....#.#..............#....................',
  '.#....#......#.#....#.................#.................##..............................#...............#.....###....#......#....#.',
  '........##...............................#........#.............................#.....#..####.............#...#..#.........##.##...',
  '.#.#............#..#..........#.......#......##.#.#..........#.........##.....#...........#..................#......##.......#.....',
  '.................##.....#.#..............#.#.#.###...#.............#.#....#.....##...#.##..#...........#.#.#....#..................',
  '..#.#..#..#................................#.#.......##.............#.#..........###................#.....##....#..................',
  '........#........#.##..#.....##.#........#.#...#..#..#.....#...#....#.#.......#...#.....#..............#.........#.#...#...........',
  '........#.....##..#..#......................#................#...............#...#.#.#..........#.#.##......................#......',
  '........#......#.....#.#.......#............#...........##...............#............#...........#..........#.#..........#.#......',
  '......###.....#.................###................#......#........#...#.#.#...#....#.#.........#...#...##........#...#............',
  '..#.##..#..#....#.....##..........#............#................#.#..#.........................#.##..##..........##....#...#.....#.',
  '....#............#.#..#...#......#..............#..#....##...#..#.....#.........#...#...........#..........#.#......#.#...##.###...',
  '....#................#.........#...............##..#...........#.......#.#..#.......................#....#...##........#...........',
  '....#....................##......#...#...........#.......#.#..#..............##.#....................#....#...................#....',
  '...#..............##......#..............#...........#.......#......#........##.............#.........#...#.#..##..................',
  '....#........#.#....#....#.#.....#........#..........................#..#.#.#.#.........#..........#.##...#.##..###.....#..........',
  '.#.......#.#............#..#....#.......#.#............#..........#.#........##.............#...#..#....#..........#..........#....',
  '...#...#......#..............#...##.......#..........#.....#......##...#..............#................#..............#...##..##...',
  '....#......#.##..##....#.....................#..........#....##......#................#.......#.#..................#......#.#......',
  '...#...............#..#..........#..#.....#..##............#.......###...........................##................#...#...........',
  '........#....#........#.......#....#..#.#..................#.............##.............#..#.......##..........................#...',
  '.#....................#......#.#........#..................#.##.#..#.....#.........##................................#.............',
  '.......#....................#..#................#......................................##..........#.....#..##..#..........#.#..#..',
  '..#.....#..#....#.....#......#..##...#.........#.........................................#...#....#.........#...##.......#.#.....#.',
  '...........#..........#..#.#...#...##..#.........#.#...........#....#..............#.............#.......##..#...#....##.......#...',
  '..#.........#.#..#...#.....#......................#..........#........#.......#....................#...##......#.................#.',
  '.#......#...#.#.#......#.#........#.#......#....#....#............................#......####............#.......#..#..........##..',
  '.#......##..........#...#...........#....#...#.#.................................#.##...#......................#..#..........#.#...',
  '.....#...#.......#...................##.#....#...##............#..##.........#..................#..#......#..........#....#.....##.',
  '.#..................#..........#.....................#.#.........................#...........#...##...#...#...##.#.................',
  '.#..#..#..#..#......#........#........#.......#.#...#.#..................#.......#.......#..#.#......#...#...............#.....#...',
  '.#........#......................#...##.......#..##......................###......#.....##....#..#................#................',
  '.#...........#.............#..#.....##.........#.##........#.............#....#.#...........#...............#.........#........#...',
  '......#....#.#...###................#....#......#..#........#.........................##.##...#..#..#.#......#.....................',
  '...................................................................................................................................',
]

export default data