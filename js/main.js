'use strict'

//ブラウザがページを完全に読みこむまで待つ
addEventListener( 'load', () => {

	//変数gameに、あなたはゲームですよ、と教える
	const game = new Game();

	const game = new Game( 1136, 640 );
	
	//gameに、ゲームをスタートして、とお願いする
	game.start();

} );
