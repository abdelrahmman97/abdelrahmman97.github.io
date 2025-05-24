import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component( {
    selector: 'app-game',
    templateUrl: './game.component.html',
	styleUrl: './game.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
} )
export class GameComponent implements OnInit {
	@ViewChild( 'gameCanvas', { static: true } ) canvas!: ElementRef<HTMLCanvasElement>;
	ctx!: CanvasRenderingContext2D;

	gridSize: number = 10;
	snake: any[] = [];
	direction = { x: 1, y: 0 };
	food = { x: 0, y: 0 };
	score = 0;
	topScore = JSON.parse( localStorage.getItem( 'score' ) ?? '0' );
	gameLoop: any;
	isGameOver: boolean = false;
	isNewScore: boolean = false;

	constructor () { }

	ngOnInit(): void {
		this.ctx = this.canvas.nativeElement.getContext( '2d' )!;
		this.resetGame();
	}

	resetGame() {
		this.snake = [ { x: 10, y: 10 } ];
		this.score = 0;
		this.direction = { x: 1, y: 0 };
		this.placeFood();
		if ( this.gameLoop ) {
			clearInterval( this.gameLoop );
		}
	}

	startGame() {
		this.isGameOver = false;
		this.resetGame();
		this.gameLoop = setInterval( () => {
			this.updateGame();
		}, 100 );
	}

	updateGame() {
		this.clearBoard();
		this.moveSnake();
		this.drawSnake();
		this.drawFood();
		this.checkCollision();
	}

	moveSnake() {
		const head = { x: this.snake[ 0 ].x + this.direction.x, y: this.snake[ 0 ].y + this.direction.y };

		this.snake.unshift( head );

		// Check if snake eats food
		if ( head.x === this.food.x && head.y === this.food.y ) {
			this.score++;
			this.placeFood();
		} else {
			this.snake.pop(); // Remove the tail
		}
	}

	placeFood() {
		this.food.x = Math.floor( Math.random() * ( this.canvas.nativeElement.width / this.gridSize ) );
		this.food.y = Math.floor( Math.random() * ( this.canvas.nativeElement.height / this.gridSize ) );
	}

	clearBoard() {
		this.ctx.clearRect( 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height );
	}

	drawSnake() {
		this.snake.forEach( segment => {
			this.ctx.fillStyle = '#43D9AD';
			this.ctx.fillRect( segment.x * this.gridSize, segment.y * this.gridSize, this.gridSize, this.gridSize );
		} );
	}

	drawFood() {
		this.ctx.fillStyle = '#4D5BCE';
		this.ctx.fillRect( this.food.x * this.gridSize, this.food.y * this.gridSize, this.gridSize, this.gridSize );
	}

	checkCollision() {
		const head = this.snake[ 0 ];

		// Check if snake hits the wall
		if ( head.x < 0 || head.y < 0 || head.x >= this.canvas.nativeElement.width / this.gridSize || head.y >= this.canvas.nativeElement.height / this.gridSize ) {
			this.endGame();
		}

		// Check if snake hits itself
		for ( let i = 1; i < this.snake.length; i++ ) {
			if ( this.snake[ i ].x === head.x && this.snake[ i ].y === head.y ) {
				this.endGame();
			}
		}
	}

	endGame() {
		this.isGameOver = true;
		this.isNewScore = this.score > this.topScore;
		if ( this.score > this.topScore ) {
			this.topScore = this.score;
			localStorage.setItem( 'score', JSON.stringify( this.score ) );
		}
		clearInterval( this.gameLoop );
	}

	@HostListener( 'window:keydown', [ '$event' ] )
	handleKeydown( event: KeyboardEvent ) {
		switch ( event.key ) {
			case 'Enter':
				this.startGame()
				break;
			case 'ArrowUp':
				if ( this.direction.y === 0 ) this.direction = { x: 0, y: -1 };
				break;
			case 'ArrowDown':
				if ( this.direction.y === 0 ) this.direction = { x: 0, y: 1 };
				break;
			case 'ArrowLeft':
				if ( this.direction.x === 0 ) this.direction = { x: -1, y: 0 };
				break;
			case 'ArrowRight':
				if ( this.direction.x === 0 ) this.direction = { x: 1, y: 0 };
				break;
		}
	}

}
