const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#game-step");
const generateButton = document.querySelector("#generate-button");

let running = false;

initialize();

function initialize() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    generateButton.addEventListener("click", generateClicked);
    statusText.textContent = "Choose the Startpoint";
    running = true;
}

function cellClicked() {
    if(!running){
        return;
    }
    updateCell(this);
}

function updateCell(cell) {
    if(getComputedStyle(cell).backgroundColor === "rgb(204, 204, 204)"){
       switch(statusText.textContent) {
        case "Choose the Startpoint":
            cell.style.backgroundColor = "green";
            statusText.textContent = "Choose the Endpoint";
            break;
        case "Choose a Startpoint before generating the path":
            cell.style.backgroundColor = "green";
            statusText.textContent = "Choose the Endpoint";
            break;
        case "Choose the Endpoint":
            cell.style.backgroundColor = "red";
            statusText.textContent = "Set the walls";
            break;
        case "Choose an Endpoint before generating the path":
            cell.style.backgroundColor = "red";
            statusText.textContent = "Set the walls";
            break;
        case "Set the walls":
            cell.style.backgroundColor = "black";
            break;
        case "Choose an algorithm before generating":
            cell.style.backgroundColor = "black";
            break;
       }

    }
}

function generateClicked() {
    if(statusText.textContent === "Choose the Startpoint" || statusText.textContent === "Choose a Startpoint before generating the path"){
        statusText.textContent = "Choose a Startpoint before generating the path";
        return;
    }
    if(statusText.textContent === "Choose the Endpoint" || statusText.textContent === "Choose an Endpoint before generating the path"){
        statusText.textContent = "Choose an Endpoint before generating the path";
        return;
    }
    const algo = document.querySelector('input[name="radAnswer"]:checked');
    if(algo){
        statusText.textContent = "Generating shortest path";
        switch(algo.value){
            case "bfs":
                bfs();
                break;
            case "dfs":
                dfs();
                break;
            case "dijkstra":
                dijkstra();
                break;
        }
    } else {
        statusText.textContent = "Choose an algorithm before generating";
    }
}

function bfs() {
    
}

function dfs() {

}

function dijkstra() {

}

