"use strict";
{
  {
    const windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      var unit = 10;
    } else {
      var unit = 20;
    }

    if (windowWidth > 415) {
      const map = document.getElementById("js-map");
      const overMenu = document.getElementById("js-overMenu");
      const overTitleA = document.getElementById("js-overTitleA");
      const overTitleB = document.getElementById("js-overTitleB");
      const scoreA = document.getElementById("js-scoreA");
      const scoreB = document.getElementById("js-scoreB");
      const restartButton = document.getElementById("js-restartButton");
      const startMenu = document.getElementById("js-startMenu");
      const startButton = document.getElementById("js-startButton");
      const ruleButton = document.getElementById("js-ruleButton");
      var timerA;
      var timerB;

      function SnakeA() {
        this.width = unit;
        this.height = unit;
        this.direction = "right";
        this.bodyPosition = [
          { x: 6, y: 10 },
          { x: 5, y: 10 },
          { x: 4, y: 10 },
          { x: 3, y: 10 },
        ];

        // show snake
        this.show = function () {
          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].x !== null) {
              let snake = document.createElement("div");
              this.bodyPosition[i].flag = snake;

              snake.style.width = this.width + "px";
              snake.style.height = this.height + "px";
              snake.style.left = this.bodyPosition[i].x * this.width + "px";
              snake.style.top = this.bodyPosition[i].y * this.height + "px";

              map.appendChild(snake);
              snake.className = "snakeA";
            }
          }
        };

        this.gameOver = function () {
          clearInterval(timerA);
          clearInterval(timerB);
          map.classList.add("disabled");
          overMenu.classList.remove("disabled");
          overTitleA.textContent = "残念、、";
          overTitleB.textContent = "おめでとう！";
          let snakeLengthA = this.bodyPosition.length;
          let snakeLengthB = snakeB.bodyPosition.length;
          scoreA.textContent = snakeLengthA;
          scoreB.textContent = snakeLengthB;

          // snakeA reset
          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].flag !== null) {
              map.removeChild(this.bodyPosition[i].flag);
            }
          }
          this.direction = "right";
          this.bodyPosition = [
            { x: 6, y: 10 },
            { x: 5, y: 10 },
            { x: 4, y: 10 },
            { x: 3, y: 10 },
          ];
          this.show();

          // snakeB reset
          for (let i = 0; i < snakeB.bodyPosition.length; i++) {
            if (snakeB.bodyPosition[i].flag !== null) {
              map.removeChild(snakeB.bodyPosition[i].flag);
            }
          }
          snakeB.direction = "left";
          snakeB.bodyPosition = [
            { x: 20, y: 20 },
            { x: 21, y: 20 },
            { x: 22, y: 20 },
            { x: 23, y: 20 },
          ];
          snakeB.show();
        };

        this.run = function () {
          // body_move
          for (let i = this.bodyPosition.length - 1; i > 0; i--) {
            this.bodyPosition[i].x = this.bodyPosition[i - 1].x;
            this.bodyPosition[i].y = this.bodyPosition[i - 1].y;
          }

          // direction_move
          switch (this.direction) {
            case "left":
              this.bodyPosition[0].x -= 1;
              break;
            case "right":
              this.bodyPosition[0].x += 1;
              break;
            case "up":
              this.bodyPosition[0].y -= 1;
              break;
            case "down":
              this.bodyPosition[0].y += 1;
              break;
          }

          // map_out => game over
          if (
            this.bodyPosition[0].x < 0 ||
            this.bodyPosition[0].x > map.clientWidth / unit - 1 ||
            this.bodyPosition[0].y < 0 ||
            this.bodyPosition[0].y > map.clientHeight / unit - 1
          ) {
            this.gameOver();
            return false;
          }

          // eat_self => game over
          for (let i = 4; i < this.bodyPosition.length; i++) {
            if (
              this.bodyPosition[0].x === this.bodyPosition[i].x &&
              this.bodyPosition[0].y === this.bodyPosition[i].y
            ) {
              this.gameOver();
              return false;
            }
          }

          //eat_friend => game over
          for (let i = 0; i < snakeB.bodyPosition.length; i++) {
            if (
              this.bodyPosition[0].x === snakeB.bodyPosition[i].x &&
              this.bodyPosition[0].y === snakeB.bodyPosition[i].y
            ) {
              this.gameOver();
              return false;
            }
          }

          // eat_food
          if (
            this.bodyPosition[0].x === food.x &&
            this.bodyPosition[0].y === food.y
          ) {
            this.bodyPosition.push({ x: null, y: null, flag: null });

            map.removeChild(food.flag);
            food.show();
          }

          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].flag !== null) {
              map.removeChild(this.bodyPosition[i].flag);
            }
          }

          this.show();

          // eat_food
          if (
            this.bodyPosition[0].x === food.x &&
            this.bodyPosition[0].y === food.y
          ) {
            this.bodyPosition.push({ x: null, y: null, flag: null });

            map.removeChild(food.flag);
            food.show();
          }
        };
      }

      function SnakeB() {
        this.width = unit;
        this.height = unit;
        this.direction = "left";
        this.bodyPosition = [
          { x: 20, y: 20 },
          { x: 21, y: 20 },
          { x: 22, y: 20 },
          { x: 23, y: 20 },
        ];

        // show snake
        this.show = function () {
          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].x !== null) {
              let snake = document.createElement("div");
              this.bodyPosition[i].flag = snake;

              snake.style.width = this.width + "px";
              snake.style.height = this.height + "px";
              snake.style.left = this.bodyPosition[i].x * this.width + "px";
              snake.style.top = this.bodyPosition[i].y * this.height + "px";

              map.appendChild(snake);
              snake.className = "snakeB";
            }
          }
        };

        this.gameOver = function () {
          clearInterval(timerA);
          clearInterval(timerB);
          map.classList.add("disabled");
          overMenu.classList.remove("disabled");
          overTitleA.textContent = "おめでとう！";
          overTitleB.textContent = "残念、、";
          let snakeLengthA = snakeA.bodyPosition.length;
          let snakeLengthB = this.bodyPosition.length;
          scoreA.textContent = snakeLengthA;
          scoreB.textContent = snakeLengthB;

          // snakeB reset
          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].flag !== null) {
              map.removeChild(this.bodyPosition[i].flag);
            }
          }
          this.direction = "left";
          this.bodyPosition = [
            { x: 20, y: 20 },
            { x: 21, y: 20 },
            { x: 22, y: 20 },
            { x: 23, y: 20 },
          ];
          this.show();

          // snakeA reset
          for (let i = 0; i < snakeA.bodyPosition.length; i++) {
            if (snakeA.bodyPosition[i].flag !== null) {
              map.removeChild(snakeA.bodyPosition[i].flag);
            }
          }
          snakeA.direction = "right";
          snakeA.bodyPosition = [
            { x: 6, y: 10 },
            { x: 5, y: 10 },
            { x: 4, y: 10 },
            { x: 3, y: 10 },
          ];
          snakeA.show();
        };

        this.run = function () {
          // body_move
          for (let i = this.bodyPosition.length - 1; i > 0; i--) {
            this.bodyPosition[i].x = this.bodyPosition[i - 1].x;
            this.bodyPosition[i].y = this.bodyPosition[i - 1].y;
          }

          // direction_move
          switch (this.direction) {
            case "left":
              this.bodyPosition[0].x -= 1;
              break;
            case "right":
              this.bodyPosition[0].x += 1;
              break;
            case "up":
              this.bodyPosition[0].y -= 1;
              break;
            case "down":
              this.bodyPosition[0].y += 1;
              break;
          }

          // map_out => game over
          if (
            this.bodyPosition[0].x < 0 ||
            this.bodyPosition[0].x > map.clientWidth / unit - 1 ||
            this.bodyPosition[0].y < 0 ||
            this.bodyPosition[0].y > map.clientHeight / unit - 1
          ) {
            this.gameOver();
            return false;
          }

          // eat_self => game over
          for (let i = 4; i < this.bodyPosition.length; i++) {
            if (
              this.bodyPosition[0].x === this.bodyPosition[i].x &&
              this.bodyPosition[0].y === this.bodyPosition[i].y
            ) {
              this.gameOver();
              return false;
            }
          }

          //eat_friend => game over
          for (let i = 0; i < snakeA.bodyPosition.length; i++) {
            if (
              this.bodyPosition[0].x === snakeA.bodyPosition[i].x &&
              this.bodyPosition[0].y === snakeA.bodyPosition[i].y
            ) {
              this.gameOver();
              return false;
            }
          }

          // eat_food
          if (
            this.bodyPosition[0].x === food.x &&
            this.bodyPosition[0].y === food.y
          ) {
            this.bodyPosition.push({ x: null, y: null, flag: null });

            map.removeChild(food.flag);
            food.show();
          }

          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].flag !== null) {
              map.removeChild(this.bodyPosition[i].flag);
            }
          }

          this.show();

          // eat_food
          if (
            this.bodyPosition[0].x === food.x &&
            this.bodyPosition[0].y === food.y
          ) {
            this.bodyPosition.push({ x: null, y: null, flag: null });

            map.removeChild(food.flag);
            food.show();
          }
        };
      }

      function Food() {
        this.width = unit;
        this.height = unit;
        this.show = function () {
          let food = document.createElement("div");
          this.flag = food;
          this.x = Math.floor(Math.random() * 25);
          this.y = Math.floor(Math.random() * 30);

          food.style.width = this.width + "px";
          food.style.height = this.height + "px";

          food.style.left = this.x * this.width + "px";
          food.style.top = this.y * this.height + "px";

          map.appendChild(food);
          food.className = "food";
        };
      }

      var snakeA = new SnakeA();
      var snakeB = new SnakeB();
      var food = new Food();
      snakeA.show();
      snakeB.show();
      food.show();

      //direction & keyboard
      document.body.onkeydown = function (e) {
        let event = e || window.event;
        switch (event.keyCode) {
          case 38:
            if (snakeB.direction !== "down") {
              snakeB.direction = "up";
            }
            break;
          case 40:
            if (snakeB.direction !== "up") {
              snakeB.direction = "down";
            }
            break;
          case 37:
            if (snakeB.direction !== "right") {
              snakeB.direction = "left";
            }
            break;
          case 39:
            if (snakeB.direction !== "left") {
              snakeB.direction = "right";
            }
            break;
          case 87:
            if (snakeA.direction !== "down") {
              snakeA.direction = "up";
            }
            break;
          case 83:
            if (snakeA.direction !== "up") {
              snakeA.direction = "down";
            }
            break;
          case 65:
            if (snakeA.direction !== "right") {
              snakeA.direction = "left";
            }
            break;
          case 68:
            if (snakeA.direction !== "left") {
              snakeA.direction = "right";
            }
            break;
        }
      };

      startButton.addEventListener("click", () => {
        startMenu.classList.add("disabled");
        map.classList.remove("disabled");
        timerA = setInterval("snakeA.run()", 200);
      });

      startButton.addEventListener("click", () => {
        startMenu.classList.add("disabled");
        map.classList.remove("disabled");
        timerB = setInterval("snakeB.run()", 200);
      });

      restartButton.addEventListener("click", () => {
        overMenu.classList.add("disabled");
        map.classList.remove("disabled");
        timerA = setInterval("snakeA.run()", 200);
      });

      restartButton.addEventListener("click", () => {
        overMenu.classList.add("disabled");
        map.classList.remove("disabled");
        timerB = setInterval("snakeB.run()", 200);
      });

      ruleButton.addEventListener("click", () => {
        overMenu.classList.add("disabled");
        startMenu.classList.remove("disabled");
      });
    }

    // phone
    if (windowWidth < 415) {
      const map = document.getElementById("js-map");
      const overMenu = document.getElementById("js-overMenu-phone");
      const score = document.getElementById("js-score");
      const restartButton = document.getElementById("js-restartButton-phone");
      const startMenu = document.getElementById("js-startMenu");
      const startButton = document.getElementById("js-startButton");
      const ruleButton = document.getElementById("js-ruleButton-phone");
      const leftButton = document.getElementById("js-leftButton");
      const rightButton = document.getElementById("js-rightButton");
      const upButton = document.getElementById("js-upButton");
      const downButton = document.getElementById("js-downButton");
      const phoneButton = document.getElementById("js-phoneButton");
      var timer;

      function Snake() {
        this.width = unit;
        this.height = unit;
        this.direction = "right";
        this.bodyPosition = [
          { x: 6, y: 15 },
          { x: 5, y: 15 },
          { x: 4, y: 15 },
          { x: 3, y: 15 },
        ];

        // show snake
        this.show = function () {
          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].x !== null) {
              let snake = document.createElement("div");
              this.bodyPosition[i].flag = snake;

              snake.style.width = this.width + "px";
              snake.style.height = this.height + "px";
              snake.style.left = this.bodyPosition[i].x * this.width + "px";
              snake.style.top = this.bodyPosition[i].y * this.height + "px";

              map.appendChild(snake);
              snake.className = "snake";
            }
          }
        };

        this.gameOver = function () {
          clearInterval(timer);
          map.classList.add("disabled");
          overMenu.classList.remove("disabled");
          phoneButton.classList.add("disabled");
          overMenu.classList.remove("disabled");
          let snakeLength = this.bodyPosition.length;
          score.textContent = snakeLength;

          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].flag !== null) {
              map.removeChild(this.bodyPosition[i].flag);
            }
          }
          this.direction = "right";
          this.bodyPosition = [
            { x: 6, y: 15 },
            { x: 5, y: 15 },
            { x: 4, y: 15 },
            { x: 3, y: 15 },
          ];
          this.show();
        };

        this.run = function () {
          // body_move
          for (let i = this.bodyPosition.length - 1; i > 0; i--) {
            this.bodyPosition[i].x = this.bodyPosition[i - 1].x;
            this.bodyPosition[i].y = this.bodyPosition[i - 1].y;
          }

          // direction_move
          switch (this.direction) {
            case "left":
              this.bodyPosition[0].x -= 1;
              break;
            case "right":
              this.bodyPosition[0].x += 1;
              break;
            case "up":
              this.bodyPosition[0].y -= 1;
              break;
            case "down":
              this.bodyPosition[0].y += 1;
              break;
          }

          // map_out => game over
          if (
            this.bodyPosition[0].x < 0 ||
            this.bodyPosition[0].x > map.clientWidth / unit - 1 ||
            this.bodyPosition[0].y < 0 ||
            this.bodyPosition[0].y > map.clientHeight / unit - 1
          ) {
            this.gameOver();
            return false;
          }

          // eat_self => game over
          for (let i = 4; i < this.bodyPosition.length; i++) {
            if (
              this.bodyPosition[0].x === this.bodyPosition[i].x &&
              this.bodyPosition[0].y === this.bodyPosition[i].y
            ) {
              this.gameOver();
              return false;
            }
          }

          // eat_food
          if (
            this.bodyPosition[0].x === food.x &&
            this.bodyPosition[0].y === food.y
          ) {
            this.bodyPosition.push({ x: null, y: null, flag: null });

            map.removeChild(food.flag);
            food.show();
          }

          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].flag !== null) {
              map.removeChild(this.bodyPosition[i].flag);
            }
          }

          this.show();

          // eat_food
          if (
            this.bodyPosition[0].x === food.x &&
            this.bodyPosition[0].y === food.y
          ) {
            this.bodyPosition.push({ x: null, y: null, flag: null });

            map.removeChild(food.flag);
            food.show();
          }
        };
      }

      function Food() {
        this.width = unit;
        this.height = unit;
        this.show = function () {
          let food = document.createElement("div");
          this.flag = food;
          this.x = Math.floor(Math.random() * 25);
          this.y = Math.floor(Math.random() * 30);

          food.style.width = this.width + "px";
          food.style.height = this.height + "px";

          food.style.left = this.x * this.width + "px";
          food.style.top = this.y * this.height + "px";

          map.appendChild(food);
          food.className = "food";
        };
      }

      var snake = new Snake();
      var food = new Food();
      snake.show();
      food.show();

      // direction
      leftButton.addEventListener("click", () => {
        if (snake.direction !== "right") {
          snake.direction = "left";
        }
      });

      rightButton.addEventListener("click", () => {
        if (snake.direction !== "left") {
          snake.direction = "right";
        }
      });

      upButton.addEventListener("click", () => {
        if (snake.direction !== "down") {
          snake.direction = "up";
        }
      });

      downButton.addEventListener("click", () => {
        if (snake.direction !== "up") {
          snake.direction = "down";
        }
      });

      startButton.addEventListener("click", () => {
        startMenu.classList.add("disabled");
        map.classList.remove("disabled");
        phoneButton.classList.remove("disabled");
        timer = setInterval("snake.run()", 200);
      });

      restartButton.addEventListener("click", () => {
        overMenu.classList.add("disabled");
        map.classList.remove("disabled");
        phoneButton.classList.remove("disabled");
        timer = setInterval("snake.run()", 200);
      });

      ruleButton.addEventListener("click", () => {
        overMenu.classList.add("disabled");
        startMenu.classList.remove("disabled");
      });
    }
  }
}
