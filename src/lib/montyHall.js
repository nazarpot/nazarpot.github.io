

export function simulateMontyHall(num) {
    let stayVictoryCount = 0;
    let switchVictoryCount = 0;
    let doors = [0, 0, 0];

    for (let i = 0; i < num; i++) {
        let doorWithPrize = Math.floor(Math.random() * doors.length);
        doors[doorWithPrize] = 1;

        let chosenDoor = Math.floor(Math.random() * doors.length);

        let openedDoor;
        if (doorWithPrize === chosenDoor) {
            openedDoor = Math.floor(Math.random() * 2);
        } else {
            openedDoor = 3 - chosenDoor - doorWithPrize;
        }

        //check if you stay, do you win
        if (chosenDoor === doorWithPrize) {
            stayVictoryCount++;
        } else {
            switchVictoryCount++;
        }

        doors = [0, 0, 0];
    }

    return [stayVictoryCount, switchVictoryCount];
}
