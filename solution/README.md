# Animal Classes

In this exercise, you will be using Object Constructors (or ES6 Classes) to build a Node.js script that utilizes classes to create new objects.

There are two example files that you will use to confirm that your program is working correctly. The `animals.csv` file is the first one. The next file is `animals2.csv` but beware that this second file has some issues that you will need to handle in your script.

Your script should:
* Use Object Oriented Programing techniques
* Import a list of animals from a CSV file passed as the first command line argument
* Find the most frequently occurring group of animals by species
* From that group, have the oldest animal output the following:
  > Nelson, the 3 year old dog, says "Woof!"

## Tips for Getting Started

### 1. Passing arguments
You can pass an argument to a node script like so:
```bash
node script.js data_file.csv
```
In the above example, the script to execute is `script.js` and the name of the file that has the data is `data_file.csv`.

Once you have called the script like this, the filename will be available to the script as `process.argv[2]`. You can then use this filename to read the contents of the file.

### 2. Reading file contents
Node comes with a module called `fs` which can be used to read the contents of a file. First, you will need to `require` the `fs` module and then you will be able to access functions such as `fs.readFile()` and `fs.readFileSync`.

### 3. Splitting the file
Once you have read the contents of the file, you can split it up into an array using the `split` string method. CSV files are split by line, and the values for each row are comma-separated.

### 4. Creating objects from data
Once you have all the data split up, you should be able to loop over each row. Using the data from each row, you should be able to create a new object. Can you create a different object for each row based on the species?

### 5. Different Objects
Each animal says something different. Dogs say "woof", cats say "meow" and birds say "tweet". The are all animals, but they all say different things which means they need to be different objects.

### 6. Object inheritance
Are there any similarities that could be moved to a base class so that each animal species can inherit that functionality from that base (aka parent) class?
